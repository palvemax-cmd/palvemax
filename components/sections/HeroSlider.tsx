"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/images/hero/hero-main.webp",
    alt: "Профессиональный переезд в Финляндии",
  },
  {
    src: "/images/services/service-gruzchiki.webp",
    alt: "Грузчики PalveMax за работой",
  },
  {
    src: "/images/services/service-uborka-kvartir.webp",
    alt: "Профессиональная уборка квартир в Финляндии",
  },
  {
    src: "/images/services/service-pokos.webp",
    alt: "Покос травы в Финляндии",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const next = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((c) => (c + 1) % slides.length);
      setIsTransitioning(false);
    }, 600);
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <>
      {/* Слайды */}
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover object-center"
              priority={i === 0}
            />
          </div>
        ))}
        {/* Тёмный оверлей */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(15,36,66,0.88) 0%, rgba(26,60,107,0.75) 55%, rgba(26,60,107,0.55) 100%)",
          }}
        />
      </div>

      {/* Навигация — точки */}
      <div className="absolute bottom-6 left-8 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (!isTransitioning) setCurrent(i);
            }}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === current ? "24px" : "8px",
              height: "8px",
              backgroundColor:
                i === current ? "var(--orange)" : "rgba(255,255,255,0.35)",
            }}
            aria-label={`Слайд ${i + 1}`}
          />
        ))}
      </div>
    </>
  );
}
