import type { Metadata } from "next";
import Link from "next/link";
import { EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Политика cookies — PalveMax Oy",
  description: "Как PalveMax Oy использует файлы cookie на сайте.",
  robots: { index: false },
};

export default function CookiePolicyPage() {
  return (
    <>
      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-100">
        <div className="container-max px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/ru" className="hover:text-gray-700">Главная</Link>
            <span>/</span>
            <span className="text-gray-900">Политика cookies</span>
          </nav>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}>
            Политика использования cookies
          </h1>
          <p className="text-gray-400 text-sm mb-8">Обновлено: январь 2025</p>

          <div className="space-y-8">

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "var(--blue-dark)", fontFamily: "'DM Sans', sans-serif" }}>Что такое cookies</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Cookies — небольшие текстовые файлы, которые сохраняются в браузере при посещении сайта. Они помогают сайту работать корректно и позволяют нам понять, как посетители используют сайт.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "var(--blue-dark)", fontFamily: "'DM Sans', sans-serif" }}>Какие cookies мы используем</h2>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr style={{ backgroundColor: "var(--gray-bg)" }}>
                      <th className="text-left p-3 font-semibold text-gray-700 border-b border-gray-200">Название</th>
                      <th className="text-left p-3 font-semibold text-gray-700 border-b border-gray-200">Тип</th>
                      <th className="text-left p-3 font-semibold text-gray-700 border-b border-gray-200">Срок</th>
                      <th className="text-left p-3 font-semibold text-gray-700 border-b border-gray-200">Цель</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "palvemax_cookie_consent", type: "Необходимый", period: "1 год", purpose: "Сохраняет ваш выбор настроек cookies" },
                      { name: "_ga", type: "Аналитический", period: "2 года", purpose: "Google Analytics — анализ трафика (только с согласия)" },
                      { name: "_ga_*", type: "Аналитический", period: "2 года", purpose: "Google Analytics — идентификатор сессии" },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-gray-100">
                        <td className="p-3 font-mono text-xs text-gray-700">{row.name}</td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded-full text-xs font-medium"
                            style={{
                              backgroundColor: row.type === "Необходимый" ? "rgba(26,60,107,0.08)" : "rgba(232,96,28,0.1)",
                              color: row.type === "Необходимый" ? "var(--blue)" : "var(--orange)",
                            }}>
                            {row.type}
                          </span>
                        </td>
                        <td className="p-3 text-gray-500">{row.period}</td>
                        <td className="p-3 text-gray-600">{row.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "var(--blue-dark)", fontFamily: "'DM Sans', sans-serif" }}>Необходимые cookies</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Необходимые cookies обеспечивают базовую функциональность сайта — например, сохраняют ваш выбор настроек конфиденциальности. Без них сайт не может работать корректно. Они устанавливаются без вашего согласия на основании законного интереса.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "var(--blue-dark)", fontFamily: "'DM Sans', sans-serif" }}>Аналитические cookies</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Используются только если вы нажали «Принять все» в баннере. Помогают нам понять, какие страницы популярны и как улучшить сайт. Вы можете отозвать согласие, нажав «Только необходимые» в баннере (появляется при следующем визите после очистки cookies).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "var(--blue-dark)", fontFamily: "'DM Sans', sans-serif" }}>Как управлять cookies</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Вы можете в любое время изменить или отозвать согласие, очистив cookies сайта в настройках браузера. Также можно настроить браузер для блокировки cookies или уведомлений об их установке.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Chrome", url: "https://support.google.com/chrome/answer/95647" },
                  { name: "Firefox", url: "https://support.mozilla.org/kb/clear-cookies-and-site-data-firefox" },
                  { name: "Safari", url: "https://support.apple.com/guide/safari/manage-cookies-sfri11471" },
                ].map((b) => (
                  <a key={b.name} href={b.url} target="_blank" rel="noopener noreferrer"
                    className="text-sm px-3 py-1.5 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
                    style={{ color: "var(--blue)" }}>
                    {b.name} →
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: "var(--blue-dark)", fontFamily: "'DM Sans', sans-serif" }}>Вопросы</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                По вопросам об использовании cookies обращайтесь:{" "}
                <a href={`mailto:${EMAIL}`} className="underline" style={{color:"var(--blue)"}}>{EMAIL}</a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
