import Link from "next/link";

interface InternalLinksProps {
  currentTool: string;
}

const CALCULATORS = [
  { name: "Loan Calculator", href: "/loan-calculator", description: "estimate monthly payments" },
  { name: "ROI Calculator", href: "/roi-calculator", description: "measure investment returns" },
  { name: "Percentage Calculator", href: "/percentage-calculator", description: "calculate percentages quickly" },
  { name: "Profit & Pricing", href: "/profit-pricing-calculator", description: "margin and markup" },
  { name: "Break-even", href: "/break-even-calculator", description: "find break-even point" },
  { name: "Cash Flow", href: "/cash-flow-calculator", description: "net cash flow" },
  { name: "Net Present Value (NPV)", href: "/net-present-value-calculator", description: "discount future project cash flows" },
  { name: "Growth", href: "/growth-calculator", description: "CAGR and growth rate" },
  { name: "Unit Economics", href: "/unit-economics-calculator", description: "CAC and LTV" },
];

export function InternalLinks({ currentTool }: InternalLinksProps) {
  return (
    <section
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      aria-labelledby="related-tools-heading"
    >
      <h2 id="related-tools-heading" className="mb-4 text-lg font-semibold text-slate-800">
        Related Calculators
      </h2>
      <ul className="space-y-2">
        {CALCULATORS.filter((c) => !currentTool.includes(c.href.replace("/", ""))).map((calc) => (
          <li key={calc.href}>
            <Link
              href={calc.href}
              className="font-medium text-blue-700 underline decoration-blue-200 underline-offset-4 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {calc.name}
            </Link>
            <span className="ml-1 text-slate-500">— {calc.description}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
