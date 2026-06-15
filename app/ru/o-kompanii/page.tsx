import type { Metadata } from "next";
import { ADDRESS_FULL, ADDRESS_GOOGLE_MAPS, BUSINESS_ID, EMAIL, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "О компании PalveMax Oy — Бытовые услуги в Финляндии",
  description:
    "PalveMax Oy — официально зарегистрированная компания в Финляндии. Работаем с 2024 года в регионе Kanta-Häme. Русский, финский, английский.",
  alternates: { canonical: "https://palvemax.fi/ru/o-kompanii" },
};

export default function AboutPage() {
  return (
    <>
      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-100">
        <div className="container-max px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/ru" className="hover:text-gray-700">Главная</Link>
            <span>/</span>
            <span className="text-gray-900">О компании</span>
          </nav>
        </div>
      </div>

      <section
        className="py-12 px-4"
        style={{ background: `linear-gradient(135deg, var(--blue-dark), var(--blue))` }}
      >
        <div className="container-max max-w-3xl">
          <span className="tag mb-3 bg-white/10 text-white border-0">О компании</span>
          <h1
            className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            PalveMax Oy — бытовые услуги в Финляндии
          </h1>
          <p className="text-white/80 leading-relaxed">
            Работаем с 2024 года. Обслуживаем 14 населённых пунктов в регионе Kanta-Häme и Uusimaa. 
            Говорим на русском, финском и английском — как удобнее клиенту.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div>
                <h2
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}
                >
                  Как мы работаем
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  PalveMax начинался с одного запроса: русскоязычным жителям Финляндии нужны были исполнители, которым можно объяснить задачу по-русски — и которые приедут вовремя, без угадывания.
                </p>
                <p className="text-gray-600 leading-relaxed mt-3">
                  За три года выросли с двух человек до команды, которая закрывает 10 видов услуг в 14 городах. Не потому что «хотели масштабироваться» — просто клиенты звали снова и рекомендовали знакомым.
                </p>
              </div>

              <div>
                <h2
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}
                >
                  Юридические данные
                </h2>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex gap-3">
                    <span className="font-medium text-gray-800 w-32 shrink-0">Компания</span>
                    <span>PalveMax Oy</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-medium text-gray-800 w-32 shrink-0">Y-tunnus</span>
                    <span>3479337-9</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-medium text-gray-800 w-32 shrink-0">ALV</span>
                    <span>Все цены с НДС</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-medium text-gray-800 w-32 shrink-0">Регион</span>
                    <span>Kanta-Häme, Uusimaa</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-medium text-gray-800 w-32 shrink-0">Адрес</span>
                    <a href={ADDRESS_GOOGLE_MAPS} target="_blank" rel="noopener noreferrer" className="hover:underline" style={{color:"var(--blue)"}}>
                      {ADDRESS_FULL}
                    </a>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-medium text-gray-800 w-32 shrink-0">Языки</span>
                    <span>Русский · Suomi · English</span>
                  </div>
                </div>
              </div>

              <div>
                <h2
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}
                >
                  Что говорим вслух
                </h2>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                    Не берёмся за задачи, которые не можем выполнить хорошо. Лучше сказать «нет» сразу.
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                    Если опаздываем — предупреждаем, не оставляем ждать молча.
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                    Цена по факту времени. Не затягиваем работу.
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                    Если что-то сделали не так — исправим без споров.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              {/* Team photo */}
              <div className="relative h-52 w-full rounded-2xl overflow-hidden mb-6">
                <Image
                  src="/images/company/team-work.webp"
                  alt="Команда PalveMax за работой"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="card mb-6">
                <h3
                  className="font-bold mb-4"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}
                >
                  Цифры
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { n: "2024", l: "Год основания" },
                    { n: "14", l: "Городов обслуживания" },
                    { n: "10", l: "Видов услуг" },
                    { n: "7/7", l: "Дней в неделю" },
                  ].map((s) => (
                    <div key={s.l} className="text-center p-3" style={{ backgroundColor: "var(--gray-bg)", borderRadius: "12px" }}>
                      <div
                        className="text-2xl font-bold"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--orange)" }}
                      >
                        {s.n}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <h3
                  className="font-bold mb-4"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}
                >
                  Написать нам
                </h3>
                <ContactForm compact />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
