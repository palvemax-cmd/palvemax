import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/forms/ContactForm";
import { ServiceIcon } from "@/components/icons/ServiceIcons";
import HowItWorksInfographic from "@/components/infographics/HowItWorks";
import PriceCalculator from "@/components/infographics/PriceCalculator";
import { services } from "@/content/services/services";
import { cities } from "@/content/cities/cities";
import { testimonials, getAverageRating } from "@/content/testimonials/testimonials";
import { WHATSAPP_URL } from "@/lib/constants";
import HeroSlider from "@/components/sections/HeroSlider";

export const metadata: Metadata = {
  title: "PalveMax Oy — Muuttopalvelu, siivous, lumityöt Suomessa | 45 €/h",
  description:
    "Kotitalouspalvelut Riihimäellä, Hyvinkäällä ja Hämeenlinnassa. Muuttomiehet, siivous, ruohonleikkaus, lumityöt, huonekalukokoonpano. 45 €/h. Auki 7 päivää.",
  alternates: { canonical: "https://palvemax.fi/fi" },
};

const WaIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const avgRating = getAverageRating();

export default function FiHomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, var(--blue-dark) 0%, var(--blue) 60%, var(--blue-light) 100%)", minHeight: "600px" }}>
        <HeroSlider />
        <div className="container-max px-4 py-16 md:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-white text-sm mb-6">
                <span className="stars text-xs">★★★★★</span>
                <span className="opacity-90">{avgRating} · {testimonials.length} arvostelua</span>
                <span className="opacity-50">·</span>
                <span className="opacity-80">vuodesta 2024</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Kotitalouspalvelut{" "}
                <span style={{ color: "#f07a3a" }}>Suomessa</span>
              </h1>
              <p className="text-xl text-white/80 mb-1">Riihimäki · Hyvinkää · Hämeenlinna ja alue</p>
              <p className="text-white/50 text-sm mb-8">Русский · Suomi · English</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {services.slice(0, 6).map((s) => (
                  <Link key={s.slug} href={`/fi/palvelut/${s.slug}`}
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white rounded-full px-3 py-2 text-sm transition-colors">
                    <ServiceIcon slug={s.slug} size={16} color="white" />
                    <span>{s.fi.name}</span>
                  </Link>
                ))}
              </div>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-3xl font-bold text-white">45 €</span>
                <span className="text-white/60">/tunti · 1 työntekijä</span>
                <span className="text-white/40 text-sm">· min. 2 tuntia</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold px-6 py-4 rounded-xl text-white"
                  style={{ backgroundColor: "#25d366" }}>
                  <WaIcon />WhatsApp
                </a>
                <Link href="/fi#forma" className="inline-flex items-center gap-2 font-semibold px-6 py-4 rounded-xl text-white"
                  style={{ backgroundColor: "var(--orange)" }}>
                  Jätä pyyntö
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <h2 className="text-xl font-bold mb-1" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
                Jätä pyyntö
              </h2>
              <p className="text-sm text-gray-500 mb-5">Vastaamme tunnin sisällä · 7 päivää viikossa</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-200">
        <div className="container-max px-4 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { number: "45 €", label: "tunnissa / 1 työntekijä" },
              { number: "2 h", label: "minimitilaus" },
              { number: "7/7", label: "päivää viikossa" },
              { number: "14", label: "palvelupaikka" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--orange)" }}>{s.number}</div>
                <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-10">
            <span className="tag mb-3">Palvelut</span>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
              Mitä teemme
            </h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto">
              10 palvelua Kanta-Hämeen alueella. Yksi puhelu — hoidamme kaiken.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
            {services.map((s) => (
              <Link key={s.slug} href={`/fi/palvelut/${s.slug}`}
                className="card hover:shadow-md hover:-translate-y-0.5 transition-all group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(26,60,107,0.07)" }}>
                  <ServiceIcon slug={s.slug} size={28} />
                </div>
                <h3 className="font-semibold mb-1 group-hover:text-blue-700 transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
                  {s.fi.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.fi.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-padding" style={{ backgroundColor: "var(--gray-bg)" }}>
        <div className="container-max">
          <div className="text-center mb-10">
            <span className="tag mb-3">Prosessi</span>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
              Miten se toimii
            </h2>
          </div>
          <HowItWorksInfographic />
        </div>
      </section>

      {/* PRICING */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-10">
            <span className="tag mb-3">Hinnat</span>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
              Läpinäkyvä hinnoittelu
            </h2>
            <p className="text-gray-500 mt-2">Maksat vain todellisesta työajasta. Hinnat sisältävät ALV.</p>
          </div>
          <div className="max-w-lg mx-auto">
            <PriceCalculator />
          </div>
        </div>
      </section>

      {/* CITIES */}
      <section className="section-padding" style={{ backgroundColor: "var(--gray-bg)" }}>
        <div className="container-max">
          <div className="text-center mb-8">
            <span className="tag mb-3">Palvelualue</span>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
              14 paikkakuntaa
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            {cities.map((city) => (
              <Link key={city.slug} href={`/fi/kaupungit/${city.slug}`}
                className="px-4 py-2 rounded-full border border-gray-200 hover:border-blue-300 text-sm text-gray-700 hover:text-blue-700 transition-colors">
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="section-padding" style={{ backgroundColor: "var(--blue-dark)" }} id="forma">
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Jätä pyyntö
              </h2>
              <p className="text-white/60">Vastaamme tunnin sisällä · 7 päivää viikossa</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
