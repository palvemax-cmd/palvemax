import type { Metadata } from "next";
import Link from "next/link";
import { cases } from "@/content/cases/cases";
import { getServiceBySlug } from "@/content/services/services";
import { ServiceIcon } from "@/components/icons/ServiceIcons";

export const metadata: Metadata = {
  title: "Cases — PalveMax Oy | Real Examples of Our Work",
  description: "9 real cases: moving, cleaning, furniture assembly, snow removal in Finland. Task, process, result.",
  alternates: {
    canonical: "https://palvemax.fi/en/cases",
    languages: { fi: "https://palvemax.fi/fi/referenssit", ru: "https://palvemax.fi/ru/kejsy", en: "https://palvemax.fi/en/cases" },
  },
};

const enTitles: Record<string, string> = {
  "pereezd-riihimaki-2024": "Moving a 3-room apartment in Riihimäki",
  "sborka-ikea-hyvinkaa": "Assembling an IKEA METOD kitchen in Hyvinkää",
  "loppusiivous-hameenlinna": "End-of-tenancy cleaning in Hämeenlinna",
  "pokos-loppi-sezon": "Seasonal lawn mowing — 1800 m² plot in Loppi",
  "uborka-snega-janakkala": "Winter maintenance of a house in Janakkala",
  "melkij-remont-riihimaki": "Minor repairs in a new apartment in Riihimäki",
  "uborka-doma-hyvinkaa": "Deep clean of a 160 m² house before sale in Hyvinkää",
  "uborka-dvora-hameenlinna": "Autumn yard clean-up in Hämeenlinna",
  "demontazh-mebeli-loppi": "Kitchen and wardrobe disassembly for a move in Loppi",
};


const enDescriptions: Record<string, string> = {
  "pereezd-riihimaki-2024": "Family moving from a 3-bedroom flat on the 4th floor with no elevator. Large PAX wardrobe and a piano.",
  "sborka-ikea-hyvinkaa": "New METOD kitchen, 12 units. Client had it delivered but decided not to assemble it himself.",
  "loppusiivous-hameenlinna": "Moving out of a rental flat after 4 years. Strict Finnish landlord. Professional cleaning required.",
  "pokos-loppi-sezon": "Farm plot with a large lawn, trees and complex edges. Owner comes at weekends from Hyvinkää.",
  "uborka-snega-janakkala": "Elderly couple needed regular, reliable snow clearing for the whole winter season.",
  "melkij-remont-riihimaki": "New apartment — list of 6 tasks: TV mount, shelves, curtain rail, mirror, tap, door adjustment.",
  "uborka-doma-hyvinkaa": "House listed for sale. Thorough clean needed before viewings.",
  "uborka-dvora-hameenlinna": "Large 800 m² plot, multiple birches and maples. Heavy leaf fall in October.",
  "demontazh-mebeli-loppi": "Moving from a house — 4-metre kitchen and three large sliding-door wardrobes needed disassembly.",
};

export default function EnCasesPage() {
  return (
    <>
      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-100">
        <div className="container-max px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/en" className="hover:text-gray-700">Home</Link>
            <span>/</span>
            <span className="text-gray-900">Cases</span>
          </nav>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-10">
            <span className="tag mb-3">Cases</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
              Real Examples of Our Work
            </h1>
            <p className="text-gray-500 max-w-xl mx-auto">
              Task — process — result. No marketing language, just facts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cases.map((c) => {
              const service = getServiceBySlug(c.serviceSlug);
              return (
                <Link key={c.slug} href={`/en/cases/${c.slug}`}
                  className="card hover:shadow-md hover:-translate-y-0.5 transition-all group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-2"
                    style={{ backgroundColor: "rgba(26,60,107,0.07)" }}>
                    {service && <ServiceIcon slug={service.slug} size={22} />}
                  </div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h2 className="font-semibold text-sm group-hover:text-blue-700 transition-colors leading-snug"
                      style={{ color: "var(--blue-dark)" }}>
                      {enTitles[c.slug] || c.ru.title}
                    </h2>
                    <span className="tag text-xs shrink-0">{c.city}</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">
                    {(enDescriptions[c.slug] || c.ru.task).slice(0, 100)}...
                  </p>
                  <div className="flex gap-4 text-xs text-gray-400 pt-2 border-t border-gray-100">
                    <span>{c.en?.duration || c.ru.duration}</span>
                    <span>{c.ru.workers} {Number(c.ru.workers) > 1 ? "people" : "person"}</span>
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
