import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Блог PalveMax — советы по переезду, уборке и обслуживанию дома",
  description: "Практические статьи о переезде, уборке, покосе травы, уборке снега и уходе за домом в Финляндии.",
  alternates: { canonical: "https://palvemax.fi/ru/blog" },
};

interface BlogMeta {
  slug: string;
  title: string;
  seoDescription: string;
  date: string;
  category: string;
  image: string;
}

const slugToImage: Record<string, string> = {
  "pereezd-v-finlyandii":        "/images/blog/blog-pereezd.webp",
  "loppusiivous-guide":          "/images/blog/blog-loppusiivous.webp",
  "uborka-snega-zima-finlyandiya":"/images/blog/blog-sneg.webp",
  "kogda-kosit-travu-finlyandiya":"/images/gallery/gallery-pokos-1.webp",
  "sborka-mebeli-ikea-finland":  "/images/blog/blog-ikea.webp",
  "ukhod-za-domom-finlyandiya":  "/images/blog/blog-ukhod-dom.webp",
};

function getBlogPosts(): BlogMeta[] {
  const blogDir = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".md"));
  return files.map((file) => {
    const content = fs.readFileSync(path.join(blogDir, file), "utf-8");
    const fm = content.match(/^---\n([\s\S]*?)\n---/)?.[1] || "";
    const get = (key: string) => fm.match(new RegExp(`^${key}:\\s*["']?(.+?)["']?$`, "m"))?.[1] || "";
    const slug = get("slug");
    return {
      slug,
      title: get("title"),
      seoDescription: get("seoDescription"),
      date: get("date"),
      category: get("category"),
      image: slugToImage[slug] || "/images/og/og-services.webp",
    };
  }).sort((a, b) => (a.date < b.date ? 1 : -1));
}

export default function BlogPage() {
  const posts = getBlogPosts();
  return (
    <>
      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-100">
        <div className="container-max px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/ru" className="hover:text-gray-700">Главная</Link>
            <span>/</span>
            <span className="text-gray-900">Блог</span>
          </nav>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-10">
            <span className="tag mb-3">Блог</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
              Советы по жизни в Финляндии
            </h1>
            <p className="text-gray-500 max-w-xl mx-auto">Переезд, уборка, уход за домом — по делу, без воды.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/ru/blog/${post.slug}`}
                className="card p-0 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all group">
                {/* Photo */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="tag mb-2 text-xs">{post.category}</span>
                  <h2 className="text-lg font-semibold mt-2 mb-2 group-hover:text-blue-700 transition-colors leading-snug"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed mb-3">{post.seoDescription}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{post.date.split("-").reverse().join(".")}</span>
                    <span className="font-medium" style={{ color: "var(--orange)" }}>Читать →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
