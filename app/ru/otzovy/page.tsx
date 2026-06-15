import type { Metadata } from "next";
import Link from "next/link";
import { testimonials, getAverageRating } from "@/content/testimonials/testimonials";

export const metadata: Metadata = {
  title: "Отзывы клиентов — PalveMax Oy",
  description:
    "Реальные отзывы клиентов PalveMax из Riihimäki, Hyvinkää, Hämeenlinna. Переезды, уборка, грузчики, покос травы.",
  alternates: { canonical: "https://palvemax.fi/ru/otzovy" },
};

export default function ReviewsPage() {
  const avg = getAverageRating();

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "PalveMax Oy",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avg,
      ratingCount: testimonials.length,
      bestRating: 5,
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: 5,
      },
      reviewBody: t.text,
      datePublished: t.date,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-100">
        <div className="container-max px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/ru" className="hover:text-gray-700">Главная</Link>
            <span>/</span>
            <span className="text-gray-900">Отзывы</span>
          </nav>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-10">
            <span className="tag mb-3">Отзывы</span>
            <h1
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}
            >
              Что говорят клиенты
            </h1>
            <div className="flex items-center justify-center gap-3 text-gray-600">
              <span className="stars text-2xl">{"★".repeat(5)}</span>
              <span className="text-2xl font-bold" style={{ color: "var(--blue-dark)" }}>{avg}</span>
              <span className="text-gray-400">/ 5 · {testimonials.length} отзывов</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.id} className="card flex flex-col">
                <div className="stars text-sm mb-2">{"★".repeat(t.rating)}</div>
                <p className="text-sm text-gray-700 leading-relaxed italic flex-1 mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="pt-3 border-t border-gray-100 flex items-start justify-between gap-2">
                  <div>
                    <div
                      className="font-semibold text-sm"
                      style={{ color: "var(--blue-dark)" }}
                    >
                      {t.name}
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">
                      {t.city} · {t.service}
                    </div>
                  </div>
                  <div className="text-xs text-gray-300 shrink-0">
                    {t.date.split("-").reverse().join(".")}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-500 text-sm mb-4">
              Хотите оставить отзыв? Напишите нам в WhatsApp или по email.
            </p>
            <Link href="/ru#forma" className="btn-primary">
              Оставить заявку
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
