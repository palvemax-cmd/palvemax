import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/content/services/services";
import { ServiceIcon } from "@/components/icons/ServiceIcons";

export const metadata: Metadata = {
  title: "All Services — PalveMax Oy | Home Services in Finland",
  description: "10 home services in Riihimäki, Hyvinkää, Hämeenlinna. Movers, cleaning, lawn mowing, snow removal, furniture assembly. €45/hour, min. 2 hours.",
  alternates: {
    canonical: "https://palvemax.fi/en/services",
    languages: { fi: "https://palvemax.fi/fi/palvelut", ru: "https://palvemax.fi/ru/uslugi", en: "https://palvemax.fi/en/services" },
  },
};

export default function EnServicesPage() {
  return (
    <>
      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-100">
        <div className="container-max px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/en" className="hover:text-gray-700">Home</Link>
            <span>/</span>
            <span className="text-gray-900">Services</span>
          </nav>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-10">
            <span className="tag mb-3">All services</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
              Home Services in Finland
            </h1>
            <p className="text-gray-500 max-w-xl mx-auto">
              10 services. 1 worker — €45/hour, 2 workers — €90/hour. Minimum 2 hours. Open 7 days a week.
            </p>
            <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full text-sm"
              style={{ backgroundColor: "rgba(232,96,28,0.1)", color: "var(--orange)" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              Travel outside Riihimäki — +€20 per order
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link key={s.slug} href={`/en/services/${s.slug}`}
                className="card hover:shadow-md hover:-translate-y-0.5 transition-all group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(26,60,107,0.07)" }}>
                  <ServiceIcon slug={s.slug} size={26} />
                </div>
                <h2 className="text-lg font-bold mb-2 group-hover:text-blue-700 transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
                  {s.en.name}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.en.shortDesc}</p>
                <div className="flex items-center text-sm font-medium" style={{ color: "var(--orange)" }}>
                  Details & FAQ
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
