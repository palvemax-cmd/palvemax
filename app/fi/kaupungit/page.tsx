import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cities } from "@/content/cities/cities";
import { services } from "@/content/services/services";

export const metadata: Metadata = {
  title: "Palvelualueet — PalveMax Oy | Kanta-Häme",
  description: "PalveMax toimii 14 paikkakunnalla Kanta-Hämeen ja Uudenmaan alueella: Riihimäki, Hyvinkää, Hämeenlinna, Loppi, Janakkala ja muut.",
  alternates: {
    canonical: "https://palvemax.fi/fi/kaupungit",
    languages: { ru: "https://palvemax.fi/ru/goroda", fi: "https://palvemax.fi/fi/kaupungit", en: "https://palvemax.fi/en/cities" },
  },
};

const cityImages: Record<string, string> = {
  riihimaki: "/images/cities/city-riihimaki.webp",
  hyvinkaa: "/images/cities/city-hyvinkaa.webp",
  hameenlinna: "/images/cities/city-hameenlinna.webp",
};

const bigCities = ["riihimaki", "hyvinkaa", "hameenlinna"];

export default function FiCitiesPage() {
  const featured = cities.filter((c) => bigCities.includes(c.slug));
  const rest = cities.filter((c) => !bigCities.includes(c.slug));
  const topServices = services.slice(0, 3);

  return (
    <>
      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-100">
        <div className="container-max px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/fi" className="hover:text-gray-700">Etusivu</Link>
            <span>/</span>
            <span className="text-gray-900">Palvelualueet</span>
          </nav>
        </div>
      </div>

      <section style={{ backgroundColor: "var(--blue-dark)" }} className="py-12 px-4">
        <div className="container-max text-center">
          <span className="tag mb-3 bg-white/10 text-white border-0">14 paikkakuntaa</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-3"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Palvelemme koko alueella
          </h1>
          <p className="text-white/60 max-w-xl mx-auto">
            Kanta-Häme ja Uusimaa. Jos kaupunkisi ei ole listalla — kysy, todennäköisesti tulemme.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-2xl font-bold mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
            Pääkaupungit
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {featured.map((city) => (
              <Link key={city.slug} href={`/fi/kaupungit/${city.slug}`}
                className="group block rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-44 overflow-hidden">
                  {cityImages[city.slug] ? (
                    <Image src={cityImages[city.slug]} alt={city.name} fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div style={{ backgroundColor: "var(--blue)" }} className="w-full h-full" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                    <h3 className="text-white font-bold text-xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {city.name}
                    </h3>
                    {city.population && (
                      <span className="text-white/70 text-xs bg-black/30 px-2 py-1 rounded-full">
                        ~{(city.population / 1000).toFixed(0)}K as.
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">{city.fi.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {topServices.map((s) => (
                      <span key={s.slug} className="text-xs px-2 py-1 rounded-full"
                        style={{ backgroundColor: "rgba(26,60,107,0.07)", color: "var(--blue)" }}>
                        {s.fi.name}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-sm font-medium" style={{ color: "var(--orange)" }}>
                    Kaikki palvelut {city.name}ssa
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
            Koko palvelualue
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((city) => (
              <Link key={city.slug} href={`/fi/kaupungit/${city.slug}`}
                className="group flex items-start gap-4 p-4 rounded-2xl border border-gray-100 bg-white hover:border-blue-200 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: "rgba(26,60,107,0.07)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold group-hover:text-blue-700 transition-colors"
                      style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
                      {city.name}
                    </h3>
                    <span className="text-xs text-gray-400 shrink-0 ml-2">{city.region}</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{city.fi.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: "var(--gray-bg)" }}>
        <div className="container-max text-center max-w-xl">
          <h2 className="text-2xl font-bold mb-3"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
            Kaupunkisi ei ole listalla?
          </h2>
          <p className="text-gray-500 mb-6 text-sm">Tulemme listan ulkopuolelle — kysy, todennäköisesti järjestyy.</p>
          <Link href="/fi#forma" className="btn-primary">Jätä pyyntö</Link>
        </div>
      </section>
    </>
  );
}
