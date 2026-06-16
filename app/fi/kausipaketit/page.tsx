import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";
import { packages } from "@/content/packages/packages";

export const metadata: Metadata = {
  title: "Kausipaketit - PalveMax Oy | Kotitalouspalvelut ympari vuoden",
  description: "Kesa-, syksy-, talvi- ja vuosipaketit kotitalouspalveluille. Yksi sopimus koko kaudeksi.",
  alternates: {
    canonical: "https://palvemax.fi/fi/kausipaketit",
    languages: { ru: "https://palvemax.fi/ru/sezonnyie-pakety", fi: "https://palvemax.fi/fi/kausipaketit", en: "https://palvemax.fi/en/seasonal-packages" },
  },
};

const SeasonIcons = {
  summer: () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="14" cy="14" r="5"/>
      <line x1="14" y1="2" x2="14" y2="5"/><line x1="14" y1="23" x2="14" y2="26"/>
      <line x1="2" y1="14" x2="5" y2="14"/><line x1="23" y1="14" x2="26" y2="14"/>
      <line x1="5.5" y1="5.5" x2="7.5" y2="7.5"/><line x1="20.5" y1="20.5" x2="22.5" y2="22.5"/>
    </svg>
  ),
  autumn: () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 4C14 4 6 10 6 17a8 8 0 0016 0C22 10 14 4 14 4z"/>
      <line x1="14" y1="14" x2="14" y2="26"/>
    </svg>
  ),
  winter: () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="14" y1="2" x2="14" y2="26"/><line x1="2" y1="14" x2="26" y2="14"/>
      <line x1="5.5" y1="5.5" x2="22.5" y2="22.5"/><line x1="22.5" y1="5.5" x2="5.5" y2="22.5"/>
      <circle cx="14" cy="14" r="3"/>
    </svg>
  ),
  annual: () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20L14 4l10 16H4z"/>
      <path d="M10 20v-6h8v6"/><line x1="14" y1="14" x2="14" y2="20"/>
    </svg>
  ),
};

const seasonStyles = {
  summer: { bg: "#fef3c7", text: "#92400e", border: "#fcd34d" },
  autumn: { bg: "#fce7d6", text: "#9a3412", border: "#fb923c" },
  winter: { bg: "#dbeafe", text: "#1e40af", border: "#93c5fd" },
  annual: { bg: "#d1fae5", text: "#065f46", border: "#6ee7b7" },
};

export default function FiPackagesPage() {
  return (
    <>
      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-100">
        <div className="container-max px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/fi" className="hover:text-gray-700">Etusivu</Link>
            <span>/</span>
            <span className="text-gray-900">Kausipaketit</span>
          </nav>
        </div>
      </div>

      <section style={{ backgroundColor: "var(--blue-dark)" }} className="py-12 px-4">
        <div className="container-max max-w-3xl text-center">
          <span className="tag mb-3 bg-white/10 text-white border-0">Paketit</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Kausipaketit kotitalouspalveluille
          </h1>
          <p className="text-white/70 leading-relaxed max-w-xl mx-auto">
            Yksi sopimus kaudeksi - et enaa mieti ruohonleikkausta, lehtiaa tai lunta.
            Seuraamme itse ja tulemme aikataulun mukaan.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-6">
            {packages.map((pkg) => {
              const style = seasonStyles[pkg.season];
              const Icon = SeasonIcons[pkg.season];
              return (
                <div key={pkg.slug} className="rounded-2xl overflow-hidden border"
                  style={{ borderColor: style.border }}>
                  <div className="px-5 py-4 flex items-center gap-3" style={{ backgroundColor: style.bg }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: "white", color: style.text }}>
                      <Icon />
                    </div>
                    <div>
                      <div className="font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: style.text }}>
                        {pkg.fi.name}
                      </div>
                      <div className="text-sm" style={{ color: style.text, opacity: 0.75 }}>
                        {pkg.fi.tagline}
                      </div>
                    </div>
                  </div>
                  <div className="p-5 bg-white">
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{pkg.fi.description}</p>
                    <ul className="space-y-2 mb-5">
                      {pkg.fi.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                          <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M5 13l4 4L19 7"/>
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-sm font-medium text-gray-700 mb-1">{pkg.fi.price}</p>
                      <p className="text-xs text-gray-400">{pkg.fi.note}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 max-w-xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
                Pyydaa tarjous omalle tontillesi
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                Hinta riippuu pinta-alasta ja sijainnista. Kuvaile tontti - lasketaan.
              </p>
            </div>
            <div className="card">
              <ContactForm compact lang="fi" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
