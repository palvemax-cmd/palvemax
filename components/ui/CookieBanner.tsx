"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getT, getLangFromPath, type Lang } from "@/lib/i18n";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const lang = getLangFromPath(pathname) as Lang;
  const t = getT(lang).cookie;
  const r = getT(lang).routes;

  useEffect(() => {
    const consent = localStorage.getItem("palvemax_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => { localStorage.setItem("palvemax_cookie_consent", "accepted"); setVisible(false); };
  const decline = () => { localStorage.setItem("palvemax_cookie_consent", "declined"); setVisible(false); };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 py-4 md:py-5"
      style={{ backgroundColor: "var(--blue-dark)", borderTop: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 -8px 32px rgba(0,0,0,0.3)" }}>
      <div className="container-max flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex items-start gap-3 flex-1">
          <svg className="w-5 h-5 text-white/60 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
            <path d="M12 16v-4M12 8h.01"/>
          </svg>
          <p className="text-white/80 text-sm leading-relaxed">
            {t.text}{" "}
            <Link href={`/${lang}/${r.cookies}`} className="underline hover:text-white transition-colors">{t.policy}</Link>
            {" "}&{" "}
            <Link href={`/${lang}/${r.privacy}`} className="underline hover:text-white transition-colors">{t.privacy}</Link>.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button onClick={decline} className="text-white/50 hover:text-white/80 text-sm transition-colors px-3 py-2">
            {t.decline}
          </button>
          <button onClick={accept} className="btn-primary text-sm py-2.5 px-5">
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
