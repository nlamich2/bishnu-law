// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://bishnu-law.vercel.app";
  const lastMod = new Date();

  // Single-page site + key anchors as separate logical sections for discoverability (no # in URLs)
  return [
    { url: `${base}/`, lastModified: lastMod, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/about`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/practice-areas`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/faqs`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
  ];
}
