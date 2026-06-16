import type { Metadata } from "next";
import Link from "next/link";
import { EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Evästekäytäntö — PalveMax Oy",
  description: "Miten PalveMax Oy käyttää evästeitä sivustollaan.",
  robots: { index: false },
};

export default function FiCookiePage() {
  return (
    <>
      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-100">
        <div className="container-max px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/fi" className="hover:text-gray-700">Etusivu</Link>
            <span>/</span>
            <span className="text-gray-900">Evästekäytäntö</span>
          </nav>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <h1 className="text-3xl font-bold mb-2"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
            Evästekäytäntö
          </h1>
          <p className="text-gray-400 text-sm mb-8">Päivitetty: tammikuu 2025</p>

          <div className="space-y-8 text-sm text-gray-600 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "var(--blue-dark)", fontFamily: "'DM Sans', sans-serif" }}>Mitä evästeet ovat</h2>
              <p>Evästeet ovat pieniä tekstitiedostoja, jotka tallentuvat selaimeesi sivustolla vieraillessasi. Ne auttavat sivustoa toimimaan oikein.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "var(--blue-dark)", fontFamily: "'DM Sans', sans-serif" }}>Käyttämämme evästeet</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr style={{ backgroundColor: "var(--gray-bg)" }}>
                      {["Nimi", "Tyyppi", "Kesto", "Tarkoitus"].map((h) => (
                        <th key={h} className="text-left p-3 font-semibold text-gray-700 border-b border-gray-200">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "palvemax_cookie_consent", type: "Välttämätön", period: "1 vuosi", purpose: "Tallentaa evästeasetukset" },
                      { name: "_ga", type: "Analyyttinen", period: "2 vuotta", purpose: "Google Analytics — vain suostumuksella" },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-gray-100">
                        <td className="p-3 font-mono text-xs text-gray-700">{row.name}</td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded-full text-xs font-medium"
                            style={{
                              backgroundColor: row.type === "Välttämätön" ? "rgba(26,60,107,0.08)" : "rgba(232,96,28,0.1)",
                              color: row.type === "Välttämätön" ? "var(--blue)" : "var(--orange)",
                            }}>
                            {row.type}
                          </span>
                        </td>
                        <td className="p-3 text-gray-500">{row.period}</td>
                        <td className="p-3 text-gray-600">{row.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "var(--blue-dark)", fontFamily: "'DM Sans', sans-serif" }}>Evästeiden hallinta</h2>
              <p>Voit milloin tahansa muuttaa tai peruuttaa suostumuksesi tyhjentämällä sivuston evästeet selaimen asetuksista. Lisätietoja: <a href={`mailto:${EMAIL}`} className="underline" style={{ color: "var(--blue)" }}>{EMAIL}</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
