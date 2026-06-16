import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";
import { ADDRESS_FULL, ADDRESS_GOOGLE_MAPS, BUSINESS_ID, EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Meistä — PalveMax Oy | Kotitalouspalvelut Suomessa",
  description: "PalveMax Oy — virallisesti rekisteröity suomalainen yritys. Toimimme vuodesta 2024 Kanta-Hämeen alueella. Venäjä, suomi, englanti.",
  alternates: {
    canonical: "https://palvemax.fi/fi/meista",
    languages: { ru: "https://palvemax.fi/ru/o-kompanii", fi: "https://palvemax.fi/fi/meista", en: "https://palvemax.fi/en/about" },
  },
};

export default function FiAboutPage() {
  return (
    <>
      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-100">
        <div className="container-max px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/fi" className="hover:text-gray-700">Etusivu</Link>
            <span>/</span>
            <span className="text-gray-900">Meistä</span>
          </nav>
        </div>
      </div>

      <section className="py-12 px-4"
        style={{ background: "linear-gradient(135deg, var(--blue-dark), var(--blue))" }}>
        <div className="container-max max-w-3xl">
          <span className="tag mb-3 bg-white/10 text-white border-0">Meistä</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>
            PalveMax Oy — kotitalouspalvelut Suomessa
          </h1>
          <p className="text-white/80 leading-relaxed">
            Toimimme vuodesta 2024. Palvelemme 14 paikkakunnalla Kanta-Hämeen ja Uudenmaan alueella.
            Puhumme suomea, venäjää ja englantia — asiakkaan mukaan.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
                  Miten toimimme
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  PalveMax sai alkunsa yhdestä tarpeesta: venäjänkieliset Suomessa asuvat tarvitsivat tekijöitä, joille voi selittää tehtävän omalla kielellä — ja jotka tulevat ajoissa, ilman arvailua.
                </p>
                <p className="text-gray-600 leading-relaxed mt-3">
                  Kolmessa vuodessa kasvoimme kahdesta henkilöstä tiimiksi, joka kattaa 10 palvelua 14 kaupungissa. Ei siksi, että "halusimme kasvaa" — yksinkertaisesti asiakkaat kutsuivat takaisin ja suosittelivat tutuilleen.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
                  Yritystiedot
                </h2>
                <div className="space-y-2 text-sm text-gray-600">
                  {[
                    ["Yritys", "PalveMax Oy"],
                    ["Y-tunnus", BUSINESS_ID],
                    ["ALV", "Kaikki hinnat sisältävät ALV"],
                    ["Alue", "Kanta-Häme, Uusimaa"],
                    ["Osoite", ADDRESS_FULL],
                    ["Kielet", "Suomi · Venäjä · Englanti"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex gap-3">
                      <span className="font-medium text-gray-800 w-24 shrink-0">{label}</span>
                      {label === "Osoite" ? (
                        <a href={ADDRESS_GOOGLE_MAPS} target="_blank" rel="noopener noreferrer"
                          className="hover:underline" style={{ color: "var(--blue)" }}>{value}</a>
                      ) : <span>{value}</span>}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
                  Mitä sanomme ääneen
                </h2>
                <ul className="space-y-3 text-sm text-gray-600">
                  {[
                    "Emme ota tehtäviä, joita emme voi tehdä hyvin. Parempi sanoa 'ei' heti.",
                    "Jos myöhästymme — ilmoitamme etukäteen, emme jätä odottamaan hiljaa.",
                    "Hinta todellisen ajan mukaan. Emme venytä työtä.",
                    "Jos teimme jotain väärin — korjaamme ilman väittelyä.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="relative h-52 w-full rounded-2xl overflow-hidden mb-6">
                <Image src="/images/company/team-work.webp" alt="PalveMax tiimi työssä" fill className="object-cover" />
              </div>
              <div className="card mb-6">
                <h3 className="font-bold mb-4"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
                  Luvut
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { n: "2024", l: "Perustamisvuosi" },
                    { n: "14", l: "Palvelupaikkakuntaa" },
                    { n: "10", l: "Palvelulajia" },
                    { n: "7/7", l: "Päivää viikossa" },
                  ].map((s) => (
                    <div key={s.l} className="text-center p-3 rounded-xl" style={{ backgroundColor: "var(--gray-bg)" }}>
                      <div className="text-2xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--orange)" }}>{s.n}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card">
                <h3 className="font-bold mb-3"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
                  Kirjoita meille
                </h3>
                <ContactForm compact lang="fi" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
