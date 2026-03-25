import Link from "next/link";
import { CalculatorCard } from "@/components/CalculatorCard";
import { AdBlock } from "@/components/AdBlock";
import Image from "next/image";
import { homeMetadata } from "@/lib/seo";

export const metadata = homeMetadata();

export default function HomePage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-8">
      <header className="mb-12 text-center">
        <div className="flex justify-center items-center gap-2 mb-3">   
          <Image
            src="/Jcalc.png"
            alt="JCalc"
            width={120}
            height={80}
            className="h-16 w-auto"
          />
          <h1 className="mb-3 text-4xl font-bold text-slate-800 text-center">
          JCalc
       </h1>
       </div>
        
        <p className="text-xl text-slate-600">
          Smart Online Calculators for Everyday Math and Finance
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-slate-600">
          Free, fast, and easy-to-use calculators for loans, investments,
          percentages, and more. No signup, no downloads—just results.
        </p>
      </header>

      <AdBlock slot="header" format="horizontal" className="mb-10 min-h-[90px]" />

      <section aria-labelledby="popular-calculators">
        <h2 id="popular-calculators" className="mb-6 text-2xl font-semibold text-slate-800 ">
          Popular Calculators
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <CalculatorCard
            title="Loan Calculator"
            description="Calculate monthly payments, total interest, and amortization for any fixed-rate loan."
            href="/loan-calculator"
            icon="💰"
          />
          <CalculatorCard
            title="ROI Calculator"
            description="Measure return on investment. Enter initial and final value for instant ROI percentage."
            href="/roi-calculator"
            icon="📈"
          />
          <CalculatorCard
            title="Percentage Calculator"
            description="X% of Y, Y is what % of X, and percentage change. Handles discounts, tips, and more."
            href="/percentage-calculator"
            icon="%"
          />
        </div>
      </section>

      <AdBlock slot="below-result" format="rectangle" className="my-10 min-h-[250px]" />

      <section className="space-y-8">
        <h2 id="financial-calculators" className="text-2xl font-semibold text-slate-800 ">
          Financial Calculators
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <CalculatorCard
            title="Loan Calculator"
            description="Estimate monthly payments for mortgages, auto loans, and personal loans."
            href="/loan-calculator"
            icon="💰"
          />
          <CalculatorCard
            title="ROI Calculator"
            description="Calculate return on investment for stocks, real estate, and business ventures."
            href="/roi-calculator"
            icon="📈"
          />
          <CalculatorCard
            title="Percentage Calculator"
            description="Solve percentage problems: X% of Y, what percent, and percentage change."
            href="/percentage-calculator"
            icon="%"
          />
        </div>

        <h2 id="business-calculators" className="text-2xl font-semibold text-slate-800 ">
          Business Calculators
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <CalculatorCard
            title="Profit & Pricing"
            description="Calculate profit, margin, markup, and optimal pricing."
            href="/profit-pricing-calculator"
            icon="📊"
          />
          <CalculatorCard
            title="Break-even"
            description="Find how many units to sell to cover costs."
            href="/break-even-calculator"
            icon="⚖️"
          />
          <CalculatorCard
            title="Cash Flow"
            description="Net cash flow from inflows and outflows."
            href="/cash-flow-calculator"
            icon="💵"
          />
          <CalculatorCard
            title="Growth"
            description="CAGR and growth rate for any metric."
            href="/growth-calculator"
            icon="📈"
          />
          <CalculatorCard
            title="Unit Economics"
            description="CAC, LTV, and LTV:CAC ratio."
            href="/unit-economics-calculator"
            icon="🎯"
          />
        </div>

        <AdBlock slot="between-content" format="horizontal" className="min-h-[90px]" />

        <section>
          <h2 id="about-online-calculators" className="mb-4 text-2xl font-semibold text-slate-800 ">
            About Online Calculators
          </h2>
          <p className="text-slate-600 ">
            Online calculators provide instant, accurate results for everyday
            math and finance tasks. Whether you&apos;re planning a loan, evaluating
            an investment, or working with percentages, JCalc delivers reliable
            answers without signup or installation. Our tools run entirely in
            your browser—your data never leaves your device.
          </p>
          <p className="mt-4 text-slate-600">
            JCalc is designed for clarity and speed. Each calculator includes
            formula explanations, example calculations, and FAQs to help you
            understand the results. We offer a growing suite of calculators for
            finance, math, and everyday life. Bookmark this page for quick
            access to all tools.
          </p>
        </section>

        <section>
          <h2 id="recently-added" className="mb-4 text-2xl font-semibold text-slate-800 ">
            All Tools
          </h2>
          <ul className="space-y-2 text-slate-600 ">
            <li><Link href="/loan-calculator" className="text-[#66A3FF] underline hover:text-[#5592e6]">Loan Calculator</Link> — Monthly payments</li>
            <li><Link href="/roi-calculator" className="text-[#66A3FF] underline hover:text-[#5592e6]">ROI Calculator</Link> — Investment returns</li>
            <li><Link href="/percentage-calculator" className="text-[#66A3FF] underline hover:text-[#5592e6]">Percentage Calculator</Link> — X% of Y, percent change</li>
            <li><Link href="/profit-pricing-calculator" className="text-[#66A3FF] underline hover:text-[#5592e6]">Profit & Pricing</Link> — Margin and markup</li>
            <li><Link href="/break-even-calculator" className="text-[#66A3FF] underline hover:text-[#5592e6]">Break-even</Link> — Break-even analysis</li>
            <li><Link href="/cash-flow-calculator" className="text-[#66A3FF] underline hover:text-[#5592e6]">Cash Flow</Link> — Net cash flow</li>
            <li><Link href="/growth-calculator" className="text-[#66A3FF] underline hover:text-[#5592e6]">Growth</Link> — CAGR and growth rate</li>
            <li><Link href="/unit-economics-calculator" className="text-[#66A3FF] underline hover:text-[#5592e6]">Unit Economics</Link> — CAC and LTV</li>
          </ul>
        </section>
      </section>

      <AdBlock slot="footer" format="horizontal" className="mt-12 min-h-[90px]" />
    </article>
  );
}
