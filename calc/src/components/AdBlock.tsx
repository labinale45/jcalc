"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

interface AdBlockProps {
  slot?: string;
  format?: "horizontal" | "vertical" | "rectangle" | "auto";
  className?: string;
}

const CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT?.trim() ?? "";

function slotIdFor(name: string): string | undefined {
  const map: Record<string, string | undefined> = {
    header: process.env.NEXT_PUBLIC_ADSENSE_SLOT_HEADER,
    "below-result": process.env.NEXT_PUBLIC_ADSENSE_SLOT_BELOW_RESULT,
    "between-content": process.env.NEXT_PUBLIC_ADSENSE_SLOT_BETWEEN,
    footer: process.env.NEXT_PUBLIC_ADSENSE_SLOT_FOOTER,
  };
  return map[name] ?? process.env.NEXT_PUBLIC_ADSENSE_SLOT_DEFAULT;
}

/**
 * Google AdSense unit. Set NEXT_PUBLIC_ADSENSE_CLIENT (ca-pub-…) and slot env vars.
 * Until then, renders a reserved region for layout stability (better CLS when ads go live).
 */
export function AdBlock({ slot = "header", className = "" }: AdBlockProps) {
  const insRef = useRef<HTMLModElement>(null);
  const slotId = slotIdFor(slot);

  useEffect(() => {
    if (!CLIENT || !slotId || !insRef.current) return;
    const el = insRef.current;
    if (el.dataset.adsbygooglePushed === "1") return;
    try {
      window.adsbygoogle = window.adsbygoogle ?? [];
      window.adsbygoogle.push({});
      el.dataset.adsbygooglePushed = "1";
    } catch {
      /* ignore */
    }
  }, [slotId]);

  // Until AdSense is configured (and a matching slot id exists), render nothing.
  // This prevents placeholder boxes from appearing on the live site.
  if (!CLIENT || !slotId) return null;

  return (
    <aside className={className} aria-label="Advertisement">
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={CLIENT}
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
}
