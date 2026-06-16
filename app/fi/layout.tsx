import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyCTA from "@/components/layout/StickyCTA";
import CookieBanner from "@/components/ui/CookieBanner";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://palvemax.fi/fi",
    languages: {
      "x-default": "https://palvemax.fi/fi",
      fi: "https://palvemax.fi/fi",
      ru: "https://palvemax.fi/ru",
      en: "https://palvemax.fi/en",
    },
  },
};

export default function FiLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pb-20 md:pb-0">{children}</main>
      <Footer />
      <StickyCTA />
      <CookieBanner />
    </>
  );
}
