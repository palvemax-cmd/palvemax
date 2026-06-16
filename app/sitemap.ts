import type { MetadataRoute } from "next";
import { getAllServiceSlugs } from "@/content/services/services";
import { getAllCitySlugs } from "@/content/cities/cities";
import { cases } from "@/content/cases/cases";

const BASE = "https://palvemax.fi";
const now = new Date();
const langs = ["ru", "fi", "en"];

function makePages(paths: string[], priority: number, freq: MetadataRoute.Sitemap[0]["changeFrequency"]): MetadataRoute.Sitemap {
  return paths.map((path) => ({ url: `${BASE}${path}`, lastModified: now, changeFrequency: freq, priority }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceSlugs = getAllServiceSlugs();
  const citySlugs = getAllCitySlugs();

  // RU pages
  const ruStatic = makePages([
    "/ru", "/ru/uslugi", "/ru/goroda", "/ru/blog", "/ru/otzovy",
    "/ru/o-kompanii", "/ru/sezonnyie-pakety", "/ru/kejsy", "/ru/galereja",
  ], 0.8, "monthly");

  const ruServices = serviceSlugs.map(s => ({ url: `${BASE}/ru/uslugi/${s}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 }));
  const ruCities = citySlugs.map(s => ({ url: `${BASE}/ru/goroda/${s}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 }));
  const ruLocal: MetadataRoute.Sitemap = [];
  for (const c of citySlugs) for (const s of serviceSlugs) {
    ruLocal.push({ url: `${BASE}/ru/${c}/${s}`, lastModified: now, changeFrequency: "monthly", priority: 0.75 });
  }

  // FI pages
  const fiStatic = makePages([
    "/fi", "/fi/palvelut", "/fi/kaupungit", "/fi/blogi", "/fi/arvostelut",
    "/fi/meista", "/fi/kausipaketit", "/fi/referenssit", "/fi/galleria",
  ], 0.8, "monthly");

  const fiServices = serviceSlugs.map(s => ({ url: `${BASE}/fi/palvelut/${s}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 }));
  const fiCities = citySlugs.map(s => ({ url: `${BASE}/fi/kaupungit/${s}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 }));
  const fiLocal: MetadataRoute.Sitemap = [];
  for (const c of citySlugs) for (const s of serviceSlugs) {
    fiLocal.push({ url: `${BASE}/fi/${c}/${s}`, lastModified: now, changeFrequency: "monthly", priority: 0.75 });
  }

  // EN pages (basic for now)
  const enStatic = makePages(["/en", "/en/services", "/en/cities"], 0.7, "monthly");
  const enServices = serviceSlugs.map(s => ({ url: `${BASE}/en/services/${s}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 }));

  return [
    ...ruStatic, ...ruServices, ...ruCities, ...ruLocal,
    ...fiStatic, ...fiServices, ...fiCities, ...fiLocal,
    ...enStatic, ...enServices,
  ];
}
