"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AdBlock } from "./AdBlock";
import Image from "next/image";
const navLinks = [
  { href: "/loan-calculator", label: "Loan" },
  { href: "/roi-calculator", label: "ROI" },
  { href: "/percentage-calculator", label: "Percentage" },
  { href: "/profit-pricing-calculator", label: "Profit" },
  { href: "/break-even-calculator", label: "Break-even" },
  { href: "/cash-flow-calculator", label: "Cash Flow" },
  { href: "/growth-calculator", label: "Growth" },
  { href: "/unit-economics-calculator", label: "Unit Econ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const linkStyles =
    "px-3 py-1.5 text-white hover:underline hover:decoration-[2px] hover:underline-offset-4";
  const activeStyles =
    "underline decoration-[2px] underline-offset-4 text-[#A2CB8B] decoration-[#A2CB8B]";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-full px-4 py-4 bg-blue-500">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="rounded px-2 py-1 flex items-center gap-2"
            aria-label="JCalc - Home"
          >
            <Image
              src="/Jcalc.png"
              alt=""
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-white">JCalc</span>
          </Link>
          <nav aria-label="Main navigation">
            <ul className="flex flex-wrap gap-4 sm:gap-6">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`${linkStyles} ${
                      isActive(href) ? activeStyles : ""
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="mx-auto max-w-4xl px-4 pb-2">
        <AdBlock slot="header" format="horizontal" className="min-h-[90px]" />
      </div>
    </header>
  );
}
