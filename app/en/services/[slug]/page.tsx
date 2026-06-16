import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";
import { ServiceIcon } from "@/components/icons/ServiceIcons";
import { services, getServiceBySlug, getAllServiceSlugs } from "@/content/services/services";
import { cities } from "@/content/cities/cities";
import { testimonials } from "@/content/testimonials/testimonials";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getServiceBySlug(slug);
  if (!s) return {};
  return {
    title: s.en.seoTitle,
    description: s.en.seoDescription,
    alternates: {
      canonical: `https://palvemax.fi/en/services/${slug}`,
      languages: {
        fi: `https://palvemax.fi/fi/palvelut/${slug}`,
        ru: `https://palvemax.fi/ru/uslugi/${slug}`,
        en: `https://palvemax.fi/en/services/${slug}`,
      },
    },
  };
}

export default async function EnServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== slug).slice(0, 4);
  const serviceTestimonials = testimonials.filter((t) => t.serviceSlug === slug).slice(0, 3);

  return (
    <>
      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-100">
        <div className="container-max px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2 flex-wrap">
            <Link href="/en" className="hover:text-gray-700">Home</Link>
            <span>/</span>
            <Link href="/en/services" className="hover:text-gray-700">Services</Link>
            <span>/</span>
            <span className="text-gray-900">{service.en.name}</span>
          </nav>
        </div>
      </div>

      <section className="relative overflow-hidden" style={{ minHeight: "420px" }}>
        {service.image && (
          <div className="absolute inset-0">
            <Image src={service.image} alt={service.en.name} fill className="object-cover object-center" priority />
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
              <span className="tag mb-3 bg-white/10 text-white border-0">Service</span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {service.en.h1}
              </h1>
              <p className="text-white/80 text-sm leading-relaxed">{service.en.intro}</p>
              <div className="mt-6">
                <p className="text-white/50 text-xs mb-2 uppercase tracking-wider">Available in</p>
                <div className="flex flex-wrap gap-2">
                  {cities.slice(0, 6).map((c) => (
                    <Link key={c.slug} href={`/en/${c.slug}/${slug}`}
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
                Request — {service.en.name}
              </h2>
              <p className="text-sm text-gray-500 mb-4">Reply within 1 hour</p>
              <ContactForm preselectedService={service.en.name} lang="en" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
                What is included
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
                How it works
              </h2>
              <ol className="space-y-4">
                {[
                  { step: "Request", desc: "Call, WhatsApp or form — we reply within 1 hour." },
                  { step: "Details", desc: "We confirm scope, address and time." },
                  { step: "Work", desc: "We arrive on time with our own tools." },
                  { step: "Payment", desc: "Based on actual hours — no surprises." },
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

      {serviceTestimonials.length > 0 && (
        <section className="section-padding" style={{ backgroundColor: "var(--gray-bg)" }}>
          <div className="container-max">
            <h2 className="text-2xl font-bold mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
              Customer Reviews
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {serviceTestimonials.map((t) => (
                <div key={t.id} className="card">
                  <div className="stars text-sm mb-2">{"★".repeat(t.rating)}</div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3 italic">&ldquo;{t.textEn}&rdquo;</p>
                  <div className="text-xs text-gray-500">{t.nameEn} · {t.city}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-2xl font-bold mb-2"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
            {service.en.name} by city
          </h2>
          <p className="text-gray-500 text-sm mb-6">Select your city for a dedicated page</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {cities.map((c) => (
              <Link key={c.slug} href={`/en/${c.slug}/${slug}`}
                className="card text-center text-sm font-medium hover:shadow-md hover:-translate-y-0.5 transition-all"
                style={{ color: "var(--blue)" }}>
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: "var(--gray-bg)" }}>
        <div className="container-max">
          <h2 className="text-2xl font-bold mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
            Other services
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {related.map((s) => (
              <Link key={s.slug} href={`/en/services/${s.slug}`}
                className="card text-center hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: "rgba(26,60,107,0.07)" }}>
                  <ServiceIcon slug={s.slug} size={22} />
                </div>
                <div className="text-sm font-medium" style={{ color: "var(--blue-dark)" }}>{s.en.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
