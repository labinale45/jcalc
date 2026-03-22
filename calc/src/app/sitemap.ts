import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://jcalc.rabinale.com.np";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, changeFrequency: "weekly" as const, priority: 1 },
    { url: `${BASE_URL}/loan-calculator`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/roi-calculator`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/percentage-calculator`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/profit-pricing-calculator`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/break-even-calculator`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/cash-flow-calculator`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/growth-calculator`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/unit-economics-calculator`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE_URL}/privacy-policy`, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${BASE_URL}/terms`, changeFrequency: "monthly" as const, priority: 0.5 },
  ];
}
