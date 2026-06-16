import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";
import { ServiceIcon } from "@/components/icons/ServiceIcons";
import { cases, getCaseBySlug, getAllCaseSlugs } from "@/content/cases/cases";
import { getServiceBySlug } from "@/content/services/services";

interface Props { params: Promise<{ slug: string }> }

// Finnish case translations
const fiCases: Record<string, { title: string; task: string; process: string; result: string }> = {
  "pereezd-riihimaki-2024": {
    title: "Kolmen huoneen asunnon muutto Riihimäellä",
    task: "Perhe muutti kolmiosta 4. kerroksesta ilman hissiä uudisrakennukseen. Tavaraa paljon, mukaan lukien suuri PAX-kaappi ja piano.",
    process: "Lähetimme kaksi muuttoammattilaista. Kaapin purimme edellisenä iltana sopimuksen mukaan. Muuttopäivänä: 4 tuntia lastausta, muutto, 2 tuntia purkua ja kokoamista. Piano — erillinen nosto kolmen miehen voimin 2. kerrokseen.",
    result: "Muutto valmis yhdessä päivässä. Piano paikallaan, PAX koottuna, pakkausjäte viety. Asiakas kirjoitti arvostelun Googleen.",
  },
  "sborka-ikea-hyvinkaa": {
    title: "IKEA METOD -keittiön kokoaminen Hyvinkäällä",
    task: "Uusi METOD-keittiö 12 osalla. Asiakas osti kaiken IKEAsta ja toimitti kotiin, mutta päätti olla kokoamatta itse.",
    process: "Asentaja tuli omilla työkaluillaan. Lajittelu 20 minuuttia, kokoaminen 4,5 tuntia. Tasotilan asennus, ovien ripustus, vetolaatikoiden säätö.",
    result: "Keittiö asennettuna, kaikki ovet suorassa, vetolaatikot liukuvat pehmeästi. Ilman yhtään naarmua.",
  },
  "loppusiivous-hameenlinna": {
    title: "Loppusiivous kaksion Hämeenlinnassa",
    task: "Asiakas muutti pois vuokra-asunnosta. Asunut 4 vuotta. Vuokranantaja suomalainen, tarkka. Tarvittiin ammattimainen loppusiivous.",
    process: "Siivooja tuli omilla pesuaineillaan. 3 tuntia työtä: liesi sisältä, jääkaappi, kaapit, kylpyhuone silikonitiivisteineen, lattiat, ikkunat sisältä.",
    result: "Vuokranantaja otti asunnon vastaan ilman huomautuksia. Vakuus palautettu kokonaan.",
  },
  "pokos-loppi-sezon": {
    title: "Kausiruohonleikkaus 1800 m² tontille Loppella",
    task: "Maatilan tontti suurella nurmikolla, puilla ja monimutkaisilla reunoilla aidan varrella. Omistaja asuu Hyvinkäällä, tulee viikonloppuisin.",
    process: "Sopimus koko kaudeksi. 12 käyntiä toukokuusta syyskuuhun, joka toinen viikko. Leikkaus, reunojen trimmaus, ruohon keruu.",
    result: "Kaudessa 12 käyntiä. Tontti aina siistinä omistajien saapuessa. Sopimus uusittu seuraavalle kaudelle.",
  },
  "uborka-snega-janakkala": {
    title: "Talvikunnossapito omakotitalossa Janakkalassa",
    task: "Iäkäs pariskunta. Mies ei enää pystynyt auraamaan itse terveyden vuoksi. Tarvittiin luotettava säännöllinen auraus koko talven.",
    process: "Sopimus marraskuussa koko talvikaudelle. Seuraamme sääennustetta. Tulemme jokaisen lumisateen jälkeen aamuisin ennen klo 8.",
    result: "Talvessa 18 käyntiä. Kertaakaan ei tarvinnut muistuttaa tai odottaa. Pariskunta tilasi seuraavalle talvelle heti lokakuussa.",
  },
  "melkij-remont-riihimaki": {
    title: "Pienet korjaustyöt uudessa asunnossa Riihimäellä",
    task: "Perhe muutti uuteen asuntoon. Lista kertynyt: TV:n kiinnitys seinään, 4 hyllyä, verhotanko, peili, hanan vaihto, ulko-oven säätö.",
    process: "Asentaja tuli omilla työkaluillaan ja kiinnikkeiden varastolla. 2,5 tuntia työtä, kaikki listalla.",
    result: "Televisio suorassa, ovi sulkeutuu kunnolla, hana ei vuoda. Kaikki yhdellä käynnillä.",
  },
  "uborka-doma-hyvinkaa": {
    title: "Perussiivous 160 m² talossa ennen myyntiä Hyvinkäällä",
    task: "Omistajat laittivat talon myyntiin. Tarvittiin perussiivous jotta talo näyttäisi hyvälle esittelyissä.",
    process: "Kaksi siivoojaa, 3 tuntia. Kaikki huoneet, sauna, terassi, ikkunat sisältä. Ympäristöystävälliset pesuaineet.",
    result: "Talo myytiin kahden viikon kuluessa näytöistä.",
  },
  "uborka-dvora-hameenlinna": {
    title: "Syyspihansiivous Hämeenlinnassa",
    task: "Suuri tontti noin 800 m², useita suuria koivuja ja vaahteraa. Lokakuun lehtisateen jälkeen paksu lehtikerros.",
    process: "Kaksi henkilöä, 4 tuntia. Haravointi, lehtien pussittaminen, polkujen puhdistus.",
    result: "Tontti puhdas. 16 kompostipussia lehtiä. Tilattu seuraava vuosi etukäteen.",
  },
  "demontazh-mebeli-loppi": {
    title: "Keittiön ja kolmen kaapin purku muuttoa varten Loppella",
    task: "Muutto omakotitalosta. 4 metrin keittiökalusteet ja kolme suurta liukuovikaappia eivät mahdu ulos purkamatta.",
    process: "Asentaja merkitsi kaikki osat ennen purkua. 5 tuntia työtä. Osat pakattiin huolellisesti kuljetusta varten.",
    result: "Huonekalut lastattu rekkaan ilman häviöitä. Uudessa paikassa sama asentaja kokosi kaiken takaisin.",
  },
};

