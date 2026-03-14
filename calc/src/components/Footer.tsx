import Link from "next/link";
import { AdBlock } from "./AdBlock";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <AdBlock slot="footer" format="horizontal" className="mb-8 min-h-[90px]" />
        <nav aria-label="Legal and site links" className="mb-6">
          <ul className="flex flex-wrap gap-4 text-sm">
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
          </ul>
        </nav>
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} JCalc. Smart Online Calculators for Everyday Math and Finance.
        </p>
      </div>
    </footer>
  );
}
