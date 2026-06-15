import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";
import { cases } from "@/content/cases/cases";
import { getServiceBySlug } from "@/content/services/services";
import { ServiceIcon } from "@/components/icons/ServiceIcons";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = cases.find((c) => c.slug === slug);
  if (!c) return {};
  return {
    title: `${c.ru.title} — кейс PalveMax`,
    description: `${c.ru.task.slice(0, 120)} Результат: ${c.ru.result.slice(0, 80)}`,
    alternates: { canonical: `https://palvemax.fi/ru/kejsy/${slug}` },
  };
}

export default async function CaseDetailPage({ params }: Props) {
  const { slug } = await params;
  const c = cases.find((c) => c.slug === slug);
  if (!c) notFound();
  const service = getServiceBySlug(c.serviceSlug);

  return (
    <>
      <div style={{ backgroundColor: "var(--gray-bg)" }} className="border-b border-gray-100">
        <div className="container-max px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/ru" className="hover:text-gray-700">Главная</Link>
            <span>/</span>
            <Link href="/ru/kejsy" className="hover:text-gray-700">Кейсы</Link>
            <span>/</span>
            <span className="text-gray-900">{c.city}</span>
          </nav>
        </div>
      </div>

      <section
        className="py-10 px-4"
        style={{ background: `linear-gradient(135deg, var(--blue-dark), var(--blue))` }}
      >
        <div className="container-max max-w-3xl">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3" style={{backgroundColor:"rgba(255,255,255,0.12)"}}>
            {service && <ServiceIcon slug={c.serviceSlug} size={30} color="white" />}
          </div>
          <span className="tag mb-2 bg-white/10 text-white border-0">{c.city}</span>
          <h1
            className="text-2xl md:text-3xl font-bold text-white mt-2"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {c.ru.title}
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-6">
              {[
                { label: "Задача", content: c.ru.task },
                { label: "Как работали", content: c.ru.process },
                { label: "Результат", content: c.ru.result },
              ].map((section) => (
                <div key={section.label}>
                  <h2
                    className="text-lg font-bold mb-2"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}
                  >
                    {section.label}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-sm">{section.content}</p>
                </div>
              ))}

              <div className="card flex gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: "var(--orange)", fontFamily: "'DM Sans', sans-serif" }}>
                    {c.ru.workers}
                  </div>
                  <div className="text-xs text-gray-400">человек</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: "var(--orange)", fontFamily: "'DM Sans', sans-serif" }}>
                    {c.ru.duration.split(" ")[0]}
                  </div>
                  <div className="text-xs text-gray-400">часов работы</div>
                </div>
                {service && (
                  <div className="ml-auto">
                    <Link
                      href={`/ru/uslugi/${c.serviceSlug}`}
                      className="btn-secondary text-sm"
                    >
                      <ServiceIcon slug={c.serviceSlug} size={14} />
                      {service.ru.name}
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <div>
              <div className="card sticky top-24">
                <h3
                  className="font-bold mb-3"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--blue-dark)" }}
                >
                  Нужна похожая услуга?
                </h3>
                <ContactForm
                  preselectedService={service?.ru.name}
                  preselectedCity={c.city}
                  compact
                />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Link href="/ru/kejsy" className="btn-secondary text-sm">
              ← Все кейсы
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