export async function generateStaticParams() {
  return getAllCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const fi = fiCases[slug];
  if (!fi) return {};
  return {
    title: `${fi.title} — PalveMax Oy`,
    description: fi.task.slice(0, 155),
    alternates: {
      canonical: `https://palvemax.fi/fi/referenssit/${slug}`,
      languages: {
        ru: `https://palvemax.fi/ru/kejsy/${slug}`,
        fi: `https://palvemax.fi/fi/referenssit/${slug}`,
        en: `https://palvemax.fi/en/cases/${slug}`,
      },
    },
  };
}

export default async function FiCaseDetailPage({ params }: Props) {
  const { slug } = await params;
  const c = getCaseBySlug(slug);
  const fi = fiCases[slug];
  if (!c || !fi) notFound();

  const service = getServiceBySlug(c.serviceSlug);

  return (
    <>
      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-100">
        <div className="container-max px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/fi" className="hover:text-gray-700">Etusivu</Link>
            <span>/</span>
            <Link href="/fi/referenssit" className="hover:text-gray-700">Referenssit</Link>
            <span>/</span>
            <span className="text-gray-900 truncate max-w-xs">{c.city}</span>
          </nav>
        </div>
      </div>

      <section className="py-12 px-4" style={{ background: "linear-gradient(135deg, var(--blue-dark), var(--blue))" }}>
        <div className="container-max max-w-4xl">
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
              style={{ backgroundColor: "rgba(255,255,255,0.12)" }}>
              {service && <ServiceIcon slug={c.serviceSlug} size={30} color="white" />}
            </div>
            <span className="tag mb-3 bg-white/10 text-white border-0">{c.city}</span>
            <h1 className="text-2xl md:text-3xl font-bold text-white mt-2"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {fi.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {[
                { label: "Tehtävä", text: fi.task },
                { label: "Miten teimme", text: fi.process },
                { label: "Tulos", text: fi.result },
              ].map((s) => (
                <div key={s.label}>
                  <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
                    {s.label}
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm">{s.text}</p>
                </div>
              ))}

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                <div className="text-center p-4 rounded-xl" style={{ backgroundColor: "var(--gray-bg)" }}>
                  <div className="text-2xl font-bold mb-1" style={{ color: "var(--orange)", fontFamily: "'DM Sans', sans-serif" }}>
                    {c.ru.workers}
                  </div>
                  <div className="text-xs text-gray-500">henkilöä</div>
                </div>
                <div className="text-center p-4 rounded-xl" style={{ backgroundColor: "var(--gray-bg)" }}>
                  <div className="text-2xl font-bold mb-1" style={{ color: "var(--orange)", fontFamily: "'DM Sans', sans-serif" }}>
                    {c.ru.duration}
                  </div>
                  <div className="text-xs text-gray-500">työtunteja</div>
                </div>
              </div>

              <Link href={`/fi/referenssit`}
                className="inline-flex items-center gap-2 text-sm font-medium"
                style={{ color: "var(--blue)" }}>
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Kaikki referenssit
              </Link>
            </div>

            <div>
              <div className="card sticky top-24">
                <h3 className="font-bold mb-4" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
                  Tarvitsetko samanlaista palvelua?
                </h3>
                <ContactForm
                  preselectedService={service?.fi.name || ""}
                  preselectedCity={c.city}
                  compact
                  lang="fi"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
