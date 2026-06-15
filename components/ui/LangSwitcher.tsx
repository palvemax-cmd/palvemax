"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const langs = [
  { code: "ru", label: "RU" },
  { code: "fi", label: "FI" },
  { code: "en", label: "EN" },
];

export default function LangSwitcher() {
  const pathname = usePathname();

  // Get current lang and path after lang prefix
  const segments = pathname.split("/").filter(Boolean);
  const currentLang = segments[0] || "ru";
  const rest = segments.slice(1).join("/");

  return (
    <div className="flex items-center gap-1">
      {langs.map((lang, i) => {
        const isActive = currentLang === lang.code;
        const href = `/${lang.code}${rest ? `/${rest}` : ""}`;
        return (
          <span key={lang.code} className="flex items-center gap-1">
            {i > 0 && <span className="text-gray-300 text-xs">·</span>}
            <Link
              href={href}
              className="text-xs font-semibold transition-colors"
              style={{
                color: isActive ? "var(--orange)" : "var(--gray-dark)",
                textDecoration: isActive ? "none" : "none",
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
