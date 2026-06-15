import type { Metadata } from "next";
import Link from "next/link";
import { cases } from "@/content/cases/cases";
import { ServiceIcon } from "@/components/icons/ServiceIcons";
import { getServiceBySlug } from "@/content/services/services";

export const metadata: Metadata = {
  title: "Кейсы — реальные примеры работ PalveMax Oy",
  description:
    "9 реальных кейсов: переезды, уборка, сборка мебели, уборка снега в Финляндии. Задача, процесс, результат.",
  alternates: { canonical: "https://palvemax.fi/ru/kejsy" },
};

export default function CasesPage() {
  return (
    <>
      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-100">
        <div className="container-max px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/ru" className="hover:text-gray-700">Главная</Link>
            <span>/</span>
            <span className="text-gray-900">Кейсы</span>
          </nav>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-10">
            <span className="tag mb-3">Кейсы</span>
            <h1
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}
            >
              Реальные примеры работ
            </h1>
            <p className="text-gray-500 max-w-xl mx-auto">
              Задача — процесс — результат. Без красивых слов, только факты.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cases.map((c) => {
              const service = getServiceBySlug(c.serviceSlug);
              return (
                <Link
                  key={c.slug}
                  href={`/ru/kejsy/${c.slug}`}
                  className="card hover:shadow-md hover:-translate-y-0.5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-2" style={{backgroundColor:"rgba(26,60,107,0.07)"}}>
                {service && <ServiceIcon slug={service.slug} size={22} />}
              </div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h2
                      className="font-semibold text-sm group-hover:text-blue-700 transition-colors leading-snug"
                      style={{ color: "var(--blue-dark)" }}
                    >
                      {c.ru.title}
                    </h2>
                    <span className="tag text-xs shrink-0">{c.city}</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">
                    {c.ru.task.slice(0, 100)}...
                  </p>
                  <div className="flex gap-4 text-xs text-gray-400 pt-2 border-t border-gray-100">
                    <span className="flex items-center gap-1"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>{c.ru.duration}</span>
                    <span className="flex items-center gap-1"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>{c.ru.workers} чел.</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
