"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { PHONE_DISPLAY, PHONE_RAW, WHATSAPP_URL, WHATSAPP_NUMBER } from "@/lib/constants";

const navItems = [
  { href: "/ru/uslugi", label: "Услуги" },
  { href: "/ru/goroda", label: "Районы" },
  { href: "/ru/sezonnyie-pakety", label: "Пакеты" },
  { href: "/ru/kejsy", label: "Кейсы" },
  { href: "/ru/blog", label: "Блог" },
  { href: "/ru/o-kompanii", label: "О нас" },
  { href: "/ru/otzovy", label: "Отзывы" },
];

// WhatsApp SVG icon
const WaIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
      {/* Top info bar — без телефона, только регион и режим работы */}
      <div style={{ backgroundColor: "var(--blue-dark)" }} className="text-white text-xs py-2 px-4">
        <div className="container-max flex items-center justify-between">
          <span className="opacity-70">Riihimäki · Hyvinkää · Hämeenlinna и регион</span>
          <span className="opacity-60">Пн–Вс 7:00–21:00</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-max flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/ru" className="flex items-center gap-2.5">
          <Image
            src="/palvemax-logo.png"
            alt="PalveMax"
            width={44}
            height={44}
            className="w-11 h-11 object-contain"
            priority
          />
          <div className="font-bold text-xl leading-none" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue)" }}>
            PalveMax
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA — только WhatsApp + Заявка */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-sm py-2.5 px-5"
          >
            <WaIcon />
            WhatsApp
          </a>
          <Link href="/ru#forma" className="btn-primary text-sm py-2.5 px-5">
            Оставить заявку
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4">
          <nav className="flex flex-col gap-1 mb-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 px-3 rounded-lg hover:bg-gray-50 text-gray-700 font-medium transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3 pt-3 border-t border-gray-100">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp justify-center py-3"
            >
              <WaIcon />
              Написать в WhatsApp
            </a>
            <Link href="/ru#forma" className="btn-primary justify-center py-3" onClick={() => setMenuOpen(false)}>
              Оставить заявку
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
