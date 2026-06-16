import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Työgalleria — PalveMax Oy",
  description: "Kuvia töistämme: muutot, siivous, huonekalukokoonpano, lumityöt Suomessa.",
  alternates: {
    canonical: "https://palvemax.fi/fi/galleria",
    languages: { ru: "https://palvemax.fi/ru/galereja", fi: "https://palvemax.fi/fi/galleria", en: "https://palvemax.fi/en/gallery" },
  },
};

const galleryItems = [
  { src: "/images/gallery/gallery-pereezd-1.webp", alt: "Muuttomiehet kantavat sohvaa", label: "Muutot" },
  { src: "/images/gallery/gallery-sborka-1.webp", alt: "Koottu IKEA PAX kaappi", label: "Huonekalukokoonpano" },
  { src: "/images/gallery/gallery-uborka-1.webp", alt: "Puhdas kylpyhuone siivouksen jälkeen", label: "Siivous" },
  { src: "/images/gallery/gallery-sneg-1.webp", alt: "Lumilinko käynnissä aamulla", label: "Lumityöt" },
  { src: "/images/gallery/gallery-sneg-2.webp", alt: "Raivattu sisäänkäynti lumisateen jälkeen", label: "Lumityöt" },
  { src: "/images/gallery/gallery-pokos-1.webp", alt: "Nurmikko kasteen kanssa", label: "Ruohonleikkaus" },
  { src: "/images/gallery/gallery-pokos-2.webp", alt: "Siistit leikkausviivat nurmikolla", label: "Ruohonleikkaus" },
  { src: "/images/services/service-sborka.webp", alt: "IKEA huonekalujen kokoaminen", label: "Huonekalukokoonpano" },
  { src: "/images/services/service-uborka-kvartir.webp", alt: "Ikkunan pesu", label: "Siivous" },
  { src: "/images/services/service-uborka-domov.webp", alt: "Saunan siivous", label: "Talonsiivous" },
  { src: "/images/services/service-demontazh.webp", alt: "Purettu kalusto merkittynä", label: "Purku" },
  { src: "/images/services/service-remont.webp", alt: "Käsimies-työkalupakki", label: "Pienet remontit" },
];

export default function FiGalleryPage() {
  return (
    <>
      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-100">
        <div className="container-max px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/fi" className="hover:text-gray-700">Etusivu</Link>
            <span>/</span>
            <span className="text-gray-900">Galleria</span>
          </nav>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-10">
            <span className="tag mb-3">Galleria</span>
            <h1 className="text-3xl font-bold mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
              Kuvia töistämme
            </h1>
            <p className="text-gray-500">Oikeita kuvia — muutot, siivous, huonekalukokoonpano, lumi</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl aspect-square bg-gray-100">
                <Image src={item.src} alt={item.alt} fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xs font-medium">{item.label}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-400 mt-8">
            Lisää kuvia{" "}
            <a href="https://wa.me/358449285010" target="_blank" rel="noopener noreferrer"
              className="underline" style={{ color: "var(--orange)" }}>WhatsAppissa</a>.
          </p>
        </div>
      </section>
    </>
  );
}
