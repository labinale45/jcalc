"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "jcalc-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-200 border-t border-slate-200 bg-white p-4 pb-[max(1rem,env(safe-area-inset-bottom))] shadow-[0_-4px_24px_rgba(0,0,0,0.08)]"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p id="cookie-consent-title" className="text-sm text-slate-700">
          We use cookies and similar technologies for analytics and, where enabled, advertising. You can
          change your browser settings at any time. See our{" "}
          <Link href="/privacy-policy" className="text-[#66A3FF] underline hover:text-[#5592e6]">
            Privacy Policy
          </Link>{" "}
          for details.
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="shrink-0 rounded-lg bg-[#66A3FF] px-4 py-2 text-sm font-medium text-white hover:bg-[#5592e6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#66A3FF]"
        >
          OK
        </button>
      </div>
    </div>
  );
}
