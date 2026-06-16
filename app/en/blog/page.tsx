import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — PalveMax Oy | Home Services Tips for Finland",
  description: "Practical articles about moving, cleaning and home maintenance in Finland.",
  alternates: { canonical: "https://palvemax.fi/en/blog" },
};

const enPosts = [
  { slug: "moving-in-finland", title: "Moving in Finland: What You Need to Know", desc: "Practical tips for a smooth move — timing, end-of-tenancy cleaning, elevator booking.", image: "/images/blog/blog-pereezd.webp", category: "moving", date: "2024-10-01" },
  { slug: "end-of-tenancy-cleaning", title: "End of Tenancy Cleaning: What Landlords Check", desc: "What Finnish landlords inspect and how to make sure you get your deposit back.", image: "/images/blog/blog-loppusiivous.webp", category: "cleaning", date: "2024-09-15" },
  { slug: "snow-removal-finland", title: "Snow Removal in Finland: Who is Responsible?", desc: "Legal obligations and how to set up a seasonal service contract.", image: "/images/blog/blog-sneg.webp", category: "snow removal", date: "2024-11-20" },
  { slug: "lawn-mowing-season", title: "When to Mow the Lawn in Finland", desc: "Optimal mowing schedule for Kanta-Häme. How often and what to do with an overgrown plot.", image: "/images/gallery/gallery-pokos-1.webp", category: "lawn", date: "2024-06-10" },
  { slug: "ikea-assembly-mistakes", title: "IKEA Assembly: Common Mistakes and How to Avoid Them", desc: "Why assembly takes twice as long as expected and how to prevent the most common issues.", image: "/images/blog/blog-ikea.webp", category: "furniture", date: "2024-08-22" },
  { slug: "home-maintenance-seasons", title: "Maintaining a House in Finland: A Seasonal Guide", desc: "Practical checklist: spring, summer, autumn, winter. What to DIY and what to outsource.", image: "/images/blog/blog-ukhod-dom.webp", category: "home care", date: "2024-04-05" },
];

export default function EnBlogPage() {
  return (
    <>
      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-100">
        <div className="container-max px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/en" className="hover:text-gray-700">Home</Link>
            <span>/</span>
            <span className="text-gray-900">Blog</span>
          </nav>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-10">
            <span className="tag mb-3">Blog</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
              Home Service Tips for Finland
            </h1>
            <p className="text-gray-500 max-w-xl mx-auto">Moving, cleaning, home maintenance — practical, no fluff.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enPosts.map((post) => (
              <Link key={post.slug} href={`/en/blog/${post.slug}`}
                className="card p-0 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image src={post.image} alt={post.title} fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="tag mb-2 text-xs">{post.category}</span>
                  <h2 className="text-lg font-semibold mt-2 mb-2 group-hover:text-blue-700 transition-colors leading-snug"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed mb-3">{post.desc}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{post.date.split("-").reverse().join(".")}</span>
                    <span className="font-medium" style={{ color: "var(--orange)" }}>Read more →</span>
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
