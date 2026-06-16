"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const langs = [
  { code: "ru", label: "RU" },
  { code: "fi", label: "FI" },
  { code: "en", label: "EN" },
];

// Route segment mapping between languages
const routeMap: Record<string, Record<string, string>> = {
  // services
  "uslugi":    { fi: "palvelut",  en: "services" },
  "palvelut":  { ru: "uslugi",    en: "services" },
  "services":  { ru: "uslugi",    fi: "palvelut" },
  // cities/areas
  "goroda":    { fi: "kaupungit", en: "cities" },
  "kaupungit": { ru: "goroda",    en: "cities" },
  "cities":    { ru: "goroda",    fi: "kaupungit" },
  // packages
  "sezonnyie-pakety": { fi: "kausipaketit",        en: "seasonal-packages" },
  "kausipaketit":     { ru: "sezonnyie-pakety",    en: "seasonal-packages" },
  "seasonal-packages":{ ru: "sezonnyie-pakety",    fi: "kausipaketit" },
  // cases
  "kejsy":       { fi: "referenssit", en: "cases" },
  "referenssit": { ru: "kejsy",       en: "cases" },
  "cases":       { ru: "kejsy",       fi: "referenssit" },
  // blog
  "blog":  { fi: "blogi",  en: "blog" },
  "blogi": { ru: "blog",   en: "blog" },
  // about
  "o-kompanii": { fi: "meista",  en: "about" },
  "meista":     { ru: "o-kompanii", en: "about" },
  "about":      { ru: "o-kompanii", fi: "meista" },
  // reviews
  "otzovy":    { fi: "arvostelut", en: "reviews" },
  "arvostelut":{ ru: "otzovy",     en: "reviews" },
  "reviews":   { ru: "otzovy",     fi: "arvostelut" },
  // gallery
  "galereja":  { fi: "galleria",  en: "gallery" },
  "galleria":  { ru: "galereja",  en: "gallery" },
  "gallery":   { ru: "galereja",  fi: "galleria" },
  // privacy
  "privacy-policy":       { fi: "tietosuojakaytanto", en: "privacy-policy" },
  "tietosuojakaytanto":   { ru: "privacy-policy",     en: "privacy-policy" },
  // cookies
  "cookie-policy": { fi: "evasteet",    en: "cookie-policy" },
  "evasteet":      { ru: "cookie-policy", en: "cookie-policy" },
};

function translatePath(segments: string[], fromLang: string, toLang: string): string {
  return segments.map((seg) => {
    const mapping = routeMap[seg];
    if (mapping && mapping[toLang]) return mapping[toLang];
    return seg;
  }).join("/");
}

export default function LangSwitcher() {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  const currentLang = parts[0] || "ru";
  const restSegments = parts.slice(1);

  return (
    <div className="flex items-center gap-1">
      {langs.map((lang, i) => {
        const isActive = currentLang === lang.code;
        const translatedRest = translatePath(restSegments, currentLang, lang.code);
        const href = `/${lang.code}${translatedRest ? `/${translatedRest}` : ""}`;

        return (
          <span key={lang.code} className="flex items-center gap-1">
            {i > 0 && <span className="text-gray-300 text-xs">·</span>}
            <Link
              href={href}
              className="text-xs font-semibold transition-colors"
              style={{
                color: isActive ? "var(--orange)" : "var(--gray-dark)",
              }}
            >
              {lang.label}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
