import type { MetadataRoute } from "next";
import { getAllServiceSlugs } from "@/content/services/services";
import { getAllCitySlugs } from "@/content/cities/cities";
import { cases } from "@/content/cases/cases";
import fs from "fs";
import path from "path";

function getBlogSlugs(): string[] {
  const blogDir = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".md"));
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(blogDir, file), "utf-8");
    const frontmatter = raw.match(/^---\n([\s\S]*?)\n---/)?.[1] || "";
    return frontmatter.match(/^slug:\s*["']?(.+?)["']?$/m)?.[1] || "";
  }).filter(Boolean);
}

const BASE = "https://palvemax.fi";
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceSlugs = getAllServiceSlugs();
  const citySlugs = getAllCitySlugs();
  const blogSlugs = getBlogSlugs();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/ru`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/ru/uslugi`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/ru/goroda`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/ru/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/ru/otzovy`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/ru/o-kompanii`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE}/ru/sezonnyie-pakety`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/ru/kejsy`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/ru/galereja`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${BASE}/ru/uslugi/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const cityPages: MetadataRoute.Sitemap = citySlugs.map((slug) => ({
    url: `${BASE}/ru/goroda/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // 140 local SEO pages
  const localPages: MetadataRoute.Sitemap = [];
  for (const citySlug of citySlugs) {
    for (const serviceSlug of serviceSlugs) {
      localPages.push({
        url: `${BASE}/ru/${citySlug}/${serviceSlug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.75,
      });
    }
  }

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE}/ru/blog/${slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const casePages: MetadataRoute.Sitemap = cases.map((c) => ({
    url: `${BASE}/ru/kejsy/${c.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...cityPages,
    ...localPages,
    ...blogPages,
    ...casePages,
  ];
}
