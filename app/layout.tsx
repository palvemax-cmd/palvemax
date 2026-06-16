import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://palvemax.fi"),
  title: {
    default: "PalveMax Oy — Kotitalouspalvelut Suomessa | 45 €/h",
    template: "%s | PalveMax Oy",
  },
  description:
    "Muuttomiehet, siivous, ruohonleikkaus, lumityot, huonekalukokoonpano Riihimaella, Hyvinkaalal ja Hameenlinnassa. 45 €/tunti. Auki 7 paivaa viikossa.",
  keywords: [
    "muuttomiehet suomi",
    "siivous suomi",
    "ruohonleikkaus suomi",
    "lumityot suomi",
    "kotitalouspalvelut",
    "PalveMax",
    "Riihimäki",
    "Hyvinkää",
    "Hämeenlinna",
    "Kanta-Häme",
  ],
  authors: [{ name: "PalveMax Oy" }],
  creator: "PalveMax Oy",
  openGraph: {
    type: "website",
    locale: "fi_FI",
    alternateLocale: ["ru_RU", "en_GB"],
    url: "https://palvemax.fi",
    siteName: "PalveMax Oy",
    title: "PalveMax Oy — Kotitalouspalvelut Suomessa",
    description:
      "Muuttomiehet, siivous, ruohonleikkaus, lumityot Riihimaella, Hyvinkaalal ja Hameenlinnassa. 45 €/h. Auki 7 paivaa.",
    images: [
      {
        url: "/images/og/og-default.webp",
        width: 1200,
        height: 630,
        alt: "PalveMax Oy — Kotitalouspalvelut Suomessa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PalveMax Oy — Kotitalouspalvelut Suomessa",
    description:
      "Muuttomiehet, siivous, ruohonleikkaus, lumityot. Riihimäki, Hyvinkää, Hämeenlinna.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi">
      <head>
        <link rel="alternate" hrefLang="fi" href="https://palvemax.fi/fi/" />
        <link rel="alternate" hrefLang="ru" href="https://palvemax.fi/ru/" />
        <link rel="alternate" hrefLang="en" href="https://palvemax.fi/en/" />
        <link rel="alternate" hrefLang="x-default" href="https://palvemax.fi/fi/" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
