import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";
import { ServiceIcon } from "@/components/icons/ServiceIcons";
import { services, getServiceBySlug, getAllServiceSlugs } from "@/content/services/services";
import { cities } from "@/content/cities/cities";
import { testimonials } from "@/content/testimonials/testimonials";
import { fiFaq } from "@/lib/fi-faq";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getServiceBySlug(slug);
  if (!s) return {};
  return {
    title: s.fi.seoTitle,
    description: s.fi.seoDescription,
    alternates: {
      canonical: `https://palvemax.fi/fi/palvelut/${slug}`,
      languages: {
        ru: `https://palvemax.fi/ru/uslugi/${slug}`,
        fi: `https://palvemax.fi/fi/palvelut/${slug}`,
        en: `https://palvemax.fi/en/services/${slug}`,
      },
    },
    openGraph: s.image ? { images: [{ url: s.image }] } : undefined,
  };
}

export default async function FiServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const faq = fiFaq[slug] || [];
  const related = services.filter((s) => s.slug !== slug).slice(0, 4);
  const serviceTestimonials = testimonials.filter((t) => t.serviceSlug === slug).slice(0, 3);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      {faq.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      {/* Breadcrumb */}
      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-100">
        <div className="container-max px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2 flex-wrap">
            <Link href="/fi" className="hover:text-gray-700">Etusivu</Link>
            <span>/</span>
            <Link href="/fi/palvelut" className="hover:text-gray-700">Palvelut</Link>
            <span>/</span>
            <span className="text-gray-900">{service.fi.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: "420px" }}>
        {service.image && (
          <div className="absolute inset-0">
            <Image src={service.image} alt={service.fi.name} fill className="object-cover object-center" priority />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(15,36,66,0.92) 0%, rgba(26,60,107,0.80) 60%, rgba(26,60,107,0.60) 100%)" }} />
          </div>
        )}
        {!service.image && (
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, var(--blue-dark), var(--blue))" }} />
        )}

        <div className="container-max px-4 py-14 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(255,255,255,0.12)" }}>
                <ServiceIcon slug={slug} size={30} color="white" />
              </div>
              <span className="tag mb-3 bg-white/10 text-white border-0">Palvelu</span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {service.fi.h1}
              </h1>
              <div className="text-white/80 text-sm leading-relaxed space-y-3">
                {service.fi.intro.split("\\n\\n").map((p, i) => <p key={i}>{p}</p>)}
              </div>
              <div className="mt-6">
                <p className="text-white/50 text-xs mb-2 uppercase tracking-wider">Kaupungit</p>
                <div className="flex flex-wrap gap-2">
                  {cities.slice(0, 6).map((c) => (
                    <Link key={c.slug} href={`/fi/${c.slug}/${slug}`}
                      className="text-xs text-white/70 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors">
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <h2 className="text-lg font-bold mb-1"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
                Pyyntö — {service.fi.name}
              </h2>
              <p className="text-sm text-gray-500 mb-4">Vastaamme tunnin sisällä</p>
              <ContactForm preselectedService={service.fi.name} lang="fi" />
            </div>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
                Mitä palvelu sisältää
              </h2>
              <ul className="space-y-3">
                {(service.fi.whatWeOffer || service.ru.whatWeOffer).map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7"/>
                    </svg>
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
                Miten se toimii
              </h2>
              <ol className="space-y-4">
                {[
                  { step: "Pyyntö", desc: "Soitto, WhatsApp tai lomake — vastaamme tunnin sisällä." },
                  { step: "Tarkennus", desc: "Sovitaan yksityiskohdista: laajuus, osoite, aika." },
                  { step: "Työ", desc: "Tulemme ajoissa omilla työkaluilla." },
                  { step: "Maksu", desc: "Todellisen ajan mukaan — ei yllätyksiä." },
                ].map((s, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0 mt-0.5"
                      style={{ backgroundColor: "var(--blue)" }}>{i + 1}</div>
                    <div>
                      <div className="font-semibold text-sm mb-0.5" style={{ color: "var(--blue-dark)" }}>{s.step}</div>
                      <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {serviceTestimonials.length > 0 && (
        <section className="section-padding" style={{ backgroundColor: "var(--gray-bg)" }}>
          <div className="container-max">
            <h2 className="text-2xl font-bold mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
              Asiakasarvostelut
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {serviceTestimonials.map((t) => (
                <div key={t.id} className="card">
                  <div className="stars text-sm mb-2">{"★".repeat(t.rating)}</div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3 italic">&ldquo;{t.textFi}&rdquo;</p>
                  <div className="text-xs text-gray-500">{t.nameFi} · {t.city}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faq.length > 0 && (
        <section className="section-padding" style={{ backgroundColor: serviceTestimonials.length > 0 ? "var(--white)" : "var(--gray-bg)" }}>
          <div className="container-max max-w-3xl">
            <h2 className="text-2xl font-bold mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
              Usein kysytyt kysymykset
            </h2>
            <div className="space-y-3">
              {faq.map((item, i) => (
                <details key={i} className="faq-item card group">
                  <summary className="flex items-start justify-between gap-4 font-semibold text-sm"
                    style={{ color: "var(--blue-dark)" }}>
                    <span>{item.q}</span>
                    <span className="text-gray-400 shrink-0 mt-0.5 group-open:rotate-180 transition-transform">▾</span>
                  </summary>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Cities for this service */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-2xl font-bold mb-2"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
            {service.fi.name} kaupungeittain
          </h2>
          <p className="text-gray-500 text-sm mb-6">Valitse kaupunkisi — avautuu sivu yksityiskohtien kanssa</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {cities.map((c) => (
              <Link key={c.slug} href={`/fi/${c.slug}/${slug}`}
                className="card text-center text-sm font-medium hover:shadow-md hover:-translate-y-0.5 transition-all"
                style={{ color: "var(--blue)" }}>
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* hreflang alternates */}
      <div className="section-padding" style={{ backgroundColor: "var(--gray-bg)" }}>
        <div className="container-max text-center">
          <p className="text-sm text-gray-500 mb-3">Tämä sivu muilla kielillä:</p>
          <div className="flex justify-center gap-4">
            <Link href={`/ru/uslugi/${slug}`} className="btn-secondary text-sm py-2">🇷🇺 По-русски</Link>
            <Link href={`/en/services/${slug}`} className="btn-secondary text-sm py-2">🇬🇧 In English</Link>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-2xl font-bold mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
            Muut palvelut
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {related.map((s) => (
              <Link key={s.slug} href={`/fi/palvelut/${s.slug}`}
                className="card text-center hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: "rgba(26,60,107,0.07)" }}>
                  <ServiceIcon slug={s.slug} size={22} />
                </div>
                <div className="text-sm font-medium" style={{ color: "var(--blue-dark)" }}>{s.fi.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
