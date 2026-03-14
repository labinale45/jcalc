"use client";

/**
 * AdSense component - disabled until site has traffic and ad approval.
 * Uncomment the return block below and add your AdSense code when ready.
 */

interface AdBlockProps {
  slot?: string;
  format?: "horizontal" | "vertical" | "rectangle" | "auto";
  className?: string;
}

export function AdBlock({
  slot = "header",
  className = "",
}: AdBlockProps) {
  // Ads disabled until traffic & AdSense approval - return null for now
  return null;

  /* When ready for ads, comment the return above and uncomment below:
  return (
    <div
      className={`flex min-h-[90px] items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-100/50 ${className}`}
      aria-label="Advertisement"
    >
      <span className="text-xs text-slate-500">Ad space ({slot})</span>
    </div>
  );
  */
}
