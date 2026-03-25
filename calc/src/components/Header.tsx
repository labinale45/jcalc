"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AdBlock } from "./AdBlock";
import { MobileNavDrawer } from "./MobileNavDrawer";
import Image from "next/image";
import { NAV_GROUPS, SITE_LINKS, MOBILE_QUICK_LINKS } from "@/nav/navConfig";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

const focusBarLink =
  "focus-visible:outline-none focus-visible:bg-white/20 focus-visible:font-semibold focus-visible:text-[#A2CB8B] focus-visible:underline focus-visible:decoration-2 focus-visible:underline-offset-4";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  useEffect(() => {
    setOpenMenuId(null);
  }, [pathname]);

  const linkClass = `rounded-lg px-3 py-2 text-sm text-white hover:bg-white/15 ${focusBarLink}`;
  const activeClass = "bg-white/20 font-semibold text-[#A2CB8B] underline decoration-2 underline-offset-4";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white pt-[env(safe-area-inset-top)]">
      <div className="bg-blue-500">
        <div className="mx-auto flex max-w-full items-center justify-between gap-3 px-3 py-3 sm:px-4">
          <Link
            href="/"
            className={`flex min-w-0 shrink items-center gap-2 rounded-lg py-1 pr-2 ${focusBarLink}`}
            aria-label="JCalc - Home"
          >
            <Image
              src="/Jcalc.png"
              alt=""
              width={120}
              height={40}
              className="h-9 w-auto sm:h-10"
            />
            <span className="truncate text-lg font-bold text-white sm:text-xl">JCalc</span>
          </Link>

          {/* Desktop: grouped navigation */}
          <nav
            className="hidden min-w-0 flex-1 items-center justify-end gap-1 lg:flex xl:gap-2"
            aria-label="Main navigation"
          >
            <Link
              href="/"
              aria-current={pathname === "/" ? "page" : undefined}
              className={`${linkClass} shrink-0 ${pathname === "/" ? activeClass : ""}`}
            >
              Home
            </Link>

            {NAV_GROUPS.map((group) => {
              const groupHasActive = group.links.some((l) => isActive(pathname, l.href));
              const menuOpen = openMenuId === group.id;
              return (
              <details
                key={group.id}
                className="group relative"
                open={menuOpen}
              >
                <summary
                  className={`${linkClass} list-none [&::-webkit-details-marker]:hidden cursor-pointer ${
                    groupHasActive ? activeClass : ""
                  }`}
                  aria-expanded={menuOpen}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenMenuId((prev) => (prev === group.id ? null : group.id));
                  }}
                >
                  <span className="hidden xl:inline">{group.title}</span>
                  <span className="xl:hidden" title={group.title}>
                    {group.id === "personal"
                      ? "Personal"
                      : group.id === "business"
                        ? "Business"
                        : "Math"}
                  </span>
                  <span className="ml-0.5 text-xs opacity-80" aria-hidden>
                    ▾
                  </span>
                </summary>
                <ul
                  className="absolute right-0 top-full z-60 mt-1 min-w-56 max-w-[min(90vw,18rem)] rounded-lg border border-slate-200 bg-white py-1 shadow-lg"
                  role="menu"
                >
                  {group.links.map((link) => {
                    const active = isActive(pathname, link.href);
                    return (
                      <li key={`${group.id}-${link.href}-${link.label}`} role="none">
                        <Link
                          href={link.href}
                          role="menuitem"
                          aria-current={active ? "page" : undefined}
                          className={`block px-3 py-2 text-sm focus-visible:outline-none focus-visible:bg-[#66A3FF]/15 focus-visible:underline focus-visible:decoration-2 focus-visible:underline-offset-2 ${
                            active
                              ? "bg-[#66A3FF]/10 font-medium text-[#5592e6] underline decoration-2 underline-offset-2"
                              : "text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          <span className="block">{link.label}</span>
                          {link.description && (
                            <span className="mt-0.5 block text-xs font-normal text-slate-500">
                              {link.description}
                            </span>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </details>
            );
            })}

            {SITE_LINKS.map((link) => {
              const siteActive = isActive(pathname, link.href);
              return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={siteActive ? "page" : undefined}
                className={`${linkClass} shrink-0 ${siteActive ? activeClass : ""}`}
              >
                {link.label}
              </Link>
            );
            })}
          </nav>

          {/* Mobile: hamburger */}
          <button
            type="button"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-white hover:bg-white/15 focus-visible:outline-none focus-visible:bg-white/20 lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label="Open menu"
          >
            <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Tablet: horizontal scroll strip — quick access without hamburger */}
        <div className="border-t border-white/10 px-2 pb-2 pt-1 lg:hidden">
          <p className="mb-1 px-1 text-[10px] font-medium uppercase tracking-wide text-white/70 sm:text-xs">
            Quick scroll — swipe
          </p>
          <div
            className="-mx-1 flex gap-1 overflow-x-auto overscroll-x-contain px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {MOBILE_QUICK_LINKS.map(({ href, label }) => {
              const pillActive = href === "/" ? pathname === "/" : isActive(pathname, href);
              return (
              <Link
                key={href}
                href={href}
                aria-current={pillActive ? "page" : undefined}
                className={`shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium focus-visible:outline-none focus-visible:bg-white/30 focus-visible:underline focus-visible:decoration-2 focus-visible:underline-offset-2 sm:text-sm ${
                  pillActive
                    ? "bg-white/25 font-semibold text-white"
                    : "bg-white/10 text-white/95 hover:bg-white/20"
                }`}
              >
                {label}
              </Link>
            );
            })}
          </div>
        </div>
      </div>

      <MobileNavDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} pathname={pathname} />

      <div className="mx-auto max-w-4xl px-4 pb-2">
        <AdBlock slot="header" format="horizontal" className="min-h-[90px]" />
      </div>
    </header>
  );
}
