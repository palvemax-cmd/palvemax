import type { Metadata } from "next";
import Link from "next/link";
import { testimonials, getAverageRating } from "@/content/testimonials/testimonials";

export const metadata: Metadata = {
  title: "Customer Reviews — PalveMax Oy",
  description: "Real reviews from PalveMax customers in Riihimäki, Hyvinkää, Hämeenlinna and the region.",
  alternates: { canonical: "https://palvemax.fi/en/reviews",
    languages: { fi: "https://palvemax.fi/fi/arvostelut", ru: "https://palvemax.fi/ru/otzovy", en: "https://palvemax.fi/en/reviews" } },
};

export default function EnReviewsPage() {
  const avg = getAverageRating();
  return (
    <>
      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-100">
        <div className="container-max px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/en" className="hover:text-gray-700">Home</Link>
            <span>/</span>
            <span className="text-gray-900">Reviews</span>
          </nav>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-10">
            <span className="tag mb-3">Reviews</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
              What our customers say
            </h1>
            <div className="flex items-center justify-center gap-3">
              <span className="stars text-2xl">{"★".repeat(5)}</span>
              <span className="text-2xl font-bold" style={{ color: "var(--blue-dark)" }}>{avg}</span>
              <span className="text-gray-400">/ 5 · {testimonials.length} reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.id} className="card flex flex-col">
                <div className="stars text-sm mb-2">{"★".repeat(t.rating)}</div>
                <p className="text-sm text-gray-700 leading-relaxed italic flex-1 mb-4">
                  &ldquo;{t.textEn}&rdquo;
                </p>
                <div className="pt-3 border-t border-gray-100 flex items-start justify-between gap-2">
                  <div>
                    <div className="font-semibold text-sm" style={{ color: "var(--blue-dark)" }}>{t.nameEn}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{t.city} · {t.serviceEn}</div>
                  </div>
                  <div className="text-xs text-gray-300">{t.date.split("-").reverse().join(".")}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/en#forma" className="btn-primary">Request a service</Link>
          </div>
        </div>
      </section>
    </>
  );
}
