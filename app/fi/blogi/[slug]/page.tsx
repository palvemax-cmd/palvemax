import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getFiBlogPost, getAllFiBlogSlugs } from "@/lib/fi-blog";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllFiBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getFiBlogPost(slug);
  if (!post) return {};
  return {
    title: post.seoTitle,
    description: post.seoDescription,
    openGraph: { images: [{ url: post.image }] },
    alternates: { canonical: `https://palvemax.fi/fi/blogi/${slug}` },
  };
}

function markdownToHtml(md: string): string {
  return md
    .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold mt-8 mb-3" style="color:var(--blue-dark);font-family:\'DM Sans\',sans-serif">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="text-lg font-semibold mt-6 mb-2" style="color:var(--blue-dark)">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/^---$/gm, '<hr class="my-6 border-gray-200">')
    .replace(/^- (.+)$/gm, '<li class="flex items-start gap-2 mb-1"><span style="color:var(--orange)">–</span><span>$1</span></li>')
    .replace(/(<li[\s\S]*?<\/li>\n?)+/g, '<ul class="my-4 space-y-1">$&</ul>')
    .split('\n\n')
    .map(p => {
      if (p.startsWith('<h') || p.startsWith('<ul') || p.startsWith('<hr')) return p;
      if (p.trim() === '') return '';
      return `<p class="mb-4 text-gray-700 leading-relaxed">${p.trim()}</p>`;
    })
    .join('\n');
}

export default async function FiBlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getFiBlogPost(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.seoDescription,
    datePublished: post.date,
    image: `https://palvemax.fi${post.image}`,
    inLanguage: "fi",
    author: { "@type": "Organization", name: "PalveMax Oy" },
    publisher: { "@type": "Organization", name: "PalveMax Oy", url: "https://palvemax.fi" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-100">
        <div className="container-max px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/fi" className="hover:text-gray-700">Etusivu</Link>
            <span>/</span>
            <Link href="/fi/blogi" className="hover:text-gray-700">Blogi</Link>
            <span>/</span>
            <span className="text-gray-900 truncate max-w-xs">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative h-72 md:h-96 w-full overflow-hidden">
        <Image src={post.image} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.65) 100%)" }} />
        <div className="absolute bottom-6 left-0 right-0 px-4">
          <div className="container-max max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 bg-white/20 text-white border-0">
              {post.category}
            </span>
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

            <div dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }} />

            {/* CTA */}
            <div className="mt-10 p-6 rounded-2xl" style={{ backgroundColor: "var(--blue-dark)" }}>
              <p className="text-white font-semibold mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Tarvitsetko apua? Jätä pyyntö — vastaamme tunnin sisällä.
              </p>
              <Link href="/fi#forma" className="btn-primary text-sm">
                Jätä pyyntö
              </Link>
            </div>

            {/* Language links */}
            <div className="mt-6 pt-6 border-t border-gray-100 flex gap-3">
              <span className="text-sm text-gray-400">Muilla kielillä:</span>
              <Link href="/ru/blog" className="text-sm underline" style={{ color: "var(--blue)" }}>По-русски</Link>
              <Link href="/en/blog" className="text-sm underline" style={{ color: "var(--blue)" }}>In English</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
