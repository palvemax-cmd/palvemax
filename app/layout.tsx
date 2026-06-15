import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://palvemax.fi"),
  title: {
    default: "PalveMax Oy — Бытовые услуги в Финляндии",
    template: "%s | PalveMax Oy",
  },
  description:
    "Грузчики, переезды, уборка, покос травы, уборка снега, сборка мебели и мелкий ремонт в Riihimäki, Hyvinkää, Hämeenlinna и регионе Kanta-Häme. 45 €/час.",
  keywords: [
    "грузчики финляндия",
    "переезд финляндия",
    "уборка квартиры финляндия",
    "покос травы финляндия",
    "уборка снега финляндия",
    "сборка мебели финляндия",
    "PalveMax",
    "Riihimäki",
    "Hyvinkää",
    "Hämeenlinna",
  ],
  authors: [{ name: "PalveMax Oy" }],
  creator: "PalveMax Oy",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    alternateLocale: ["fi_FI", "en_GB"],
    url: "https://palvemax.fi",
    siteName: "PalveMax Oy",
    images: [
      {
        url: "/images/og/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "PalveMax Oy — Бытовые услуги в Финляндии",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PalveMax Oy — Бытовые услуги в Финляндии",
    description:
      "Грузчики, переезды, уборка, покос травы, уборка снега. Riihimäki, Hyvinkää, Hämeenlinna.",
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
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="alternate" hrefLang="ru" href="https://palvemax.fi/ru/" />
        <link rel="alternate" hrefLang="fi" href="https://palvemax.fi/fi/" />
        <link rel="alternate" hrefLang="en" href="https://palvemax.fi/en/" />
        <link rel="alternate" hrefLang="x-default" href="https://palvemax.fi/ru/" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
