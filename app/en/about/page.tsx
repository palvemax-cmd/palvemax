import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";
import { ADDRESS_FULL, ADDRESS_GOOGLE_MAPS, BUSINESS_ID, EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us — PalveMax Oy | Home Services in Finland",
  description: "PalveMax Oy — officially registered Finnish company. Operating since 2024 in Kanta-Häme. Russian, Finnish, English.",
  alternates: { canonical: "https://palvemax.fi/en/about",
    languages: { fi: "https://palvemax.fi/fi/meista", ru: "https://palvemax.fi/ru/o-kompanii", en: "https://palvemax.fi/en/about" } },
};

export default function EnAboutPage() {
  return (
    <>
      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-100">
        <div className="container-max px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/en" className="hover:text-gray-700">Home</Link>
            <span>/</span>
            <span className="text-gray-900">About</span>
          </nav>
        </div>
      </div>

      <section className="py-12 px-4"
        style={{ background: "linear-gradient(135deg, var(--blue-dark), var(--blue))" }}>
        <div className="container-max max-w-3xl">
          <span className="tag mb-3 bg-white/10 text-white border-0">About</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>
            PalveMax Oy — Home Services in Finland
          </h1>
          <p className="text-white/80 leading-relaxed">
            Operating since 2024. We serve 14 locations across Kanta-Häme and Uusimaa.
            We speak Russian, Finnish and English — whatever works best for you.
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
                  How we work
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  PalveMax started from one simple need: Russian-speaking residents in Finland needed a service provider they could explain tasks to in their own language — and who would show up on time.
                </p>
                <p className="text-gray-600 leading-relaxed mt-3">
                  Over time we grew from two people to a team covering 10 services in 14 cities — not because we planned it, but because clients kept calling back and recommending us to friends.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
                  Company details
                </h2>
                <div className="space-y-2 text-sm text-gray-600">
                  {[
                    ["Company", "PalveMax Oy"],
                    ["Business ID", BUSINESS_ID],
                    ["VAT", "All prices include VAT"],
                    ["Region", "Kanta-Häme, Uusimaa"],
                    ["Address", ADDRESS_FULL],
                    ["Languages", "Finnish · Russian · English"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex gap-3">
                      <span className="font-medium text-gray-800 w-28 shrink-0">{label}</span>
                      {label === "Address" ? (
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
                  What we stand for
                </h2>
                <ul className="space-y-3 text-sm text-gray-600">
                  {[
                    "We don't take jobs we can't do well. Better to say no upfront.",
                    "If we're running late — we call. We don't leave you waiting in silence.",
                    "You pay for actual time worked. We don't drag tasks out.",
                    "If we made a mistake — we fix it. No arguments.",
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
                <Image src="/images/company/team-work.webp" alt="PalveMax team at work" fill className="object-cover" />
              </div>
              <div className="card mb-6">
                <h3 className="font-bold mb-4"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
                  By the numbers
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { n: "2024", l: "Founded" },
                    { n: "14", l: "Service areas" },
                    { n: "10", l: "Services" },
                    { n: "7/7", l: "Days a week" },
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
                  Get in touch
                </h3>
                <ContactForm compact lang="en" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
