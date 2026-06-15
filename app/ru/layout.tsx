import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import CookieBanner from "@/components/ui/CookieBanner";
import Footer from "@/components/layout/Footer";
import StickyCTA from "@/components/layout/StickyCTA";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://palvemax.fi/ru",
    languages: {
      ru: "https://palvemax.fi/ru",
      fi: "https://palvemax.fi/fi",
      en: "https://palvemax.fi/en",
    },
  },
};

export default function RuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
