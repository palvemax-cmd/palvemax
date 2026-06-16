import type { Metadata } from "next";
import Link from "next/link";
import { cases } from "@/content/cases/cases";
import { getServiceBySlug } from "@/content/services/services";
import { ServiceIcon } from "@/components/icons/ServiceIcons";

export const metadata: Metadata = {
  title: "Referenssit — PalveMax Oy | Esimerkkejä töistämme",
  description: "9 oikeaa referenssiä: muutot, siivous, huonekalukokoonpano, lumityöt Suomessa. Tehtävä, prosessi, tulos.",
  alternates: {
    canonical: "https://palvemax.fi/fi/referenssit",
    languages: { ru: "https://palvemax.fi/ru/kejsy", fi: "https://palvemax.fi/fi/referenssit", en: "https://palvemax.fi/en/cases" },
  },
};

// Finnish case titles mapping
const fiCaseTitles: Record<string, { title: string; task: string; result: string }> = {
  "pereezd-riihimaki-2024": {
    title: "Kolmen huoneen asunnon muutto Riihimäellä",
    task: "Perhe muutti kolmiosta 4. kerroksesta ilman hissiä uudisrakennukseen. Paljon tavaraa, mukaan lukien suuri PAX-kaappi ja piano.",
    result: "Muutto valmis yhdessä päivässä. Piano paikallaan, PAX koottuna, pakkausjäte viety pois.",
  },
  "sborka-ikea-hyvinkaa": {
    title: "IKEA METOD -keittiön kokoaminen Hyvinkäällä",
    task: "Uusi METOD-keittiö 12 osalla. Asiakas osti kaiken IKEAsta ja toimitti kotiin, mutta päätti olla kokoamatta itse.",
    result: "Keittiö asennettuna, kaikki ovet suorassa, vetolaatikot liukuvat pehmeästi.",
  },
  "loppusiivous-hameenlinna": {
    title: "Loppusiivous kaksion Hämeenlinnassa",
    task: "Asiakas muutti pois vuokra-asunnosta. Asunut 4 vuotta. Vuokranantaja suomalainen, tarkka. Tarvittiin ammattimainen loppusiivous.",
    result: "Vuokranantaja otti asunnon vastaan ilman huomautuksia. Vakuus palautettu kokonaan.",
  },
  "pokos-loppi-sezon": {
    title: "Kausiruohonleikkaus 1800 m² tontille Loppella",
    task: "Maatilan tontti suurella nurmikolla, puilla ja monimutkaisilla reunoilla aidan varrella. Omistaja asuu Hyvinkäällä, tulee viikonloppuisin.",
    result: "Kaudessa 12 käyntiä. Tontti aina siistinä omistajien saapuessa.",
  },
  "uborka-snega-janakkala": {
    title: "Talvikunnossapito omakotitalossa Janakkalassa",
    task: "Iäkäs pariskunta. Mies ei enää pystynyt auraamaan itse. Tarvittiin luotettava säännöllinen auraus koko talven.",
    result: "Talvessa 18 käyntiä. Kertaakaan ei tarvinnut muistuttaa tai odottaa.",
  },
  "melkij-remont-riihimaki": {
    title: "Pienet korjaustyöt uudessa asunnossa Riihimäellä",
    task: "Perhe muutti uuteen asuntoon. Lista kertynyt: TV:n kiinnitys seinään, 4 hyllyä, verhotanko, peili, hanan vaihto, ulko-oven säätö.",
    result: "Kaikki listalla yhdessä käynnissä. Televisio suorassa, ovi sulkeutuu kunnolla, hana ei vuoda.",
  },
  "uborka-doma-hyvinkaa": {
    title: "Perussiivous 160 m² talossa ennen myyntiä Hyvinkäällä",
    task: "Omistajat laittivat talon myyntiin. Tarvittiin perussiivous — jotta talo näyttäisi hyvälle esittelyissä.",
    result: "Talo myytiin kahden viikon kuluessa esittelyistä.",
  },
  "uborka-dvora-hameenlinna": {
    title: "Syyspihansiivous Hämeenlinnassa",
    task: "Suuri tontti — noin 800 m², useita suuria koivuja ja vaahteraa. Lokakuun lehtisateen jälkeen 20–25 cm lehtikerros.",
    result: "Tontti puhdas. 16 kompostipussia lehtiä. Tilattu seuraava vuosi etukäteen.",
  },
  "demontazh-mebeli-loppi": {
    title: "Keittiön ja kolmen kaapin purku muuttoa varten Loppella",
    task: "Muutto omakotitalosta. 4 metrin keittiökalusteet ja kolme suurta liukuovikaappia.",
    result: "Huonekalut lastattu rekkaan ilman häviöitä. Uudessa paikassa sama asentaja kokosi kaiken.",
  },
};

export default function FiCasesPage() {
  return (
    <>
      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-100">
        <div className="container-max px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/fi" className="hover:text-gray-700">Etusivu</Link>
            <span>/</span>
            <span className="text-gray-900">Referenssit</span>
          </nav>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-10">
            <span className="tag mb-3">Referenssit</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
              Esimerkkejä töistämme
            </h1>
            <p className="text-gray-500 max-w-xl mx-auto">
              Tehtävä — prosessi — tulos. Ei kauniita sanoja, vain faktat.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cases.map((c) => {
              const service = getServiceBySlug(c.serviceSlug);
              const fiCase = fiCaseTitles[c.slug];
              return (
                <Link key={c.slug} href={`/fi/referenssit/${c.slug}`}
                  className="card hover:shadow-md hover:-translate-y-0.5 transition-all group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-2"
                    style={{ backgroundColor: "rgba(26,60,107,0.07)" }}>
                    {service && <ServiceIcon slug={service.slug} size={22} />}
                  </div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h2 className="font-semibold text-sm group-hover:text-blue-700 transition-colors leading-snug"
                      style={{ color: "var(--blue-dark)" }}>
                      {fiCase?.title || c.ru.title}
                    </h2>
                    <span className="tag text-xs shrink-0">{c.city}</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">
                    {(fiCase?.task || c.ru.task).slice(0, 100)}...
                  </p>
                  <div className="flex gap-4 text-xs text-gray-400 pt-2 border-t border-gray-100">
                    <span className="flex items-center gap-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                      {c.ru.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg>
                      {c.ru.workers} hlö
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
