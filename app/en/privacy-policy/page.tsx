import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY_NAME, BUSINESS_ID, EMAIL, ADDRESS_FULL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy — PalveMax Oy",
  description: "PalveMax Oy privacy policy. How we process personal data.",
  robots: { index: false },
};

export default function EnPrivacyPage() {
  return (
    <>
      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-100">
        <div className="container-max px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/en" className="hover:text-gray-700">Home</Link>
            <span>/</span>
            <span className="text-gray-900">Privacy Policy</span>
          </nav>
        </div>
      </div>
      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>Privacy Policy</h1>
          <p className="text-gray-400 text-sm mb-8">Updated: January 2025</p>
          <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
            <div>
              <h2 className="text-lg font-bold mb-2" style={{ color: "var(--blue-dark)" }}>1. Controller</h2>
              <p>{COMPANY_NAME} (Business ID {BUSINESS_ID}), {ADDRESS_FULL}, Finland. Email: <a href={`mailto:${EMAIL}`} className="underline" style={{color:"var(--blue)"}}>{EMAIL}</a></p>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-2" style={{ color: "var(--blue-dark)" }}>2. Data we collect</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Name, phone, email — from the contact form</li>
                <li>City and service — for processing your request</li>
                <li>Photos — if you attach them</li>
                <li>Technical data: IP address, browser type — via analytics (with consent only)</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-2" style={{ color: "var(--blue-dark)" }}>3. Your rights</h2>
              <p>Access, rectification, erasure, restriction, portability, withdrawal of consent. Contact us at <a href={`mailto:${EMAIL}`} className="underline" style={{color:"var(--blue)"}}>{EMAIL}</a>. You may also contact the Finnish Data Protection Ombudsman: <a href="https://tietosuoja.fi/en" target="_blank" rel="noopener noreferrer" className="underline" style={{color:"var(--blue)"}}>tietosuoja.fi</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
