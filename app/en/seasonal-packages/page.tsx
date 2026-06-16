import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";
import { packages } from "@/content/packages/packages";

export const metadata: Metadata = {
  title: "Seasonal Packages — PalveMax Oy | Year-round Home Services",
  description: "Summer, autumn, winter and annual packages for home services. One contract for the whole season.",
  alternates: {
    canonical: "https://palvemax.fi/en/seasonal-packages",
    languages: { fi: "https://palvemax.fi/fi/kausipaketit", ru: "https://palvemax.fi/ru/sezonnyie-pakety", en: "https://palvemax.fi/en/seasonal-packages" },
  },
};

const SeasonIcons = {
  summer: () => <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="14" cy="14" r="5"/><line x1="14" y1="2" x2="14" y2="5"/><line x1="14" y1="23" x2="14" y2="26"/><line x1="2" y1="14" x2="5" y2="14"/><line x1="23" y1="14" x2="26" y2="14"/></svg>,
  autumn: () => <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 4C14 4 6 10 6 17a8 8 0 0016 0C22 10 14 4 14 4z"/><line x1="14" y1="14" x2="14" y2="26"/></svg>,
  winter: () => <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="14" y1="2" x2="14" y2="26"/><line x1="2" y1="14" x2="26" y2="14"/><line x1="5.5" y1="5.5" x2="22.5" y2="22.5"/><line x1="22.5" y1="5.5" x2="5.5" y2="22.5"/><circle cx="14" cy="14" r="3"/></svg>,
  annual: () => <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20L14 4l10 16H4z"/><path d="M10 20v-6h8v6"/><line x1="14" y1="14" x2="14" y2="20"/></svg>,
};

const seasonStyles = {
  summer: { bg: "#fef3c7", text: "#92400e", border: "#fcd34d" },
  autumn: { bg: "#fce7d6", text: "#9a3412", border: "#fb923c" },
  winter: { bg: "#dbeafe", text: "#1e40af", border: "#93c5fd" },
  annual: { bg: "#d1fae5", text: "#065f46", border: "#6ee7b7" },
};

const enPackageData = {
  summer: { name: "Summer Package", tagline: "Yard in order from May to August", description: "Finnish summer is short but intense. Grass grows fast and the yard needs regular attention. One contract — no need to think about it.", includes: ["Lawn mowing every 1-2 weeks", "Yard tidying and grass collection", "Edge trimming", "Storm clean-up on request"], price: "By agreement — depends on plot size", note: "Season: May-August. Book in April." },
  autumn: { name: "Autumn Package", tagline: "Leaves gone, yard ready for winter", description: "September-October in Finland means heavy leaf fall. After one windy October day, a 600 m² plot can be buried under 15-20 cm of leaves.", includes: ["Leaf collection — 2-3 times in autumn", "Leaf removal or composting", "Yard preparation for winter", "Final lawn mowing before winter"], price: "By agreement — depends on plot size and number of trees", note: "Season: September-November. Leaves don't wait — book early." },
  winter: { name: "Winter Package", tagline: "After every snowfall — clear path", description: "In January Riihimäki gets 15-25 snowfalls. We monitor the forecast and come ourselves — you don't need to call each time.", includes: ["Snow clearing after every snowfall", "Driveway, paths and entrance cleared", "Gritting or anti-ice treatment", "Priority morning service before 8 AM"], price: "Fixed seasonal price — depends on area and location", note: "Season: December-March. Best to arrange in November." },
  annual: { name: "Annual Maintenance", tagline: "One contract — yard kept all year", description: "For house owners who don't want to think about seasonal tasks. One contract covers everything.", includes: ["Spring yard clean-up", "Lawn mowing all summer", "Leaf collection in autumn", "Snow clearing in winter"], price: "Individual pricing — calculated based on property details", note: "Suitable for houses in Riihimäki, Hyvinkää, Loppi, Janakkala and the region." },
};

export default function EnPackagesPage() {
  return (
    <>
      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-100">
        <div className="container-max px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/en" className="hover:text-gray-700">Home</Link>
            <span>/</span>
            <span className="text-gray-900">Seasonal Packages</span>
          </nav>
        </div>
      </div>

      <section style={{ backgroundColor: "var(--blue-dark)" }} className="py-12 px-4">
        <div className="container-max max-w-3xl text-center">
          <span className="tag mb-3 bg-white/10 text-white border-0">Packages</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Seasonal Packages for Home Services
          </h1>
          <p className="text-white/70 leading-relaxed max-w-xl mx-auto">
            One contract for the season — no more thinking about snow, leaves or grass. We monitor and come on schedule.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-6">
            {packages.map((pkg) => {
              const style = seasonStyles[pkg.season];
              const Icon = SeasonIcons[pkg.season];
              const en = enPackageData[pkg.season];
              return (
                <div key={pkg.slug} className="rounded-2xl overflow-hidden border" style={{ borderColor: style.border }}>
                  <div className="px-5 py-4 flex items-center gap-3" style={{ backgroundColor: style.bg }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "white", color: style.text }}>
                      <Icon />
                    </div>
                    <div>
                      <div className="font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: style.text }}>{en.name}</div>
                      <div className="text-sm" style={{ color: style.text, opacity: 0.75 }}>{en.tagline}</div>
                    </div>
                  </div>
                  <div className="p-5 bg-white">
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{en.description}</p>
                    <ul className="space-y-2 mb-5">
                      {en.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                          <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-sm font-medium text-gray-700 mb-1">{en.price}</p>
                      <p className="text-xs text-gray-400">{en.note}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 max-w-xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>Get a quote for your property</h2>
              <p className="text-gray-500 text-sm mt-2">Price depends on size and location. Describe your plot — we will calculate.</p>
            </div>
            <div className="card">
              <ContactForm compact lang="en" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
