"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function getLang(pathname: string): "fi" | "ru" | "en" {
  const seg = pathname.split("/")[1];
  if (seg === "ru") return "ru";
  if (seg === "en") return "en";
  return "fi";
}

const t = {
  fi: {
    code: "404",
    title: "Sivua ei löydy",
    desc: "Sivu on poistettu tai osoite on virheellinen.",
    home: "Etusivulle",
    services: "Palvelut",
    contact: "Jätä pyyntö",
  },
  ru: {
    code: "404",
    title: "Страница не найдена",
    desc: "Страница удалена или адрес указан неверно.",
    home: "На главную",
    services: "Услуги",
    contact: "Оставить заявку",
  },
  en: {
    code: "404",
    title: "Page not found",
    desc: "This page has been removed or the address is incorrect.",
    home: "Go home",
    services: "Services",
    contact: "Get a Quote",
  },
};

export default function NotFound() {
  const pathname = usePathname();
  const lang = getLang(pathname);
  const tr = t[lang];

  const routes = {
    fi: { home: "/fi", services: "/fi/palvelut", contact: "/fi#forma" },
    ru: { home: "/ru", services: "/ru/uslugi", contact: "/ru#forma" },
    en: { home: "/en", services: "/en/services", contact: "/en#forma" },
  }[lang];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
      style={{ background: "linear-gradient(135deg, var(--blue-dark) 0%, var(--blue) 100%)" }}>

      {/* Big 404 */}
      <div className="text-[120px] md:text-[180px] font-black leading-none select-none"
        style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.08)" }}>
        {tr.code}
      </div>

      {/* Icon */}
      <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 -mt-8"
        style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="white"
          strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="20" cy="20" r="16"/>
          <path d="M20 13v8"/>
          <circle cx="20" cy="26" r="1" fill="white" stroke="none"/>
        </svg>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-3"
        style={{ fontFamily: "'DM Sans', sans-serif" }}>
        {tr.title}
      </h1>
      <p className="text-white/60 mb-10 max-w-sm">{tr.desc}</p>

      {/* Actions */}
      <div className="flex flex-wrap gap-3 justify-center">
        <Link href={routes.home}
          className="px-6 py-3 rounded-xl font-semibold text-sm transition-all"
          style={{ backgroundColor: "white", color: "var(--blue-dark)" }}>
          {tr.home}
        </Link>
        <Link href={routes.services}
          className="px-6 py-3 rounded-xl font-semibold text-sm transition-all border border-white/30 text-white hover:bg-white/10">
          {tr.services}
        </Link>
        <Link href={routes.contact}
          className="px-6 py-3 rounded-xl font-semibold text-sm transition-all"
          style={{ backgroundColor: "var(--orange)", color: "white" }}>
          {tr.contact}
        </Link>
      </div>

      {/* Logo */}
      <div className="mt-12 text-white/30 text-sm">
        PalveMax Oy
      </div>
    </div>
  );
}
