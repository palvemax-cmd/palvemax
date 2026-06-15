import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";
import { ServiceIcon } from "@/components/icons/ServiceIcons";
import HowItWorksInfographic from "@/components/infographics/HowItWorks";
import PriceCalculator from "@/components/infographics/PriceCalculator";
import SeasonTimeline from "@/components/infographics/SeasonTimeline";
import { services } from "@/content/services/services";
import { cities } from "@/content/cities/cities";
import { testimonials, getAverageRating } from "@/content/testimonials/testimonials";
import { WHATSAPP_URL } from "@/lib/constants";
import HeroSlider from "@/components/sections/HeroSlider";

export const metadata: Metadata = {
  title: "PalveMax Oy — Грузчики, переезды, уборка в Финляндии | 45 €/час",
  description:
    "Бытовые услуги в Riihimäki, Hyvinkää, Hämeenlinna и регионе. Грузчики, переезды, уборка квартир, покос травы, уборка снега, сборка мебели. 45 €/час. Работаем 7 дней.",
  alternates: { canonical: "https://palvemax.fi/ru" },
};

const WaIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const avgRating = getAverageRating();

export default function RuHomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, var(--blue-dark) 0%, var(--blue) 60%, var(--blue-light) 100%)`,
          minHeight: "600px",
        }}
      >
        {/* Hero background photo */}
        <HeroSlider />
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />

        <div className="container-max px-4 py-16 md:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-white text-sm mb-6">
                <span className="stars text-xs">★★★★★</span>
                <span className="opacity-90">{avgRating} · {testimonials.length} отзывов</span>
                <span className="opacity-50">·</span>
                <span className="opacity-80">с 2024 года</span>
              </div>

              <h1
                className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Бытовые услуги{" "}
                <span style={{ color: "#f07a3a" }}>в Финляндии</span>
              </h1>

              <p className="text-xl text-white/80 mb-1">Riihimäki · Hyvinkää · Hämeenlinna и регион</p>
              <p className="text-white/50 text-sm mb-8">Русский · Suomi · English</p>

              {/* Services pills — SVG иконки */}
              <div className="flex flex-wrap gap-2 mb-8">
                {services.slice(0, 6).map((s) => (
                  <Link
                    key={s.slug}
                    href={`/ru/uslugi/${s.slug}`}
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white rounded-full px-3 py-2 text-sm transition-colors"
                  >
                    <ServiceIcon slug={s.slug} size={16} className="opacity-80" color="white" />
                    <span>{s.ru.name}</span>
                  </Link>
                ))}
              </div>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-3xl font-bold text-white">45 €</span>
                <span className="text-white/60">/час · 1 работник</span>
                <span className="text-white/40 text-sm">· от 2 часов</span>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold px-6 py-4 rounded-xl text-white transition-colors"
                  style={{ backgroundColor: "#25d366" }}
                >
                  <WaIcon />
                  WhatsApp
                </a>
                <Link
                  href="/ru#forma"
                  className="inline-flex items-center gap-2 font-semibold px-6 py-4 rounded-xl text-white transition-colors"
                  style={{ backgroundColor: "var(--orange)" }}
                >
                  Оставить заявку
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <h2 className="text-xl font-bold mb-1" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
                Оставить заявку
              </h2>
              <p className="text-sm text-gray-500 mb-5">Ответим в течение часа · 7 дней в неделю</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-200">
        <div className="container-max px-4 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { number: "45 €", label: "за час / 1 работник" },
              { number: "2 ч", label: "минимальный заказ" },
              { number: "7/7", label: "дней в неделю" },
              { number: "14", label: "городов обслуживания" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--orange)" }}>
                  {stat.number}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICES — SVG иконки ── */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-10">
            <span className="tag mb-3">Услуги</span>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
              Что мы делаем
            </h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto">
              10 видов услуг в регионе Kanta-Häme. Один звонок — всё организуем.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/ru/uslugi/${service.slug}`}
                className="card hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
              >
                {/* SVG иконка вместо эмодзи */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(26,60,107,0.06)" }}
                >
                  <ServiceIcon slug={service.slug} size={28} />
                </div>
                <h3
                  className="font-semibold mb-1 group-hover:text-blue-700 transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}
                >
                  {service.ru.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{service.ru.shortDesc}</p>
                <div className="mt-3 flex items-center text-sm font-medium" style={{ color: "var(--orange)" }}>
                  Подробнее
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/ru/uslugi" className="btn-secondary">Все услуги</Link>
          </div>
        </div>
      </section>

      {/* ── КАК МЫ РАБОТАЕМ — инфографика ── */}
      <section className="section-padding" style={{ backgroundColor: "var(--gray-bg)" }}>
        <div className="container-max">
          <div className="text-center mb-10">
            <span className="tag mb-3">Процесс</span>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
              Как это работает
            </h2>
          </div>
          <HowItWorksInfographic />
        </div>
      </section>

      {/* ── PRICING — калькулятор ── */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-10">
            <span className="tag mb-3">Цены</span>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
              Прозрачная цена
            </h2>
            <p className="text-gray-500 mt-2">Платите за фактически затраченное время. Цены с НДС.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <PriceCalculator />

            <div className="space-y-4">
              <h3 className="text-xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
                Без сюрпризов
              </h3>
              {[
                "Минимальный заказ — 2 часа",
                "Управились быстрее — платите меньше",
                "Все цены включают НДС (ALV)",
                "Одинаковая цена в будни, выходные и праздники",
                "Никаких скрытых надбавок за выезд",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "var(--orange)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── СЕЗОННЫЙ КАЛЕНДАРЬ — инфографика ── */}
      <section className="section-padding" style={{ backgroundColor: "var(--gray-bg)" }}>
        <div className="container-max">
          <div className="text-center mb-8">
            <span className="tag mb-3">Сезонность</span>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
              Когда что заказывать
            </h2>
            <p className="text-gray-500 mt-2">
              Пиковые периоды — бронируйте заранее
            </p>
          </div>
          <SeasonTimeline />
          <div className="text-center mt-6">
            <Link href="/ru/sezonnyie-pakety" className="btn-secondary">
              Сезонные пакеты →
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-10">
            <span className="tag mb-3">Отзывы</span>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
              Что говорят клиенты
            </h2>
            <p className="text-gray-500 mt-2">
              <span className="stars">★★★★★</span> {avgRating} · {testimonials.length} отзывов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {testimonials.slice(0, 6).map((t) => (
              <div key={t.id} className="card">
                <div className="stars text-sm mb-2">{"★".repeat(t.rating)}</div>
                <p className="text-sm text-gray-700 leading-relaxed mb-4 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-sm" style={{ color: "var(--blue-dark)" }}>{t.name}</div>
                    <div className="text-xs text-gray-400">{t.city} · {t.service}</div>
                  </div>
                  <div className="text-xs text-gray-300">{t.date.split("-").reverse().join(".")}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/ru/otzovy" className="btn-secondary">Все отзывы</Link>
          </div>
        </div>
      </section>

      {/* ── CITIES ── */}
      <section className="section-padding" style={{ backgroundColor: "var(--gray-bg)" }}>
        <div className="container-max">
          <div className="text-center mb-8">
            <span className="tag mb-3">Районы</span>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
              14 городов региона
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-6">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/ru/goroda/${city.slug}`}
                className="px-4 py-2 rounded-full border border-gray-200 hover:border-blue-300 text-sm text-gray-700 hover:text-blue-700 transition-colors"
              >
                {city.name}
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/ru/goroda" className="btn-secondary">Страницы по городам</Link>
          </div>
        </div>
      </section>

      {/* ── FORM SECTION ── */}
      <section className="section-padding" style={{ backgroundColor: "var(--blue-dark)" }} id="forma">
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Оставить заявку
              </h2>
              <p className="text-white/60">Ответим в течение часа · Работаем 7 дней в неделю</p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
