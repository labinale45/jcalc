import type { Metadata } from "next";
import { GrowthCalculator } from "./GrowthCalculator";
import { FAQSection } from "@/components/FAQSection";
import { FormulaExplanation } from "@/components/FormulaExplanation";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Growth Calculator | CAGR & Growth Rate",
  description:
    "Calculate growth rate and CAGR. Free calculator for revenue, user, or metric growth analysis.",
};

const faqItems = [
  {
    question: "What is CAGR?",
    answer:
      "Compound Annual Growth Rate — the average yearly growth rate over a period. Smooths out volatility into a single rate.",
  },
  {
    question: "When to use growth rate vs CAGR?",
    answer:
      "Use simple growth rate for one period. Use CAGR for multi-year comparison — it accounts for compounding.",
  },
];

export default function GrowthPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-8">
      <header className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-slate-800 ">
          Growth Calculator
        </h1>
        <p className="text-lg text-slate-600 ">
          Calculate growth rate and CAGR. Compare old vs new value over time for revenue, users, or any metric.
        </p>
      </header>

      <GrowthCalculator />

      <div className="mt-8 space-y-8">
        <FormulaExplanation
          title="Formulas"
          formula="Growth Rate = ((New - Old) / Old) × 100\nCAGR = ((New/Old)^(1/Years) - 1) × 100"
          description="Growth rate is simple change. CAGR is compounded average annual growth."
          example="Old $100k, New $150k, 3 years: Growth=50%, CAGR≈14.5%"
        />
        <FAQSection items={faqItems} />
        <InternalLinks currentTool="growth-calculator" />
      </div>
    </article>
  );
}
