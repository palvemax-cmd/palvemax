import type { Metadata } from "next";
import Link from "next/link";
import { cities } from "@/content/cities/cities";
import { services } from "@/content/services/services";

export const metadata: Metadata = {
  title: "Service Areas — PalveMax Oy | Kanta-Häme, Finland",
  description: "PalveMax operates in 14 locations across Kanta-Häme and Uusimaa: Riihimäki, Hyvinkää, Hämeenlinna, Loppi, Janakkala and more.",
  alternates: {
    canonical: "https://palvemax.fi/en/cities",
    languages: { fi: "https://palvemax.fi/fi/kaupungit", ru: "https://palvemax.fi/ru/goroda", en: "https://palvemax.fi/en/cities" },
  },
};

export default function EnCitiesPage() {
  return (
    <>
      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-100">
        <div className="container-max px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/en" className="hover:text-gray-700">Home</Link>
            <span>/</span>
            <span className="text-gray-900">Service Areas</span>
          </nav>
        </div>
      </div>

      <section style={{ backgroundColor: "var(--blue-dark)" }} className="py-12 px-4">
        <div className="container-max text-center">
          <span className="tag mb-3 bg-white/10 text-white border-0">14 locations</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-3"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>
            We cover the whole region
          </h1>
          <p className="text-white/60 max-w-xl mx-auto">
            Kanta-Häme and Uusimaa. If your town is not on the list — ask us, we likely can come.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cities.map((city) => (
              <Link key={city.slug} href={`/en/cities/${city.slug}`}
                className="group flex items-start gap-4 p-5 rounded-2xl border border-gray-100 bg-white hover:border-blue-200 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: "rgba(26,60,107,0.07)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                </div>
                <div>
                  <h2 className="font-semibold group-hover:text-blue-700 transition-colors mb-1"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
                    {city.name}
                  </h2>
                  <p className="text-xs text-gray-500 leading-relaxed">{city.en?.description || city.ru.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
