import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery — PalveMax Oy | Photos of Our Work",
  description: "Real photos of our work: moving, cleaning, furniture assembly, snow removal in Finland.",
  alternates: { canonical: "https://palvemax.fi/en/gallery" },
};

const items = [
  { src: "/images/gallery/gallery-pereezd-1.webp", alt: "Movers carrying a sofa", label: "Moving" },
  { src: "/images/gallery/gallery-sborka-1.webp", alt: "Assembled IKEA PAX wardrobe", label: "Furniture assembly" },
  { src: "/images/gallery/gallery-uborka-1.webp", alt: "Clean bathroom after professional cleaning", label: "Cleaning" },
  { src: "/images/gallery/gallery-sneg-1.webp", alt: "Snow blower clearing a path in the morning", label: "Snow removal" },
  { src: "/images/gallery/gallery-sneg-2.webp", alt: "Cleared entrance after snowfall", label: "Snow removal" },
  { src: "/images/gallery/gallery-pokos-1.webp", alt: "Lawn with morning dew", label: "Lawn mowing" },
  { src: "/images/gallery/gallery-pokos-2.webp", alt: "Clean mowing lines on a lawn", label: "Lawn mowing" },
  { src: "/images/services/service-sborka.webp", alt: "IKEA furniture assembly", label: "Assembly" },
  { src: "/images/services/service-uborka-kvartir.webp", alt: "Window cleaning", label: "Cleaning" },
  { src: "/images/services/service-uborka-domov.webp", alt: "Sauna cleaning", label: "House cleaning" },
  { src: "/images/services/service-demontazh.webp", alt: "Disassembled furniture with labels", label: "Disassembly" },
  { src: "/images/services/service-remont.webp", alt: "Handyman tool kit", label: "Minor repairs" },
];

export default function EnGalleryPage() {
  return (
    <>
      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-100">
        <div className="container-max px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/en" className="hover:text-gray-700">Home</Link>
            <span>/</span>
            <span className="text-gray-900">Gallery</span>
          </nav>
        </div>
      </div>
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-10">
            <span className="tag mb-3">Gallery</span>
            <h1 className="text-3xl font-bold mb-3" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>Photos of Our Work</h1>
            <p className="text-gray-500">Real photos — moving, cleaning, furniture assembly, snow removal</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {items.map((item, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl aspect-square bg-gray-100">
                <Image src={item.src} alt={item.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xs font-medium">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
