import type { Metadata } from "next";
import Link from "next/link";
import { EMAIL } from "@/lib/constants";

export const metadata: Metadata = { title: "Cookie Policy — PalveMax Oy", robots: { index: false } };

export default function EnCookiePage() {
  return (
    <>
      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-100">
        <div className="container-max px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/en" className="hover:text-gray-700">Home</Link>
            <span>/</span>
            <span className="text-gray-900">Cookie Policy</span>
          </nav>
        </div>
      </div>
      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>Cookie Policy</h1>
          <p className="text-gray-400 text-sm mb-6">Updated: January 2025</p>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>We use cookies for site functionality and traffic analysis. Analytical cookies are only set with your consent via the cookie banner.</p>
            <p>You can manage or withdraw consent at any time by clearing site cookies in your browser settings.</p>
            <p>Questions: <a href={`mailto:${EMAIL}`} className="underline" style={{color:"var(--blue)"}}>{EMAIL}</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
