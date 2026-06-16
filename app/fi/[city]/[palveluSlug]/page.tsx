import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";
import { ServiceIcon } from "@/components/icons/ServiceIcons";
import { services, getServiceBySlug, getAllServiceSlugs } from "@/content/services/services";
import { cities, getCityBySlug, getAllCitySlugs } from "@/content/cities/cities";
import { testimonials } from "@/content/testimonials/testimonials";
import { fiFaq } from "@/lib/fi-faq";

interface Props { params: Promise<{ city: string; palveluSlug: string }> }

export async function generateStaticParams() {
  const params: { city: string; palveluSlug: string }[] = [];
  for (const citySlug of getAllCitySlugs()) {
    for (const serviceSlug of getAllServiceSlugs()) {
      params.push({ city: citySlug, palveluSlug: serviceSlug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug, palveluSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(palveluSlug);
  if (!city || !service) return {};
  return {
    title: `${service.fi.name} ${city.name}ssa — PalveMax Oy | 45 €/h`,
    description: `${service.fi.shortDesc} ${city.name}ssa. PalveMax Oy — ammattitaitoinen ja luotettava. Auki 7 päivää.`,
    alternates: {
      canonical: `https://palvemax.fi/fi/${citySlug}/${palveluSlug}`,
      languages: {
        ru: `https://palvemax.fi/ru/${citySlug}/${palveluSlug}`,
        fi: `https://palvemax.fi/fi/${citySlug}/${palveluSlug}`,
        en: `https://palvemax.fi/en/${citySlug}/${palveluSlug}`,
      },
    },
  };
}

export default async function FiLocalSeoPage({ params }: Props) {
  const { city: citySlug, palveluSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(palveluSlug);
  if (!city || !service) notFound();

  const faq = (fiFaq[palveluSlug] || []).slice(0, 4);
  const otherServices = services.filter((s) => s.slug !== palveluSlug).slice(0, 4);
  const otherCities = cities.filter((c) => c.slug !== citySlug).slice(0, 8);
  const localTestimonials = testimonials.filter(
    (t) => t.serviceSlug === palveluSlug || t.city === city.name
  ).slice(0, 2);

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.fi.name} ${city.name}ssa`,
    provider: { "@type": "LocalBusiness", name: "PalveMax Oy", url: "https://palvemax.fi" },
    areaServed: city.name,
    description: `${service.fi.shortDesc} ${city.name}ssa`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />

      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-100">
        <div className="container-max px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2 flex-wrap">
            <Link href="/fi" className="hover:text-gray-700">Etusivu</Link>
            <span>/</span>
            <Link href={`/fi/kaupungit/${citySlug}`} className="hover:text-gray-700">{city.name}</Link>
            <span>/</span>
            <span className="text-gray-900">{service.fi.name}</span>
          </nav>
        </div>
      </div>

      <section className="py-12 px-4"
        style={{ background: "linear-gradient(135deg, var(--blue-dark), var(--blue))" }}>
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(255,255,255,0.12)" }}>
                <ServiceIcon slug={palveluSlug} size={30} color="white" />
              </div>
              <span className="tag mb-3 bg-white/10 text-white border-0">{city.name}</span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {service.fi.name} {city.name}ssa
              </h1>
              <p className="text-white/80 leading-relaxed mb-3">
                {service.fi.intro.split("\\n\\n")[0]}
              </p>
              <p className="text-white/60 text-sm leading-relaxed mb-4">{city.fi.description}</p>

              {citySlug !== "riihimaki" && (
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-2 rounded-lg text-sm"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  Matka Riihimäeltä — +20 € tilaukseen
                </div>
              )}

              <div className="grid grid-cols-2 gap-3 mt-4">
                {[
                  { label: "Hinta", value: "45 €/h" },
                  { label: "Minimi", value: "2 tuntia" },
                  { label: "Auki", value: "7 päivää" },
                  { label: "Kieli", value: "FI · RU · EN" },
                ].map((f) => (
                  <div key={f.label} className="bg-white/10 rounded-lg px-3 py-2">
                    <div className="text-white/50 text-xs">{f.label}</div>
                    <div className="text-white font-semibold text-sm">{f.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <Link href={`/fi/palvelut/${palveluSlug}`} className="text-sm text-white/60 underline hover:text-white/90">
                  Palvelun täydellinen sivu →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <h2 className="text-lg font-bold mb-1"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
                {service.fi.name} {city.name}ssa
              </h2>
              <p className="text-sm text-gray-500 mb-4">Vastaamme tunnin sisällä · 7 päivää</p>
              <ContactForm preselectedService={service.fi.name} preselectedCity={city.name} lang="fi" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faq.length > 0 && (
        <section className="section-padding">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-5"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
                  Mitä teemme
                </h2>
                <ul className="space-y-2">
                  {service.ru.whatWeOffer.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-5"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
                  Usein kysytyt kysymykset
                </h2>
                <div className="space-y-3">
                  {faq.map((item, i) => (
                    <details key={i} className="faq-item card">
                      <summary className="flex items-start justify-between gap-4 font-semibold text-sm"
                        style={{ color: "var(--blue-dark)" }}>
                        <span>{item.q}</span>
                        <span className="text-gray-400 shrink-0">▾</span>
                      </summary>
                      <p className="mt-3 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">{item.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {localTestimonials.length > 0 && (
        <section className="section-padding" style={{ backgroundColor: "var(--gray-bg)" }}>
          <div className="container-max">
            <h2 className="text-2xl font-bold mb-5"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
              Arvostelut
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {localTestimonials.map((t) => (
                <div key={t.id} className="card">
                  <div className="stars text-sm mb-2">{"★".repeat(t.rating)}</div>
                  <p className="text-sm text-gray-700 italic leading-relaxed mb-3">&ldquo;{t.text}&rdquo;</p>
                  <div className="text-xs text-gray-500">{t.name} · {t.city} · {t.service}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other services */}
      <section className="section-padding" style={{ backgroundColor: localTestimonials.length > 0 ? "white" : "var(--gray-bg)" }}>
        <div className="container-max">
          <h2 className="text-xl font-bold mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
            Muut palvelut {city.name}ssa
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {otherServices.map((s) => (
              <Link key={s.slug} href={`/fi/${citySlug}/${s.slug}`}
                className="card text-center hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mx-auto mb-2"
                  style={{ backgroundColor: "rgba(26,60,107,0.07)" }}>
                  <ServiceIcon slug={s.slug} size={18} />
                </div>
                <div className="text-xs font-medium" style={{ color: "var(--blue-dark)" }}>{s.fi.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Same service other cities */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-xl font-bold mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
            {service.fi.name} muissa kaupungeissa
          </h2>
          <div className="flex flex-wrap gap-2">
            {otherCities.map((c) => (
              <Link key={c.slug} href={`/fi/${c.slug}/${palveluSlug}`}
                className="px-4 py-2 rounded-full border border-gray-200 hover:border-blue-300 text-sm text-gray-700 hover:text-blue-700 transition-colors">
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
