import type { MetadataRoute } from "next";
import { getAllServiceSlugs } from "@/content/services/services";
import { getAllCitySlugs } from "@/content/cities/cities";

const BASE = "https://palvemax.fi";
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceSlugs = getAllServiceSlugs();
  const citySlugs = getAllCitySlugs();

  // Finnish pages (primary - highest priority)
  const fiStatic: MetadataRoute.Sitemap = [
    { url: `${BASE}/fi`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/fi/palvelut`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/fi/kaupungit`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/fi/blogi`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/fi/arvostelut`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/fi/meista`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/fi/kausipaketit`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/fi/referenssit`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/fi/galleria`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  const fiServices = serviceSlugs.map(s => ({
    url: `${BASE}/fi/palvelut/${s}`,
    lastModified: now, changeFrequency: "monthly" as const, priority: 0.9,
  }));

  const fiCities = citySlugs.map(s => ({
    url: `${BASE}/fi/kaupungit/${s}`,
    lastModified: now, changeFrequency: "monthly" as const, priority: 0.8,
  }));

  const fiLocal: MetadataRoute.Sitemap = [];
  for (const c of citySlugs) for (const s of serviceSlugs) {
    fiLocal.push({ url: `${BASE}/fi/${c}/${s}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 });
  }

  // Russian pages
  const ruStatic: MetadataRoute.Sitemap = [
    { url: `${BASE}/ru`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/ru/uslugi`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/ru/goroda`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/ru/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/ru/otzovy`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/ru/o-kompanii`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/ru/sezonnyie-pakety`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/ru/kejsy`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  const ruServices = serviceSlugs.map(s => ({
    url: `${BASE}/ru/uslugi/${s}`,
    lastModified: now, changeFrequency: "monthly" as const, priority: 0.8,
  }));

  const ruCities = citySlugs.map(s => ({
    url: `${BASE}/ru/goroda/${s}`,
    lastModified: now, changeFrequency: "monthly" as const, priority: 0.7,
  }));

  const ruLocal: MetadataRoute.Sitemap = [];
  for (const c of citySlugs) for (const s of serviceSlugs) {
    ruLocal.push({ url: `${BASE}/ru/${c}/${s}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 });
  }

  // English pages
  const enStatic: MetadataRoute.Sitemap = [
    { url: `${BASE}/en`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/en/services`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/en/cities`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const enServices = serviceSlugs.map(s => ({
    url: `${BASE}/en/services/${s}`,
    lastModified: now, changeFrequency: "monthly" as const, priority: 0.7,
  }));

  return [
    ...fiStatic, ...fiServices, ...fiCities, ...fiLocal,
    ...ruStatic, ...ruServices, ...ruCities, ...ruLocal,
    ...enStatic, ...enServices,
  ];
}
