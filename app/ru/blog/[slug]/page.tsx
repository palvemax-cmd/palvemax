import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";

interface Props {
  params: Promise<{ slug: string }>;
}

interface ParsedPost {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  date: string;
  category: string;
  content: string;
  image: string;
}

const slugToImage: Record<string, string> = {
  "pereezd-v-finlyandii":         "/images/blog/blog-pereezd.webp",
  "loppusiivous-guide":           "/images/blog/blog-loppusiivous.webp",
  "uborka-snega-zima-finlyandiya":"/images/blog/blog-sneg.webp",
  "kogda-kosit-travu-finlyandiya":"/images/gallery/gallery-pokos-1.webp",
  "sborka-mebeli-ikea-finland":   "/images/blog/blog-ikea.webp",
  "ukhod-za-domom-finlyandiya":   "/images/blog/blog-ukhod-dom.webp",
};

function getPost(slug: string): ParsedPost | null {
  const blogDir = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".md"));
  for (const file of files) {
    const raw = fs.readFileSync(path.join(blogDir, file), "utf-8");
    const fm = raw.match(/^---\n([\s\S]*?)\n---/)?.[1] || "";
    const get = (key: string) => fm.match(new RegExp(`^${key}:\\s*["']?(.+?)["']?$`, "m"))?.[1] || "";
    if (get("slug") === slug) {
      const content = raw.replace(/^---\n[\s\S]*?\n---\n/, "").trim();
      return {
        slug: get("slug"),
        title: get("title"),
        seoTitle: get("seoTitle"),
        seoDescription: get("seoDescription"),
        date: get("date"),
        category: get("category"),
        content,
        image: slugToImage[slug] || "/images/og/og-services.webp",
      };
    }
  }
  return null;
}

function getAllSlugs(): string[] {
  const blogDir = path.join(process.cwd(), "content/blog");
  return fs.readdirSync(blogDir).filter((f) => f.endsWith(".md")).map((file) => {
    const raw = fs.readFileSync(path.join(blogDir, file), "utf-8");
    const fm = raw.match(/^---\n([\s\S]*?)\n---/)?.[1] || "";
    return fm.match(/^slug:\s*["']?(.+?)["']?$/m)?.[1] || "";
  }).filter(Boolean);
}

function markdownToHtml(md: string): string {
  return md
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/^---$/gm, "<hr>")
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    .replace(/(<li>[\s\S]*?<\/li>)/g, "<ul>$1</ul>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/^(?!<[huli])(.+)/gm, "<p>$1</p>")
    .replace(/<p><\/p>/g, "")
    .replace(/<p>(<h[0-9]>)/g, "$1")
    .replace(/(<\/h[0-9]>)<\/p>/g, "$1")
    .replace(/<p>(<[uh]l>)/g, "$1")
    .replace(/(<\/[uh]l>)<\/p>/g, "$1")
    .replace(/<p>(<hr>)<\/p>/g, "$1");
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.seoTitle,
    description: post.seoDescription,
    openGraph: { images: [{ url: post.image }] },
    alternates: { canonical: `https://palvemax.fi/ru/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const html = markdownToHtml(post.content);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.seoDescription,
    datePublished: post.date,
    image: `https://palvemax.fi${post.image}`,
    author: { "@type": "Organization", name: "PalveMax Oy" },
    publisher: { "@type": "Organization", name: "PalveMax Oy", url: "https://palvemax.fi" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Breadcrumb */}
      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-100">
        <div className="container-max px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/ru" className="hover:text-gray-700">Главная</Link>
            <span>/</span>
            <Link href="/ru/blog" className="hover:text-gray-700">Блог</Link>
            <span>/</span>
            <span className="text-gray-900 truncate max-w-xs">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative h-72 md:h-96 w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.6) 100%)" }} />
        <div className="absolute bottom-6 left-0 right-0 px-4">
          <div className="container-max max-w-2xl">
            <span className="tag bg-white/20 text-white border-0 mb-2 text-xs">{post.category}</span>
            <h1 className="text-2xl md:text-3xl font-bold text-white leading-snug"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            <div className="text-sm text-gray-400 mb-8 flex items-center gap-3">
              <span>{post.date.split("-").reverse().join(".")}</span>
              <span>·</span>
              <span>PalveMax Oy</span>
            </div>

            <div className="prose-palvemax" dangerouslySetInnerHTML={{ __html: html }} />

            {/* CTA */}
            <div className="mt-10 p-6 rounded-2xl" style={{ backgroundColor: "var(--blue-dark)" }}>
              <p className="text-white font-semibold mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Нужна помощь? Оставьте заявку — ответим в течение часа.
              </p>
              <Link href="/ru#forma" className="btn-primary text-sm">
                Оставить заявку
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
