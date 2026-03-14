import type { Metadata } from "next";
import { ROICalculator } from "./ROICalculator";
import { AdBlock } from "@/components/AdBlock";
import { FAQSection } from "@/components/FAQSection";
import { FormulaExplanation } from "@/components/FormulaExplanation";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Free ROI Calculator | Return on Investment",
  description:
    "Calculate return on investment (ROI) instantly. Free ROI calculator for stocks, real estate, and business. Measure profit or loss as a percentage. No signup required.",
  openGraph: {
    title: "Free ROI Calculator | Return on Investment | JCalc",
    description:
      "Calculate ROI for any investment. Free tool for stocks, real estate, and business. Instant results.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "What is ROI and how is it calculated?",
    answer:
      "ROI (Return on Investment) measures the profitability of an investment. The formula is: ROI = ((Final Value - Initial Investment) / Initial Investment) × 100. A positive ROI means profit; negative ROI means loss. For example, if you invest $1,000 and get $1,200 back, your ROI is 20%.",
  },
  {
    question: "Is ROI the same as profit margin?",
    answer:
      "No. ROI expresses return as a percentage of your initial investment. Profit margin typically refers to (Revenue - Cost) / Revenue × 100 for a business. Both are useful metrics but answer different questions. ROI tells you how much your investment grew.",
  },
  {
    question: "Can I use this for stock investments?",
    answer:
      "Yes! Enter your purchase price (initial investment) and current or sold price (final value) to calculate your ROI. This works for stocks, ETFs, crypto, or any investment where you know the buy and sell amounts.",
  },
  {
    question: "What is a good ROI?",
    answer:
      "It depends on the asset class and time period. Stock market historical average is around 7-10% annually. Real estate can vary. Compare your ROI to benchmarks for your asset type. Our calculator helps you compute the number—you decide if it meets your goals.",
  },
];

export default function ROICalculatorPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-8">
      <header className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-slate-800">
          ROI Calculator
        </h1>
        <p className="text-lg text-slate-600">
          Calculate your return on investment in seconds. Enter your initial
          investment and final value to see your ROI as a percentage. Free,
          no signup required.
        </p>
      </header>

      <ROICalculator />

      <AdBlock slot="below-result" format="horizontal" className="my-8 min-h-[90px]" />

      <div className="space-y-8">
        <FormulaExplanation
          title="How ROI is Calculated"
          formula="ROI = ((Final Value - Initial Investment) / Initial Investment) × 100"
          description="Subtract your initial investment from the final value to get the absolute return. Divide by the initial investment and multiply by 100 to express it as a percentage. Positive ROI = profit; negative ROI = loss."
          example="You invest $5,000 and your investment grows to $6,500. ROI = (($6,500 - $5,000) / $5,000) × 100 = 30%. Your absolute return is $1,500."
        />

        <AdBlock slot="between-content" format="rectangle" className="my-8 min-h-[250px]" />

        <section>
          <h2 className="mb-4 text-xl font-semibold text-slate-800">
            How to Use the ROI Calculator
          </h2>
          <p className="mb-4 text-slate-600">
            Enter your initial investment (what you paid or invested) and the final
            value (current or sale value). The calculator returns your ROI as a
            percentage and the absolute dollar return. Use it for stocks, real
            estate, business projects, or any investment where you know the in and
            out amounts.
          </p>
          <h3 className="mb-2 text-lg font-medium text-slate-800">
            Example: Stock Investment
          </h3>
          <p className="text-slate-600">
            You bought 100 shares at $50 each ($5,000 total). The stock is now
            $65 per share ($6,500 total). Your ROI is 30%, meaning you gained
            $1,500. Use our ROI calculator to plug in your own numbers. For loan
            comparisons, try our{" "}
            <a
              href="/loan-calculator"
              className="text-[#66A3FF] underline hover:text-[#5592e6]"
            >
              loan calculator
            </a>
            .
          </p>
        </section>

        <FAQSection items={faqItems} />

        <InternalLinks currentTool="roi-calculator" />

        <p className="text-slate-600">
          Planning a loan? Use our{" "}
          <a
            href="/loan-calculator"
            className="text-[#66A3FF] underline hover:text-[#5592e6]"
          >
            loan calculator
          </a>{" "}
          to estimate monthly payments. For percentage calculations, use our{" "}
          <a
            href="/percentage-calculator"
            className="text-[#66A3FF] underline hover:text-[#5592e6]"
          >
            percentage calculator
          </a>
          .
        </p>
      </div>

      <AdBlock slot="footer" format="horizontal" className="mt-12 min-h-[90px]" />
    </article>
  );
}
