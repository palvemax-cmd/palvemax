/**
 * SVG-иконки услуг PalveMax — финский минимализм
 * Stroke: var(--blue) или задаётся через className
 * Все иконки: viewBox="0 0 48 48", strokeWidth=1.8, strokeLinecap/join=round
 */

interface IconProps {
  className?: string;
  size?: number;
  color?: string;
}

const base = { strokeLinecap: "round" as const, strokeLinejoin: "round" as const, strokeWidth: 1.8 };

// 🏋️ Грузчики — человек с коробкой
export const IconGruzchiki = ({ className = "", size = 48, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} className={className} {...base}>
    <rect x="12" y="26" width="24" height="14" rx="2" />
    <path d="M18 26v-4a6 6 0 0112 0v4" />
    <circle cx="24" cy="10" r="4" />
    <path d="M16 40l-4 4M32 40l4 4" />
  </svg>
);

// 🚚 Переезд — грузовик
export const IconPereezd = ({ className = "", size = 48, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} className={className} {...base}>
    <path d="M4 32V18a2 2 0 012-2h24v16H4z" />
    <path d="M30 24h8l4 8v0H30V24z" />
    <circle cx="11" cy="36" r="4" />
    <circle cx="37" cy="36" r="4" />
    <path d="M15 36h18" />
    <path d="M10 22h12M10 27h8" />
  </svg>
);

// 🔧 Сборка мебели — гаечный ключ + шкаф
export const IconSborka = ({ className = "", size = 48, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} className={className} {...base}>
    <rect x="8" y="8" width="20" height="32" rx="2" />
    <line x1="8" y1="24" x2="28" y2="24" />
    <line x1="18" y1="16" x2="18" y2="18" />
    <line x1="18" y1="32" x2="18" y2="34" />
    <path d="M32 14a6 6 0 016 6 6 6 0 01-2 4.5L30 30l-4-4 5.5-6A6 6 0 0132 14z" />
    <path d="M26 30l-4 4" />
  </svg>
);

// 🪛 Демонтаж — отвёртка + стрелка разборки
export const IconDemontazh = ({ className = "", size = 48, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} className={className} {...base}>
    <path d="M10 38L34 14" />
    <path d="M34 14l4-4 4 4-4 4-4-4z" />
    <path d="M10 38l-4 4" strokeWidth={2.5} />
    <rect x="16" y="8" width="16" height="20" rx="2" />
    <line x1="16" y1="18" x2="32" y2="18" />
    <path d="M20 26v6M28 26v6" strokeDasharray="2 2" />
    <path d="M16 34l4 4h8l4-4" />
  </svg>
);

// 🏠 Уборка квартир — метла/окно
export const IconUborkaKvartir = ({ className = "", size = 48, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} className={className} {...base}>
    <rect x="8" y="8" width="32" height="32" rx="3" />
    <line x1="8" y1="24" x2="40" y2="24" />
    <line x1="24" y1="8" x2="24" y2="40" />
    <path d="M14 20l4 4-4 4M30 16l4 4-4 4" strokeWidth={1.4} />
    <path d="M30 28l-6 4" strokeWidth={1.4} />
  </svg>
);

// 🏡 Уборка домов — дом со щёткой
export const IconUborkaDoMov = ({ className = "", size = 48, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} className={className} {...base}>
    <path d="M6 22L24 6l18 16" />
    <path d="M10 22v18h28V22" />
    <rect x="19" y="30" width="10" height="10" />
    <path d="M34 34c0 2-2 4-4 4" />
    <path d="M38 18l-4 16" strokeDasharray="2 3" strokeWidth={1.4} />
  </svg>
);

// 🌿 Покос травы — газонокосилка
export const IconPokos = ({ className = "", size = 48, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} className={className} {...base}>
    <rect x="10" y="22" width="28" height="12" rx="4" />
    <line x1="10" y1="28" x2="38" y2="28" />
    <circle cx="16" cy="36" r="3" />
    <circle cx="32" cy="36" r="3" />
    <path d="M24 22V14" />
    <path d="M30 16a6 6 0 00-12 0" />
    <path d="M14 34h20" />
    {/* Трава */}
    <path d="M6 38c0-4 3-6 3-6s3 2 3 6M20 38c0-4 3-6 3-6s3 2 3 6M34 38c0-4 3-6 3-6s3 2 3 6" strokeWidth={1.4} />
  </svg>
);

// 🍂 Уборка двора — листья + грабли
export const IconUborkaDvora = ({ className = "", size = 48, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} className={className} {...base}>
    <path d="M24 8c0 0-14 8-14 20a14 14 0 0028 0C38 16 24 8 24 8z" strokeWidth={1.6} />
    <path d="M24 8v28" />
    <path d="M14 22c4-4 10-4 10-4s0 6-4 10" strokeWidth={1.4} />
    <path d="M34 22c-4-4-10-4-10-4s0 6 4 10" strokeWidth={1.4} />
    <line x1="10" y1="42" x2="38" y2="42" strokeWidth={2} />
  </svg>
);

// ❄️ Уборка снега — снежинка + лопата
export const IconSneg = ({ className = "", size = 48, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} className={className} {...base}>
    {/* Снежинка */}
    <line x1="24" y1="6" x2="24" y2="42" />
    <line x1="6" y1="24" x2="42" y2="24" />
    <line x1="10" y1="10" x2="38" y2="38" />
    <line x1="38" y1="10" x2="10" y2="38" />
    <circle cx="24" cy="24" r="4" />
    {/* Кристаллы на концах */}
    <path d="M24 6l-3 4M24 6l3 4M24 42l-3-4M24 42l3-4" strokeWidth={1.4} />
    <path d="M6 24l4-3M6 24l4 3M42 24l-4-3M42 24l-4 3" strokeWidth={1.4} />
  </svg>
);

// 🔨 Мелкий ремонт — молоток + гвоздь
export const IconRemont = ({ className = "", size = 48, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} className={className} {...base}>
    <path d="M30 10l8 8-20 20-8-8L30 10z" />
    <path d="M22 18l-14 14a2 2 0 000 3l3 3a2 2 0 003 0l14-14" />
    <path d="M30 10l4-4a2 2 0 013 0l5 5a2 2 0 010 3l-4 4" />
    <line x1="12" y1="36" x2="14" y2="38" strokeWidth={2.5} />
  </svg>
);

// Карта: slug → компонент
export const serviceIconMap: Record<string, React.FC<IconProps>> = {
  "gruzchiki": IconGruzchiki,
  "pereezd": IconPereezd,
  "sborka-mebeli": IconSborka,
  "demontazh-mebeli": IconDemontazh,
  "uborka-kvartir": IconUborkaKvartir,
  "uborka-domov": IconUborkaDoMov,
  "pokos-travy": IconPokos,
  "uborka-dvora": IconUborkaDvora,
  "uborka-snega": IconSneg,
  "melkij-remont": IconRemont,
};

export function ServiceIcon({ slug, size = 48, className = "", color = "var(--blue)" }: { slug: string; size?: number; className?: string; color?: string }) {
  const Icon = serviceIconMap[slug];
  if (!Icon) return null;
  return <Icon size={size} className={className} color={color} />;
}
