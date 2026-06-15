import Link from "next/link";
import Image from "next/image";
import { services } from "@/content/services/services";
import { cities } from "@/content/cities/cities";

import { PHONE_DISPLAY, WHATSAPP_URL, EMAIL, ADDRESS_FULL, ADDRESS_GOOGLE_MAPS, BUSINESS_ID } from "@/lib/constants";
const PHONE = PHONE_DISPLAY;

export default function Footer() {
  const mainCities = cities.slice(0, 7);

  return (
    <footer style={{ backgroundColor: "var(--blue-dark)" }} className="text-white">
      {/* Main footer */}
      <div className="container-max px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/palvemax-logo.png"
                alt="PalveMax"
                width={40}
                height={40}
                className="w-10 h-10 object-contain brightness-0 invert"
              />
              <div className="font-bold text-lg leading-none" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                PalveMax
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed mb-4">
              Бытовые услуги в регионе Канта-Хяме. Грузчики, переезды, уборка, покос травы, уборка снега, сборка мебели, мелкий ремонт.
            </p>
            <div className="space-y-2 text-sm">
              <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                </svg>
                {PHONE}
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {EMAIL}
              </a>
              <a href={ADDRESS_GOOGLE_MAPS} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {ADDRESS_FULL}
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-60">Услуги</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/ru/uslugi/${s.slug}`} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    {s.ru.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-60">Города</h3>
            <ul className="space-y-2">
              {mainCities.map((c) => (
                <li key={c.slug}>
                  <Link href={`/ru/goroda/${c.slug}`} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/ru/goroda" className="text-sm opacity-50 hover:opacity-80 transition-opacity">
                  Все города →
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-60">Компания</h3>
            <ul className="space-y-2">
              <li><Link href="/ru/o-kompanii" className="text-sm opacity-70 hover:opacity-100 transition-opacity">О компании</Link></li>
              <li><Link href="/ru/sezonnyie-pakety" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Сезонные пакеты</Link></li>
              <li><Link href="/ru/otzovy" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Отзывы</Link></li>
              <li><Link href="/ru/kejsy" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Кейсы</Link></li>
              <li><Link href="/ru/blog" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Блог</Link></li>
              <li><Link href="/ru/galereja" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Галерея</Link></li>
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-xs opacity-50">Работаем 7 дней в неделю</p>
              <p className="text-xs opacity-50">7:00 — 21:00</p>
              <p className="text-xs opacity-50 mt-2">Языки: RU · FI · EN</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-max px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs opacity-50">
          <p>© {new Date().getFullYear()} PalveMax Oy · Y-tunnus {BUSINESS_ID}</p>
          <div className="flex items-center gap-4">
            <Link href="/ru/privacy-policy" className="hover:opacity-80">Политика конфиденциальности</Link>
            <Link href="/ru/cookie-policy" className="hover:opacity-80">Cookies</Link>
            <Link href="/fi" className="hover:opacity-80">Suomeksi</Link>
          </div>
        </div>
      </div>

      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://palvemax.fi/#business",
            name: "PalveMax Oy",
            description: "Бытовые услуги: грузчики, переезды, уборка, покос травы, уборка снега, сборка мебели, мелкий ремонт в регионе Kanta-Häme, Финляндия.",
            url: "https://palvemax.fi",
            telephone: PHONE,
            email: EMAIL,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Riihimäki",
              addressRegion: "Kanta-Häme",
              addressCountry: "FI",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 60.7397,
              longitude: 24.7734,
            },
            areaServed: [
              "Riihimäki", "Hyvinkää", "Hämeenlinna", "Hausjärvi",
              "Loppi", "Janakkala", "Turenki", "Tervakoski",
            ],
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                opens: "07:00",
                closes: "21:00",
              },
            ],
            priceRange: "€€",
            currenciesAccepted: "EUR",
            paymentAccepted: "Cash, Bank Transfer",
            inLanguage: ["ru", "fi", "en"],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5.0",
              ratingCount: "8",
              bestRating: "5",
            },
          }),
        }}
      />
    </footer>
  );
}
