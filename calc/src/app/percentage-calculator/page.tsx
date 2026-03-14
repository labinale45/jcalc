import type { Metadata } from "next";
import { PercentageCalculator } from "./PercentageCalculator";
import { AdBlock } from "@/components/AdBlock";
import { FAQSection } from "@/components/FAQSection";
import { FormulaExplanation } from "@/components/FormulaExplanation";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Free Percentage Calculator | X% of Y, Percent Change",
  description:
    "Calculate percentages instantly: X% of Y, Y is what percent of X, and percentage increase/decrease. Free online percentage calculator. No signup required.",
  openGraph: {
    title: "Free Percentage Calculator | X% of Y, Percent Change | JCalc",
    description:
      "Calculate percentages for any scenario. X% of Y, Y is what % of X, percentage change. Free tool.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "How do I calculate X% of Y?",
    answer:
      "Multiply Y by (X/100). For example, 20% of 150 = (20/100) × 150 = 30. Use our 'X% of Y' mode: enter 20 and 150 to get 30.",
  },
  {
    question: "How do I find what percent Y is of X?",
    answer:
      "Divide Y by X and multiply by 100. For example, 25 is what percent of 200? (25/200) × 100 = 12.5%. Use our 'Y is what % of X' mode: enter 25 and 200.",
  },
  {
    question: "How do I calculate percentage increase or decrease?",
    answer:
      "Use the formula: ((New Value - Old Value) / Old Value) × 100. A positive result is an increase; negative is a decrease. Example: price goes from $80 to $100. ((100-80)/80) × 100 = 25% increase.",
  },
  {
    question: "Can I use this for discounts and tax?",
    answer:
      "Yes! For a 15% discount on $80: use X% of Y with 15 and 80 = $12 off. For 'what percent' scenarios (e.g., tax rate), use Y is what % of X. Our calculator handles all common percentage cases.",
  },
];

export default function PercentageCalculatorPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-8">
      <header className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-slate-800">
          Percentage Calculator
        </h1>
        <p className="text-lg text-slate-600">
          Calculate percentages for any scenario: find X% of Y, what percent Y
          is of X, or percentage change. Free, instant results—no signup required.
        </p>
      </header>

      <PercentageCalculator />

      <AdBlock slot="below-result" format="horizontal" className="my-8 min-h-[90px]" />

      <div className="space-y-8">
        <FormulaExplanation
          title="Percentage Formulas"
          formula={`X% of Y = (X ÷ 100) × Y\nY is what % of X = (Y ÷ X) × 100\n% Change = ((New - Old) ÷ Old) × 100`}
          description="Percent means 'per hundred.' To find X% of Y, convert X to a decimal (X/100) and multiply by Y. To find what percent Y is of X, divide Y by X and multiply by 100. For percentage change, compare the difference to the original value."
          example="20% of 250 = 50. 40 is 20% of 200. A price change from $50 to $60 is a 20% increase."
        />

        <AdBlock slot="between-content" format="rectangle" className="my-8 min-h-[250px]" />

        <section>
          <h2 className="mb-4 text-xl font-semibold text-slate-800">
            How to Use the Percentage Calculator
          </h2>
          <p className="mb-4 text-slate-600">
            Select the calculation type: &quot;X% of Y&quot; finds a percentage of a number;
            &quot;Y is what % of X&quot; finds what percentage one number is of another;
            &quot;Percentage change&quot; calculates increase or decrease from old to new value.
            Enter your numbers and see results immediately.
          </p>
          <h3 className="mb-2 text-lg font-medium text-slate-800">
            Example: Common Percentage Scenarios
          </h3>
          <p className="text-slate-600">
            Tip calculation: 18% of $45 = $8.10. Grade: 42 correct out of 50 =
            84%. Price increase: $100 to $120 = 20% increase. Discount: 25% off
            $80 = $20 off, final price $60. Use our percentage calculator above
            for your own numbers. For investment returns, try our{" "}
            <a
              href="/roi-calculator"
              className="text-[#66A3FF] underline hover:text-[#5592e6]"
            >
              ROI calculator
            </a>
            .
          </p>
        </section>

        <FAQSection items={faqItems} />

        <InternalLinks currentTool="percentage-calculator" />

        <p className="text-slate-600">
          Measuring investment returns? Use our{" "}
          <a
            href="/roi-calculator"
            className="text-[#66A3FF] underline hover:text-[#5592e6]"
          >
            ROI calculator
          </a>
          . Planning a loan? Try our{" "}
          <a
            href="/loan-calculator"
            className="text-[#66A3FF] underline hover:text-[#5592e6]"
          >
            loan calculator
          </a>
          .
        </p>
      </div>

      <AdBlock slot="footer" format="horizontal" className="mt-12 min-h-[90px]" />
    </article>
  );
}
