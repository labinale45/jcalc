"use client";

import Link from "next/link";
import { useEffect, useCallback } from "react";
import { NAV_GROUPS, SITE_LINKS } from "@/nav/navConfig";

interface MobileNavDrawerProps {
  open: boolean;
  onClose: () => void;
  pathname: string;
}

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function MobileNavDrawer({ open, onClose, pathname }: MobileNavDrawerProps) {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, handleEscape]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-100 lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
      <button
        type="button"
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        aria-label="Close menu"
        onClick={onClose}
      />
      <div
        id="mobile-nav-drawer"
        className="absolute inset-y-0 right-0 flex w-[min(100vw,20rem)] flex-col bg-white pb-[env(safe-area-inset-bottom)] shadow-xl"
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
          <span className="font-semibold text-slate-800">Menu</span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100"
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto overscroll-contain px-3 py-4" aria-label="Mobile navigation">
          <Link
            href="/"
            onClick={onClose}
            aria-current={pathname === "/" ? "page" : undefined}
            className={`mb-4 block rounded-lg px-3 py-2.5 text-base font-medium focus-visible:outline-none focus-visible:bg-[#66A3FF]/10 focus-visible:underline focus-visible:decoration-2 focus-visible:underline-offset-2 ${
              pathname === "/"
                ? "bg-[#66A3FF]/15 font-semibold text-[#5592e6] underline decoration-2 underline-offset-2"
                : "text-slate-800 hover:bg-slate-50"
            }`}
          >
            Home
          </Link>

          {NAV_GROUPS.map((group) => {
            const groupHasActive = group.links.some((l) => isActive(pathname, l.href));
            return (
            <div key={group.id} className="mb-5">
              <p
                className={`mb-2 px-3 text-xs font-semibold uppercase tracking-wide ${
                  groupHasActive ? "text-[#5592e6]" : "text-slate-500"
                }`}
              >
                {group.title}
              </p>
              <ul className="space-y-0.5">
                {group.links.map((link) => {
                  const active = isActive(pathname, link.href);
                  return (
                    <li key={`${group.id}-${link.href}-${link.label}`}>
                      <Link
                        href={link.href}
                        onClick={onClose}
                        aria-current={active ? "page" : undefined}
                        className={`block rounded-lg px-3 py-2.5 text-sm focus-visible:outline-none focus-visible:bg-[#66A3FF]/10 focus-visible:underline focus-visible:decoration-2 focus-visible:underline-offset-2 ${
                          active
                            ? "bg-[#66A3FF]/15 font-semibold text-[#5592e6] underline decoration-2 underline-offset-2"
                            : "text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <span className="block">{link.label}</span>
                        {link.description && (
                          <span className="mt-0.5 block text-xs font-normal text-slate-500">{link.description}</span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            );
          })}

          <div className="mb-2 px-3 pt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Site
          </div>
          <ul className="space-y-0.5">
            {SITE_LINKS.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-lg px-3 py-2.5 text-sm focus-visible:outline-none focus-visible:bg-[#66A3FF]/10 focus-visible:underline focus-visible:decoration-2 focus-visible:underline-offset-2 ${
                      active
                        ? "bg-[#66A3FF]/15 font-semibold text-[#5592e6] underline decoration-2 underline-offset-2"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
