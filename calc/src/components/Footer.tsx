import Link from "next/link";
import { AdBlock } from "./AdBlock";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <AdBlock slot="footer" format="horizontal" className="mb-8 min-h-[90px]" />
        <nav aria-label="Legal and site links" className="mb-6">
          <ul className="flex flex-wrap gap-x-5 gap-y-3 text-sm">
            <li>
              <Link href="/" className="text-slate-600 hover:text-[#66A3FF]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-slate-600 hover:text-[#66A3FF]">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-slate-600 hover:text-[#66A3FF]">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="text-slate-600 hover:text-[#66A3FF]">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-slate-600 hover:text-[#66A3FF]">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/loan-calculator" className="text-slate-600 hover:text-[#66A3FF]">
                Loan Calculator
              </Link>
            </li>
            <li>
              <Link href="/roi-calculator" className="text-slate-600 hover:text-[#66A3FF]">
                ROI Calculator
              </Link>
            </li>
            <li>
              <Link href="/percentage-calculator" className="text-slate-600 hover:text-[#66A3FF]">
                Percentage Calculator
              </Link>
            </li>
            <li>
              <Link href="/profit-pricing-calculator" className="text-slate-600 hover:text-[#66A3FF]">
                Profit & Pricing
              </Link>
            </li>
            <li>
              <Link href="/break-even-calculator" className="text-slate-600 hover:text-[#66A3FF]">
                Break-even
              </Link>
            </li>
            <li>
              <Link href="/cash-flow-calculator" className="text-slate-600 hover:text-[#66A3FF]">
                Net Cash Flow
              </Link>
            </li>
            <li>
              <Link href="/net-present-value-calculator" className="text-slate-600 hover:text-[#66A3FF]">
                Net Present Value (NPV)
              </Link>
            </li>
            <li>
              <Link href="/growth-calculator" className="text-slate-600 hover:text-[#66A3FF]">
                Growth
              </Link>
            </li>
            <li>
              <Link href="/unit-economics-calculator" className="text-slate-600 hover:text-[#66A3FF]">
                Unit Economics
              </Link>
            </li>
          </ul>
        </nav>
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} JCalc. Smart Online Calculators for Everyday Math and Finance.
        </p>
      </div>
    </footer>
  );
}
