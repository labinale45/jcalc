import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE_PATH, SITE_NAME, SITE_URL, absoluteUrl } from "./site";

const defaultOgImage = absoluteUrl(DEFAULT_OG_IMAGE_PATH);

export function homeMetadata(): Metadata {
  const title = "JCalc | Smart Online Calculators for Everyday Math and Finance";
  const description =
    "Free online calculators for loans, ROI, percentages, business metrics, and more. Smart tools for everyday math and finance—fast, accurate, no signup required.";
  return {
    title: { absolute: title },
    description,
    keywords: [
      "online calculator",
      "loan calculator",
      "ROI calculator",
      "percentage calculator",
      "break-even calculator",
      "cash flow calculator",
      "free calculator",
    ],
    alternates: { canonical: SITE_URL },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: SITE_URL,
      siteName: SITE_NAME,
      title,
      description,
      images: [{ url: defaultOgImage, alt: `${SITE_NAME} — online calculators` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage],
    },
  };
}

export function pageMetadata(input: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const path = input.path === "/" ? "" : input.path.startsWith("/") ? input.path : `/${input.path}`;
  const canonical = absoluteUrl(path === "" ? "/" : path);
  const ogTitle = `${input.title} | ${SITE_NAME}`;

  return {
    title: input.title,
    description: input.description,
    keywords: input.keywords,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical,
      siteName: SITE_NAME,
      title: ogTitle,
      description: input.description,
      images: [{ url: defaultOgImage, alt: `${SITE_NAME} — ${input.title}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: input.description,
      images: [defaultOgImage],
    },
  };
}
