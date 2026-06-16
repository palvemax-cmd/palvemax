"use client";

import { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { services } from "@/content/services/services";
import { cities } from "@/content/cities/cities";
import { getT, getLangFromPath, type Lang } from "@/lib/i18n";

interface FormData {
  name: string; phone: string; email: string;
  city: string; service: string; comment: string; files: File[];
}

interface Props {
  preselectedService?: string;
  preselectedCity?: string;
  compact?: boolean;
  lang?: Lang;
}

function getServiceName(s: typeof services[0], lang: Lang) {
  if (lang === "fi") return s.fi.name;
  if (lang === "en") return s.en.name;
  return s.ru.name;
}

export default function ContactForm({ preselectedService = "", preselectedCity = "", compact = false, lang: langProp }: Props) {
  const pathname = usePathname();
  const lang = langProp || getLangFromPath(pathname) as Lang;
  const t = getT(lang).form;

  const [form, setForm] = useState<FormData>({
    name: "", phone: "", email: "", city: preselectedCity,
    service: preselectedService, comment: "", files: [],
  });
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setForm((prev) => ({ ...prev, files: [...prev.files, ...files].slice(0, 5) }));
  };

  const removeFile = (index: number) => {
    setForm((prev) => ({ ...prev, files: prev.files.filter((_, i) => i !== index) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([key, val]) => {
        if (key !== "files") fd.append(key, val as string);
      });
      form.files.forEach((file) => fd.append("files", file));
      const res = await fetch("/api/contact", { method: "POST", body: fd });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg(t.errorText);
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#d1fae5" }}>
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {t.successTitle}
        </h3>
        <p className="text-gray-600 text-sm">{t.successText}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? "space-y-3" : "space-y-4"} id="zayavka">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t.name} <span className="text-red-500">*</span>
          </label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required
            placeholder={t.namePlaceholder}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t.phone} <span className="text-red-500">*</span>
          </label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} required
            placeholder="+358 XX XXX XXXX"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 text-sm" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{t.email}</label>
        <input type="email" name="email" value={form.email} onChange={handleChange}
          placeholder="example@email.com"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 text-sm" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t.city} <span className="text-red-500">*</span>
          </label>
          <select name="city" value={form.city} onChange={handleChange} required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 text-sm bg-white">
            <option value="">{t.selectCity}</option>
            {cities.map((c) => (
              <option key={c.slug} value={c.name}>{c.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t.service} <span className="text-red-500">*</span>
          </label>
          <select name="service" value={form.service} onChange={handleChange} required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 text-sm bg-white">
            <option value="">{t.selectService}</option>
            {services.map((s) => (
              <option key={s.slug} value={getServiceName(s, lang)}>
                {getServiceName(s, lang)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{t.comment}</label>
        <textarea name="comment" value={form.comment} onChange={handleChange}
          rows={compact ? 2 : 3} placeholder={t.commentPlaceholder}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 text-sm resize-none" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">{t.photos}</label>
        <button type="button" onClick={() => fileRef.current?.click()}
          className="flex items-center gap-2 px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-sm text-gray-500 hover:border-gray-400 transition-colors w-full justify-center">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}>
            <rect x="3" y="5" width="18" height="14" rx="2"/>
            <circle cx="12" cy="12" r="3"/>
            <path d="M8 5l1.5-2h5L16 5"/>
          </svg>
          {t.addPhoto}
        </button>
        <input ref={fileRef} type="file" accept="image/*" multiple onChange={handleFiles} className="hidden" />
        {form.files.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {form.files.map((file, i) => (
              <div key={i} className="flex items-center gap-1 bg-gray-100 rounded px-2 py-1 text-xs text-gray-600">
                <span>{file.name.slice(0, 20)}{file.name.length > 20 ? "…" : ""}</span>
                <button type="button" onClick={() => removeFile(i)}
                  className="text-gray-400 hover:text-red-500 ml-1" aria-label="Remove">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M1 1l10 10M11 1L1 11"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {status === "error" && <p className="text-red-500 text-sm">{errorMsg}</p>}

      <button type="submit" disabled={status === "loading"}
        className="btn-primary w-full justify-center py-4 text-base font-semibold disabled:opacity-60">
        {status === "loading" ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            {t.sending}
          </>
        ) : (
          <>
            {t.submit}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </>
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">{t.footer}</p>
    </form>
  );
}
