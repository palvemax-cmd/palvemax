import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";
import { ServiceIcon } from "@/components/icons/ServiceIcons";
import { services, getServiceBySlug, getAllServiceSlugs } from "@/content/services/services";
import { cities } from "@/content/cities/cities";
import { testimonials } from "@/content/testimonials/testimonials";
import { cases, getCasesByService } from "@/content/cases/cases";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.ru.seoTitle,
    description: service.ru.seoDescription,
    alternates: { canonical: `https://palvemax.fi/ru/uslugi/${slug}` },
    openGraph: service.image ? { images: [{ url: service.image }] } : undefined,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const serviceTestimonials = testimonials.filter((t) => t.serviceSlug === slug).slice(0, 3);
  const serviceCases = getCasesByService(slug);
  const related = services.filter((s) => s.slug !== slug).slice(0, 4);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.ru.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-100">
        <div className="container-max px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/ru" className="hover:text-gray-700">Главная</Link>
            <span>/</span>
            <Link href="/ru/uslugi" className="hover:text-gray-700">Услуги</Link>
            <span>/</span>
            <span className="text-gray-900">{service.ru.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero с фото */}
      <section className="relative overflow-hidden" style={{ minHeight: "420px" }}>
        {/* Background image */}
        {service.image && (
          <div className="absolute inset-0">
            <Image
              src={service.image}
              alt={service.ru.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(15,36,66,0.92) 0%, rgba(26,60,107,0.80) 60%, rgba(26,60,107,0.60) 100%)" }} />
          </div>
        )}
        {!service.image && (
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, var(--blue-dark), var(--blue))" }} />
        )}

        <div className="container-max px-4 py-14 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(255,255,255,0.12)" }}>
                <ServiceIcon slug={slug} size={30} className="opacity-90" />
              </div>
              <span className="tag mb-3 bg-white/10 text-white border-0">Услуга</span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {service.ru.h1}
              </h1>
              <div className="text-white/80 text-sm leading-relaxed space-y-3">
                {service.ru.intro.split("\n\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="mt-6">
                <p className="text-white/50 text-xs mb-2 uppercase tracking-wider">Города</p>
                <div className="flex flex-wrap gap-2">
                  {cities.slice(0, 6).map((c) => (
                    <Link key={c.slug} href={`/ru/${c.slug}/${slug}`}
                      className="text-xs text-white/70 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors">
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <h2 className="text-lg font-bold mb-1" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
                Заявка — {service.ru.name}
              </h2>
              <p className="text-sm text-gray-500 mb-4">Ответим в течение часа</p>
              <ContactForm preselectedService={service.ru.name} />
            </div>
          </div>
        </div>
      </section>

      {/* What we offer + Process */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
                Что входит в услугу
              </h2>
              <ul className="space-y-3">
                {service.ru.whatWeOffer.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5 shrink-0" style={{ backgroundColor: "var(--orange)" }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1.5 5l2.5 2.5 4.5-4.5"/>
                      </svg>
                    </span>
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
                Как это работает
              </h2>
              <ol className="space-y-4">
                {service.ru.process.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0 mt-0.5" style={{ backgroundColor: "var(--blue)" }}>
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-semibold text-sm mb-0.5" style={{ color: "var(--blue-dark)" }}>{step.step}</div>
                      <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Cases */}
      {serviceCases.length > 0 && (
        <section className="section-padding" style={{ backgroundColor: "var(--gray-bg)" }}>
          <div className="container-max">
            <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
              Реальные кейсы
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {serviceCases.map((c) => (
                <div key={c.slug} className="card">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
                      {c.ru.title}
                    </h3>
                    <span className="tag text-xs ml-3 shrink-0">{c.city}</span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><span className="font-medium text-gray-800">Задача:</span> {c.ru.task}</p>
                    <p><span className="font-medium text-gray-800">Результат:</span> {c.ru.result}</p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100 flex gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>{c.ru.duration}</span>
                    <span className="flex items-center gap-1"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>{c.ru.workers} чел.</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {serviceTestimonials.length > 0 && (
        <section className="section-padding">
          <div className="container-max">
            <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
              Отзывы об этой услуге
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {serviceTestimonials.map((t) => (
                <div key={t.id} className="card">
                  <div className="stars text-sm mb-2">{"★".repeat(t.rating)}</div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3 italic">&ldquo;{t.text}&rdquo;</p>
                  <div className="text-xs text-gray-500">{t.name} · {t.city}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section-padding" style={{ backgroundColor: "var(--gray-bg)" }}>
        <div className="container-max max-w-3xl">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
            Частые вопросы
          </h2>
          <div className="space-y-3">
            {service.ru.faq.map((item, i) => (
              <details key={i} className="faq-item card group">
                <summary className="flex items-start justify-between gap-4 font-semibold text-sm" style={{ color: "var(--blue-dark)" }}>
                  <span>{item.q}</span>
                  <span className="text-gray-400 shrink-0 mt-0.5 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
            {service.ru.name} по городам
          </h2>
          <p className="text-gray-500 text-sm mb-6">Выберите свой город — откроется страница с деталями</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {cities.map((c) => (
              <Link key={c.slug} href={`/ru/${c.slug}/${slug}`}
                className="card text-center text-sm font-medium hover:shadow-md hover:-translate-y-0.5 transition-all"
                style={{ color: "var(--blue)" }}>
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section-padding" style={{ backgroundColor: "var(--gray-bg)" }}>
        <div className="container-max">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
            Другие услуги
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {related.map((s) => (
              <Link key={s.slug} href={`/ru/uslugi/${s.slug}`}
                className="card text-center hover:shadow-md hover:-translate-y-0.5 transition-all group">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: "rgba(26,60,107,0.06)" }}>
                  <ServiceIcon slug={s.slug} size={22} />
                </div>
                <div className="text-sm font-medium" style={{ color: "var(--blue-dark)" }}>{s.ru.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
