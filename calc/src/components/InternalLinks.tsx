import Link from "next/link";

interface InternalLinksProps {
  currentTool: string;
}

const CALCULATORS = [
  { name: "Loan Calculator", href: "/loan-calculator", description: "estimate monthly payments" },
  { name: "ROI Calculator", href: "/roi-calculator", description: "measure investment returns" },
  { name: "Percentage Calculator", href: "/percentage-calculator", description: "calculate percentages quickly" },
];

export function InternalLinks({ currentTool }: InternalLinksProps) {
  return (
    <section
      className="rounded-lg border border-slate-200 bg-white p-6"
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
              className="text-[#66A3FF] underline underline-offset-2 hover:text-[#5592e6] focus:outline-none focus:ring-2 focus:ring-[#66A3FF]"
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
