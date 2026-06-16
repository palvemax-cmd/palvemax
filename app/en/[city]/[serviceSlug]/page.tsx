import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";
import { ServiceIcon } from "@/components/icons/ServiceIcons";
import { services, getServiceBySlug, getAllServiceSlugs } from "@/content/services/services";
import { cities, getCityBySlug, getAllCitySlugs } from "@/content/cities/cities";
import { testimonials } from "@/content/testimonials/testimonials";

interface Props { params: Promise<{ city: string; serviceSlug: string }> }

export async function generateStaticParams() {
  const params: { city: string; serviceSlug: string }[] = [];
  for (const c of getAllCitySlugs()) for (const s of getAllServiceSlugs()) {
    params.push({ city: c, serviceSlug: s });
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug, serviceSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);
  if (!city || !service) return {};
  return {
    title: `${service.en.name} in ${city.name} — PalveMax Oy`,
    description: `${service.en.shortDesc} in ${city.name}. Professional, reliable, open 7 days.`,
    alternates: {
      canonical: `https://palvemax.fi/en/${citySlug}/${serviceSlug}`,
      languages: {
        fi: `https://palvemax.fi/fi/${citySlug}/${serviceSlug}`,
        ru: `https://palvemax.fi/ru/${citySlug}/${serviceSlug}`,
        en: `https://palvemax.fi/en/${citySlug}/${serviceSlug}`,
      },
    },
  };
}

export default async function EnLocalPage({ params }: Props) {
  const { city: citySlug, serviceSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);
  if (!city || !service) notFound();

  const localTestimonials = testimonials.filter(
    (t) => t.serviceSlug === serviceSlug || t.city === city.name
  ).slice(0, 2);
  const otherServices = services.filter((s) => s.slug !== serviceSlug).slice(0, 4);
  const otherCities = cities.filter((c) => c.slug !== citySlug).slice(0, 8);

  return (
    <>
      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-100">
        <div className="container-max px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2 flex-wrap">
            <Link href="/en" className="hover:text-gray-700">Home</Link>
            <span>/</span>
            <Link href={`/en/cities/${citySlug}`} className="hover:text-gray-700">{city.name}</Link>
            <span>/</span>
            <span className="text-gray-900">{service.en.name}</span>
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
                <ServiceIcon slug={serviceSlug} size={30} color="white" />
              </div>
              <span className="tag mb-3 bg-white/10 text-white border-0">{city.name}</span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {service.en.name} in {city.name}
              </h1>
              <p className="text-white/80 leading-relaxed mb-3">{service.en.intro}</p>
              {citySlug !== "riihimaki" && (
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-2 rounded-lg text-sm"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  Travel from Riihimäki — +€20 per order
                </div>
              )}
              <div className="grid grid-cols-2 gap-3 mt-4">
                {[
                  { label: "Price", value: "€45/hour" },
                  { label: "Minimum", value: "2 hours" },
                  { label: "Open", value: "7 days" },
                  { label: "Languages", value: "EN · FI · RU" },
                ].map((f) => (
                  <div key={f.label} className="bg-white/10 rounded-lg px-3 py-2">
                    <div className="text-white/50 text-xs">{f.label}</div>
                    <div className="text-white font-semibold text-sm">{f.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <h2 className="text-lg font-bold mb-1"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
                {service.en.name} in {city.name}
              </h2>
              <p className="text-sm text-gray-500 mb-4">Reply within 1 hour · 7 days</p>
              <ContactForm preselectedService={service.en.name} preselectedCity={city.name} lang="en" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-5"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
                What is included
              </h2>
              <ul className="space-y-2">
                {(service.en.whatWeOffer || service.fi.whatWeOffer || service.ru.whatWeOffer).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {localTestimonials.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-5"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
                  Reviews
                </h2>
                <div className="space-y-4">
                  {localTestimonials.map((t) => (
                    <div key={t.id} className="card">
                      <div className="stars text-sm mb-2">{"★".repeat(t.rating)}</div>
                      <p className="text-sm text-gray-700 italic leading-relaxed mb-3">&ldquo;{t.textEn}&rdquo;</p>
                      <div className="text-xs text-gray-500">{t.nameEn} · {t.city}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: "var(--gray-bg)" }}>
        <div className="container-max">
          <h2 className="text-xl font-bold mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
            Other services in {city.name}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {otherServices.map((s) => (
              <Link key={s.slug} href={`/en/${citySlug}/${s.slug}`}
                className="card text-center hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mx-auto mb-2"
                  style={{ backgroundColor: "rgba(26,60,107,0.07)" }}>
                  <ServiceIcon slug={s.slug} size={18} />
                </div>
                <div className="text-xs font-medium" style={{ color: "var(--blue-dark)" }}>{s.en.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-xl font-bold mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
            {service.en.name} in other areas
          </h2>
          <div className="flex flex-wrap gap-2">
            {otherCities.map((c) => (
              <Link key={c.slug} href={`/en/${c.slug}/${serviceSlug}`}
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
