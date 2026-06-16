import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";
import { ServiceIcon } from "@/components/icons/ServiceIcons";
import { services } from "@/content/services/services";
import { cities, getCityBySlug, getAllCitySlugs } from "@/content/cities/cities";
import { testimonials } from "@/content/testimonials/testimonials";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};
  return {
    title: `Home Services in ${city.name} — PalveMax Oy`,
    description: `Movers, cleaning, lawn mowing, snow removal in ${city.name}. PalveMax Oy — open 7 days. €45/hour.`,
    alternates: {
      canonical: `https://palvemax.fi/en/cities/${slug}`,
      languages: {
        fi: `https://palvemax.fi/fi/kaupungit/${slug}`,
        ru: `https://palvemax.fi/ru/goroda/${slug}`,
        en: `https://palvemax.fi/en/cities/${slug}`,
      },
    },
  };
}

export default async function EnCityPage({ params }: Props) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const cityTestimonials = testimonials.filter(
    (t) => t.city.toLowerCase().replace(/ä/g, "a").replace(/ö/g, "o") === slug
  );

  return (
    <>
      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-100">
        <div className="container-max px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/en" className="hover:text-gray-700">Home</Link>
            <span>/</span>
            <Link href="/en/cities" className="hover:text-gray-700">Areas</Link>
            <span>/</span>
            <span className="text-gray-900">{city.name}</span>
          </nav>
        </div>
      </div>

      <section className="py-12 px-4"
        style={{ background: "linear-gradient(135deg, var(--blue-dark), var(--blue))" }}>
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="tag mb-3 bg-white/10 text-white border-0">{city.region}</span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Home Services in {city.name}
              </h1>
              <p className="text-white/80 leading-relaxed mb-3">
                {city.en?.description || city.ru.description}
              </p>
              {slug !== "riihimaki" && (
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-2 rounded-lg text-sm"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  Travel from Riihimäki — +€20 per order
                </div>
              )}
              <div className="flex flex-wrap gap-2">
                {services.slice(0, 5).map((s) => (
                  <Link key={s.slug} href={`/en/${slug}/${s.slug}`}
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white rounded-full px-3 py-1.5 text-sm transition-colors">
                    <ServiceIcon slug={s.slug} size={14} color="rgba(255,255,255,0.8)" />
                    {s.en.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <h2 className="text-lg font-bold mb-1"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
                Request in {city.name}
              </h2>
              <p className="text-sm text-gray-500 mb-4">Reply within 1 hour</p>
              <ContactForm preselectedCity={city.name} lang="en" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-2xl font-bold mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
            Services in {city.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <Link key={s.slug} href={`/en/${slug}/${s.slug}`}
                className="card hover:shadow-md hover:-translate-y-0.5 transition-all group flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(26,60,107,0.08)" }}>
                  <ServiceIcon slug={s.slug} size={22} />
                </div>
                <div>
                  <div className="font-semibold text-sm mb-0.5 group-hover:text-blue-700 transition-colors"
                    style={{ color: "var(--blue-dark)" }}>
                    {s.en.name} in {city.name}
                  </div>
                  <div className="text-xs text-gray-400">{s.en.shortDesc}</div>
                </div>
                <svg className="w-4 h-4 ml-auto text-gray-300 group-hover:text-orange-500 shrink-0 transition-colors"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {cityTestimonials.length > 0 && (
        <section className="section-padding" style={{ backgroundColor: "var(--gray-bg)" }}>
          <div className="container-max">
            <h2 className="text-2xl font-bold mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
              Reviews from {city.name}
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {cityTestimonials.map((t) => (
                <div key={t.id} className="card">
                  <div className="stars text-sm mb-2">{"★".repeat(t.rating)}</div>
                  <p className="text-sm text-gray-700 italic leading-relaxed mb-3">&ldquo;{t.textEn}&rdquo;</p>
                  <div className="text-xs text-gray-500">{t.nameEn} · {t.serviceEn}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding" style={{ backgroundColor: cityTestimonials.length > 0 ? "white" : "var(--gray-bg)" }}>
        <div className="container-max">
          <h2 className="text-2xl font-bold mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
            Other areas
          </h2>
          <div className="flex flex-wrap gap-3">
            {cities.filter((c) => c.slug !== slug).map((c) => (
              <Link key={c.slug} href={`/en/cities/${c.slug}`}
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
