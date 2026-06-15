/**
 * Инфографика "Как мы работаем" — горизонтальная шкала 4 шага
 * Используется на главной и страницах услуг
 */
export default function HowItWorksInfographic() {
  const steps = [
    {
      n: "01",
      title: "Заявка",
      desc: "Звонок, WhatsApp или форма на сайте",
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 4C10.268 4 4 10.268 4 18s6.268 14 14 14 14-6.268 14-14S25.732 4 18 4z"/>
          <path d="M12 16c0-3.314 2.686-6 6-6s6 2.686 6 6v2c0 .552-.448 1-1 1h-10c-.552 0-1-.448-1-1v-2z"/>
          <path d="M15 23h6M18 23v5"/>
        </svg>
      ),
    },
    {
      n: "02",
      title: "Уточнение",
      desc: "Детали задачи: объём, адрес, время",
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="6" width="24" height="24" rx="3"/>
          <path d="M12 14h12M12 18h8M12 22h10"/>
          <circle cx="27" cy="9" r="4" fill="var(--orange)" stroke="none"/>
          <text x="25.5" y="12" fill="white" fontSize="5" fontWeight="bold">!</text>
        </svg>
      ),
    },
    {
      n: "03",
      title: "Работа",
      desc: "Приедем вовремя со своим инструментом",
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 4l2.5 8H28l-6.5 5 2.5 8L18 21l-6 4 2.5-8L8 12h7.5L18 4z"/>
        </svg>
      ),
    },
    {
      n: "04",
      title: "Оплата",
      desc: "По факту времени — ни копейки лишнего",
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="10" width="28" height="18" rx="3"/>
          <path d="M4 16h28"/>
          <path d="M10 22h4M20 22h6"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="relative">
      {/* Connecting line — desktop */}
      <div
        className="hidden md:block absolute top-10 left-0 right-0 h-0.5 z-0"
        style={{ backgroundColor: "rgba(26,60,107,0.12)", top: "28px" }}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            {/* Circle */}
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-md"
              style={{ backgroundColor: "var(--blue)" }}
            >
              {(() => {
                const icons = [
                  <svg key="1" width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="18" width="20" height="14" rx="2"/><path d="M12 18v-3a6 6 0 0112 0v3"/><circle cx="18" cy="10" r="3"/></svg>,
                  <svg key="2" width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="6" width="24" height="24" rx="3"/><path d="M12 14h12M12 18h8M12 22h10"/></svg>,
                  <svg key="3" width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="12"/><path d="M14 18l3 3 7-7"/></svg>,
                  <svg key="4" width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="10" width="28" height="18" rx="3"/><path d="M4 16h28"/><path d="M10 22h4M20 22h6"/></svg>,
                ];
                return icons[steps.indexOf(step)] || null;
              })()}
            </div>
            {/* Number tag */}
            <div
              className="text-xs font-bold mb-1.5 tracking-widest"
              style={{ color: "var(--orange)" }}
            >
              {step.n}
            </div>
            <div
              className="font-semibold mb-1"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}
            >
              {step.title}
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
