/** Canonical site origin (no trailing slash). Override with NEXT_PUBLIC_SITE_URL in production. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jcalc.rabinale.com.np"
).replace(/\/$/, "");

export const SITE_NAME = "JCalc";

/** Default Open Graph / Twitter image under `public/` */
export const DEFAULT_OG_IMAGE_PATH = "/Jcalc.png";

export function absoluteUrl(path: string): string {
  const p = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p === "" ? "/" : p}`;
}
