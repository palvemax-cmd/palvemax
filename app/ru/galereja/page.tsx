import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Галерея работ — PalveMax Oy",
  description: "Фото работ PalveMax: переезды, уборка, сборка мебели, покос травы в Финляндии.",
  alternates: { canonical: "https://palvemax.fi/ru/galereja" },
};

const galleryItems = [
  { src: "/images/gallery/gallery-pereezd-1.webp", alt: "Грузчики переносят диван в финском доме", label: "Переезды" },
  { src: "/images/gallery/gallery-sborka-1.webp",  alt: "Собранный шкаф IKEA PAX в спальне", label: "Сборка мебели" },
  { src: "/images/gallery/gallery-uborka-1.webp",  alt: "Чистая ванная после уборки в Финляндии", label: "Уборка" },
  { src: "/images/gallery/gallery-sneg-1.webp",    alt: "Уборка снега снегоуборщиком ранним утром", label: "Уборка снега" },
  { src: "/images/gallery/gallery-sneg-2.webp",    alt: "Расчищенный въезд после снегопада", label: "Уборка снега" },
  { src: "/images/gallery/gallery-pokos-1.webp",   alt: "Газон с росой после покоса", label: "Покос травы" },
  { src: "/images/gallery/gallery-pokos-2.webp",   alt: "Ровные полосы на газоне после покоса", label: "Покос травы" },
  { src: "/images/services/service-sborka.webp",   alt: "Сборка мебели IKEA в финской квартире", label: "Сборка IKEA" },
  { src: "/images/services/service-uborka-kvartir.webp", alt: "Уборка окна в скандинавской квартире", label: "Уборка квартир" },
  { src: "/images/services/service-uborka-domov.webp",   alt: "Уборка сауны в частном доме", label: "Уборка домов" },
  { src: "/images/services/service-demontazh.webp",      alt: "Разобранная мебель с маркировкой деталей", label: "Демонтаж" },
  { src: "/images/services/service-remont.webp",         alt: "Набор инструментов мастера на час", label: "Мелкий ремонт" },
];

export default function GalleryPage() {
  return (
    <>
      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-100">
        <div className="container-max px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/ru" className="hover:text-gray-700">Главная</Link>
            <span>/</span>
            <span className="text-gray-900">Галерея</span>
          </nav>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-10">
            <span className="tag mb-3">Галерея</span>
            <h1 className="text-3xl font-bold mb-3" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
              Фото наших работ
            </h1>
            <p className="text-gray-500">Реальные фото — переезды, уборка, сборка мебели, снег</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl aspect-square bg-gray-100">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xs font-medium">{item.label}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-400 mt-8">
            Больше фото — в нашем{" "}
            <a href="https://wa.me/358414728489" target="_blank" rel="noopener noreferrer"
              className="underline" style={{ color: "var(--orange)" }}>WhatsApp</a>.
          </p>
        </div>
      </section>
    </>
  );
}
