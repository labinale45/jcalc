import { ProfitPricingCalculator } from "./ProfitPricingCalculator";
import { FAQSection } from "@/components/FAQSection";
import { FormulaExplanation } from "@/components/FormulaExplanation";
import { InternalLinks } from "@/components/InternalLinks";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Profit & Pricing Calculator | Margin & Markup",
  description:
    "Calculate profit, margin, markup, and optimal pricing. Free business calculator for cost, price, and revenue analysis.",
  path: "/profit-pricing-calculator",
  keywords: [
    "profit margin calculator",
    "markup calculator",
    "pricing calculator",
    "business calculator",
  ],
});

const faqItems = [
  {
    question: "What is the difference between margin and markup?",
    answer:
      "Margin is profit as a % of revenue (selling price). Markup is profit as a % of cost. A 50% margin means 50% of revenue is profit. A 50% markup means you add 50% to cost to get the price.",
  },
  {
    question: "What is a good profit margin?",
    answer:
      "It varies by industry. Retail often targets 2-5%, software 70-90%, services 10-30%. Compare to your industry benchmarks.",
  },
];

export default function ProfitPricingPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-8">
      <header className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-slate-800 ">
          Profit & Pricing Calculator
        </h1>
        <p className="text-lg text-slate-600 ">
          Calculate profit, margin, markup, and analyze your pricing. Enter cost and price to see results instantly.
        </p>
      </header>

      <ProfitPricingCalculator />

      <div className="mt-8 space-y-8">
        <FormulaExplanation
          title="Formulas"
          formula="Profit = Revenue - Cost\nMargin % = (Profit / Revenue) × 100\nMarkup % = (Profit / Cost) × 100"
          description="Revenue is price × quantity. Margin shows profit as % of sales. Markup shows how much you add to cost."
          example="Cost $50, Price $75: Profit=$25, Margin=33.3%, Markup=50%"
        />
        <FAQSection items={faqItems} />
        <InternalLinks currentTool="profit-pricing-calculator" />
      </div>
    </article>
  );
}
