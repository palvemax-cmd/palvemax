import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY_NAME, BUSINESS_ID, EMAIL, ADDRESS_FULL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Tietosuojakäytäntö — PalveMax Oy",
  description: "PalveMax Oy:n tietosuojakäytäntö. Miten käsittelemme henkilötietoja.",
  robots: { index: false },
};

export default function FiPrivacyPage() {
  return (
    <>
      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-100">
        <div className="container-max px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/fi" className="hover:text-gray-700">Etusivu</Link>
            <span>/</span>
            <span className="text-gray-900">Tietosuojakäytäntö</span>
          </nav>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <h1 className="text-3xl font-bold mb-2"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
            Tietosuojakäytäntö
          </h1>
          <p className="text-gray-400 text-sm mb-8">Päivitetty: tammikuu 2025</p>

          <div className="space-y-8 text-sm text-gray-600 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "var(--blue-dark)", fontFamily: "'DM Sans', sans-serif" }}>1. Rekisterinpitäjä</h2>
              <p>{COMPANY_NAME} (Y-tunnus {BUSINESS_ID}), osoite: {ADDRESS_FULL}, Suomi.<br/>
              Sähköposti: <a href={`mailto:${EMAIL}`} className="underline" style={{ color: "var(--blue)" }}>{EMAIL}</a>.<br/>
              Toimimme rekisterinpitäjänä GDPR:n ja Suomen tietosuojalain (1050/2018) mukaisesti.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "var(--blue-dark)", fontFamily: "'DM Sans', sans-serif" }}>2. Mitä tietoja keräämme</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Nimi, puhelinnumero ja sähköpostiosoite — yhteydenottolomakkeen kautta</li>
                <li>Kaupunki ja valittu palvelu — pyynnön käsittelyä varten</li>
                <li>Kohteen valokuvat — jos liität ne</li>
                <li>WhatsApp-viestintä</li>
                <li>Tekniset tiedot: IP-osoite, selaintyyppi, vieraillut sivut — analytiikan kautta</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "var(--blue-dark)", fontFamily: "'DM Sans', sans-serif" }}>3. Käsittelyn tarkoitukset ja oikeusperusteet</h2>
              <p><strong>Pyyntöjen käsittely</strong> — oikeusperuste: sopimuksen täytäntöönpano (GDPR 6.1.b). Tietoja käytetään yhteydenottoon ja palvelun järjestämiseen.</p>
              <p className="mt-2"><strong>Sivuston analytiikka</strong> — oikeusperuste: suostumus (GDPR 6.1.a). Käytetään vain suostumuksellasi evästebannerin kautta.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "var(--blue-dark)", fontFamily: "'DM Sans', sans-serif" }}>4. Tietojen säilytysaika</h2>
              <p>Pyyntöjä koskevat tiedot säilytetään 2 vuotta viimeisen yhteydenoton jälkeen. Kirjanpitotiedot — 7 vuotta kirjanpitolain mukaan. Tekniset lokit — enintään 12 kuukautta.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "var(--blue-dark)", fontFamily: "'DM Sans', sans-serif" }}>5. Oikeutesi</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Oikeus tutustua omiin tietoihisi</li>
                <li>Oikeus vaatia tietojen oikaisemista</li>
                <li>Oikeus vaatia tietojen poistamista</li>
                <li>Oikeus peruuttaa suostumus milloin tahansa</li>
              </ul>
              <p className="mt-3">Oikeuksien käyttämiseksi ota yhteyttä: <a href={`mailto:${EMAIL}`} className="underline" style={{ color: "var(--blue)" }}>{EMAIL}</a>. Vastaus 30 päivän kuluessa. Voit myös tehdä valituksen tietosuojaviranomaiselle: <a href="https://tietosuoja.fi" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--blue)" }}>tietosuoja.fi</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
