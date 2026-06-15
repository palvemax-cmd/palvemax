import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/content/services/services";
import { ServiceIcon } from "@/components/icons/ServiceIcons";

export const metadata: Metadata = {
  title: "Все услуги PalveMax — Бытовые услуги в Финляндии",
  description: "10 видов бытовых услуг в Riihimäki, Hyvinkää, Hämeenlinna и регионе. 45 €/час, от 2 часов. Работаем 7 дней.",
  alternates: { canonical: "https://palvemax.fi/ru/uslugi" },
};

export default function ServicesListPage() {
  return (
    <>
      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-100">
        <div className="container-max px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/ru" className="hover:text-gray-700">Главная</Link>
            <span>/</span>
            <span className="text-gray-900">Услуги</span>
          </nav>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-10">
            <span className="tag mb-3">Все услуги</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
              Бытовые услуги в Финляндии
            </h1>
            <p className="text-gray-500 max-w-xl mx-auto">
              10 видов услуг. Один работник — 45 €/час, двое — 90 €/час. Минимальный заказ — 2 часа. Работаем 7 дней в неделю.
            </p>
            {/* Выезд за пределы Riihimäki */}
            <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full text-sm"
              style={{ backgroundColor: "rgba(232,96,28,0.1)", color: "var(--orange)" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              Выезд за пределы Riihimäki — +20 € к заказу
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <Link key={service.slug} href={`/ru/uslugi/${service.slug}`}
                className="card hover:shadow-md hover:-translate-y-0.5 transition-all group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(26,60,107,0.07)" }}>
                  <ServiceIcon slug={service.slug} size={26} />
                </div>
                <h2 className="text-lg font-bold mb-2 group-hover:text-blue-700 transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
                  {service.ru.name}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{service.ru.shortDesc}</p>
                <div className="flex items-center text-sm font-medium" style={{ color: "var(--orange)" }}>
                  Подробнее и FAQ
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
