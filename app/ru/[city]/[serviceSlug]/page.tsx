import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";
import { services, getServiceBySlug, getAllServiceSlugs } from "@/content/services/services";
import { cities, getCityBySlug, getAllCitySlugs } from "@/content/cities/cities";
import { testimonials } from "@/content/testimonials/testimonials";

interface Props {
  params: Promise<{ city: string; serviceSlug: string }>;
}

export async function generateStaticParams() {
  const params: { city: string; serviceSlug: string }[] = [];
  for (const citySlug of getAllCitySlugs()) {
    for (const serviceSlug of getAllServiceSlugs()) {
      params.push({ city: citySlug, serviceSlug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug, serviceSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);
  if (!city || !service) return {};

  return {
    title: `${service.ru.name} в ${city.name} — PalveMax Oy | 45 €/час`,
    description: `${service.ru.name} ${city.ru.seoBlurb}. PalveMax Oy — приедем вовремя, работаем 7 дней. Звоните или оставьте заявку.`,
    alternates: {
      canonical: `https://palvemax.fi/ru/${citySlug}/${serviceSlug}`,
    },
  };
}

export default async function LocalSeoPage({ params }: Props) {
  const { city: citySlug, serviceSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);
  if (!city || !service) notFound();

  // Related services in this city
  const otherServices = services.filter((s) => s.slug !== serviceSlug).slice(0, 4);

  // Other cities for this service
  const otherCities = cities.filter((c) => c.slug !== citySlug).slice(0, 8);

  // Local testimonials (city or service match)
  const localTestimonials = testimonials.filter(
    (t) => t.serviceSlug === serviceSlug || t.city === city.name
  ).slice(0, 2);

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.ru.name} в ${city.name}`,
    provider: {
      "@type": "LocalBusiness",
      name: "PalveMax Oy",
      url: "https://palvemax.fi",
      areaServed: city.name,
    },
    areaServed: city.name,
    description: `${service.ru.shortDesc} ${city.ru.seoBlurb}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />

      {/* Breadcrumb */}
      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-100">
        <div className="container-max px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2 flex-wrap">
            <Link href="/ru" className="hover:text-gray-700">Главная</Link>
            <span>/</span>
            <Link href={`/ru/goroda/${citySlug}`} className="hover:text-gray-700">{city.name}</Link>
            <span>/</span>
            <span className="text-gray-900">{service.ru.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section
        className="py-12 px-4"
        style={{ background: `linear-gradient(135deg, var(--blue-dark), var(--blue))` }}
      >
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3" style={{backgroundColor:"rgba(255,255,255,0.12)"}}>
                <ServiceIcon slug={serviceSlug} size={30} color="white" />
              </div>
              <span className="tag mb-3 bg-white/10 text-white border-0">{city.name}</span>
              <h1
                className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {service.ru.name} в {city.name}
              </h1>

              {/* Intro — first paragraph only for local page, rest on service page */}
              <p className="text-white/80 leading-relaxed mb-4">
                {service.ru.intro.split("\n\n")[0]}
              </p>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                {city.ru.description}
              </p>

              {/* Key facts */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { label: "Цена", value: "45 €/час" },
                  { label: "Минимум", value: "2 часа" },
                  { label: "График", value: "7 дней" },
                  { label: "Язык", value: "RU · FI · EN" },
                ].map((f) => (
                  <div key={f.label} className="bg-white/10 rounded-lg px-3 py-2">
                    <div className="text-white/50 text-xs">{f.label}</div>
                    <div className="text-white font-semibold text-sm">{f.value}</div>
                  </div>
                ))}
              </div>

              <div className="text-sm text-white/60">
                <Link href={`/ru/uslugi/${serviceSlug}`} className="underline hover:text-white/90">
                  Подробная страница услуги →
                </Link>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <h2
                className="text-lg font-bold mb-1"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}
              >
                {service.ru.name} в {city.name}
              </h2>
              <p className="text-sm text-gray-500 mb-4">Ответим в течение часа · 7 дней</p>
              <ContactForm
                preselectedService={service.ru.name}
                preselectedCity={city.name}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What we offer — compact */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2
                className="text-2xl font-bold mb-5"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}
              >
                Что делаем
              </h2>
              <ul className="space-y-2">
                {service.ru.whatWeOffer.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* First 3 FAQ */}
            <div>
              <h2
                className="text-2xl font-bold mb-5"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}
              >
                Часто спрашивают
              </h2>
              <div className="space-y-3">
                {service.ru.faq.slice(0, 4).map((item, i) => (
                  <details key={i} className="faq-item card">
                    <summary className="flex items-start justify-between gap-4 font-semibold text-sm" style={{ color: "var(--blue-dark)" }}>
                      <span>{item.q}</span>
                      <span className="text-gray-400 shrink-0">▾</span>
                    </summary>
                    <p className="mt-3 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
              <Link
                href={`/ru/uslugi/${serviceSlug}`}
                className="inline-block mt-4 text-sm font-medium"
                style={{ color: "var(--orange)" }}
              >
                Все {service.ru.faq.length} вопросов →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {localTestimonials.length > 0 && (
        <section className="section-padding" style={{ backgroundColor: "var(--gray-bg)" }}>
          <div className="container-max">
            <h2
              className="text-2xl font-bold mb-5"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}
            >
              Отзывы
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {localTestimonials.map((t) => (
                <div key={t.id} className="card">
                  <div className="stars text-sm mb-2">{"★".repeat(t.rating)}</div>
                  <p className="text-sm text-gray-700 italic leading-relaxed mb-3">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="text-xs text-gray-500">
                    {t.name} · {t.city} · {t.service}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other services in this city */}
      <section className="section-padding" style={{ backgroundColor: localTestimonials.length > 0 ? "var(--white)" : "var(--gray-bg)" }}>
        <div className="container-max">
          <h2
            className="text-xl font-bold mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}
          >
            Другие услуги в {city.name}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/ru/${citySlug}/${s.slug}`}
                className="card text-center hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mx-auto mb-1" style={{backgroundColor:"rgba(26,60,107,0.07)"}}>
                  <ServiceIcon slug={s.slug} size={18} />
                </div>
                <div className="text-xs font-medium" style={{ color: "var(--blue-dark)" }}>
                  {s.ru.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Same service in other cities */}
      <section className="section-padding">
        <div className="container-max">
          <h2
            className="text-xl font-bold mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}
          >
            {service.ru.name} в других городах
          </h2>
          <div className="flex flex-wrap gap-2">
            {otherCities.map((c) => (
              <Link
                key={c.slug}
                href={`/ru/${c.slug}/${serviceSlug}`}
                className="px-4 py-2 rounded-full border border-gray-200 hover:border-blue-300 text-sm text-gray-700 hover:text-blue-700 transition-colors"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
