import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";
import { ServiceIcon } from "@/components/icons/ServiceIcons";
import { cases, getCaseBySlug, getAllCaseSlugs } from "@/content/cases/cases";
import { getServiceBySlug } from "@/content/services/services";

interface Props { params: Promise<{ slug: string }> }

const enCases: Record<string, { title: string; task: string; process: string; result: string }> = {
  "pereezd-riihimaki-2024": {
    title: "Moving a 3-room apartment in Riihimäki",
    task: "A family moved from a 3-bedroom flat on the 4th floor with no elevator to a new building. A lot of furniture including a large PAX wardrobe and a piano.",
    process: "We sent two movers. The wardrobe was disassembled the evening before, as agreed. On moving day: 4 hours loading and transport, 2 hours unloading and reassembly. The piano required a 3-person lift to the 2nd floor.",
    result: "Move completed in one day. Piano in place, PAX assembled, packaging removed. The client left a Google review.",
  },
  "sborka-ikea-hyvinkaa": {
    title: "Assembling an IKEA METOD kitchen in Hyvinkää",
    task: "New METOD kitchen with 12 units. Client bought everything from IKEA and had it delivered, but decided not to assemble it himself.",
    process: "Assembler arrived with his own tools. 20 minutes sorting, 4.5 hours assembly. Worktop installation, door hanging, drawer adjustment.",
    result: "Kitchen assembled, all doors straight, drawers glide smoothly. Not a single scratch.",
  },
  "loppusiivous-hameenlinna": {
    title: "End-of-tenancy cleaning in Hämeenlinna",
    task: "Client was moving out of a rental flat. Lived there 4 years. Finnish landlord, strict standards. Professional end-of-tenancy cleaning required.",
    process: "Cleaner arrived with her own supplies. 3 hours: stove inside, fridge, cupboards, bathroom with silicone seals, floors, windows inside.",
    result: "Landlord accepted the flat without any comments. Full deposit returned.",
  },
  "pokos-loppi-sezon": {
    title: "Seasonal lawn mowing — 1800 m² plot in Loppi",
    task: "Farm plot with a large lawn, trees and complex edges along the fence. Owner lives in Hyvinkää and comes at weekends.",
    process: "Seasonal contract. 12 visits from May to September, every two weeks. Mowing, edge trimming, grass collection.",
    result: "12 visits in the season. Plot always tidy when owners arrived. Contract renewed for the following year.",
  },
  "uborka-snega-janakkala": {
    title: "Winter maintenance of a house in Janakkala",
    task: "Elderly couple. The husband could no longer clear snow himself due to health. A reliable, regular service was needed for the whole winter.",
    process: "Contract signed in November for the full winter season. We monitor the forecast. We come after every snowfall, mornings before 8 AM.",
    result: "18 visits over the winter. Not once did they need to remind us or wait. They booked again for the following October.",
  },
  "melkij-remont-riihimaki": {
    title: "Minor repairs in a new apartment in Riihimäki",
    task: "Family had just moved in. List of tasks: mount TV, 4 shelves, curtain rail, mirror, replace tap, adjust front door.",
    process: "Handyman arrived with tools and a stock of fixings. 2.5 hours, everything on the list done.",
    result: "TV level, door closes properly, tap not dripping. Everything in one visit.",
  },
  "uborka-doma-hyvinkaa": {
    title: "Deep clean of a 160 m² house before sale in Hyvinkää",
    task: "Owners were listing the house for sale. A thorough clean was needed to make it look its best for viewings.",
    process: "Two cleaners, 3 hours. All rooms, sauna, terrace, windows inside. Eco-friendly cleaning products.",
    result: "House sold within two weeks of viewings starting.",
  },
  "uborka-dvora-hameenlinna": {
    title: "Autumn yard clean-up in Hämeenlinna",
    task: "Large plot, approximately 800 m², several large birches and maples. After an October leaf fall, a thick layer covered the whole area.",
    process: "Two people, 4 hours. Raking, bagging leaves, clearing paths.",
    result: "Plot cleared. 16 compost bags of leaves. Booked again for the following year in advance.",
  },
  "demontazh-mebeli-loppi": {
    title: "Kitchen and wardrobe disassembly for a move in Loppi",
    task: "Moving from a house. 4-metre kitchen units and three large sliding-door wardrobes could not be removed without disassembly.",
    process: "Assembler labelled all parts before disassembly. 5 hours of work. Parts packed carefully for transport.",
    result: "Furniture loaded into the truck without losses. The same assembler reassembled everything at the new location.",
  },
};

export async function generateStaticParams() {
  return getAllCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const en = enCases[slug];
  if (!en) return {};
  return {
    title: `${en.title} — PalveMax Oy`,
    description: en.task.slice(0, 155),
    alternates: {
      canonical: `https://palvemax.fi/en/cases/${slug}`,
      languages: { fi: `https://palvemax.fi/fi/referenssit/${slug}`, ru: `https://palvemax.fi/ru/kejsy/${slug}`, en: `https://palvemax.fi/en/cases/${slug}` },
    },
  };
}

export default async function EnCaseDetailPage({ params }: Props) {
  const { slug } = await params;
  const c = getCaseBySlug(slug);
  const en = enCases[slug];
  if (!c || !en) notFound();
  const service = getServiceBySlug(c.serviceSlug);

  return (
    <>
      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-100">
        <div className="container-max px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/en" className="hover:text-gray-700">Home</Link>
            <span>/</span>
            <Link href="/en/cases" className="hover:text-gray-700">Cases</Link>
            <span>/</span>
            <span className="text-gray-900 truncate max-w-xs">{c.city}</span>
          </nav>
        </div>
      </div>

      <section className="py-12 px-4" style={{ background: "linear-gradient(135deg, var(--blue-dark), var(--blue))" }}>
        <div className="container-max max-w-4xl text-center">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 mx-auto"
            style={{ backgroundColor: "rgba(255,255,255,0.12)" }}>
            {service && <ServiceIcon slug={c.serviceSlug} size={30} color="white" />}
          </div>
          <span className="tag mb-3 bg-white/10 text-white border-0">{c.city}</span>
          <h1 className="text-2xl md:text-3xl font-bold text-white mt-2"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {en.title}
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {[
                { label: "Task", text: en.task },
                { label: "How we did it", text: en.process },
                { label: "Result", text: en.result },
              ].map((s) => (
                <div key={s.label}>
                  <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>{s.label}</h2>
                  <p className="text-gray-700 leading-relaxed text-sm">{s.text}</p>
                </div>
              ))}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                <div className="text-center p-4 rounded-xl" style={{ backgroundColor: "var(--gray-bg)" }}>
                  <div className="text-2xl font-bold mb-1" style={{ color: "var(--orange)", fontFamily: "'DM Sans', sans-serif" }}>{c.ru.workers}</div>
                  <div className="text-xs text-gray-500">people</div>
                </div>
                <div className="text-center p-4 rounded-xl" style={{ backgroundColor: "var(--gray-bg)" }}>
                  <div className="text-2xl font-bold mb-1" style={{ color: "var(--orange)", fontFamily: "'DM Sans', sans-serif" }}>{c.ru.duration}</div>
                  <div className="text-xs text-gray-500">hours of work</div>
                </div>
              </div>
              <Link href="/en/cases" className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: "var(--blue)" }}>
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                All cases
              </Link>
            </div>
            <div>
              <div className="card sticky top-24">
                <h3 className="font-bold mb-4" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>Need a similar service?</h3>
                <ContactForm preselectedService={service?.en.name || ""} preselectedCity={c.city} compact lang="en" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
