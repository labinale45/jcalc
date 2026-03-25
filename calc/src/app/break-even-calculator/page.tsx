import { BreakEvenCalculator } from "./BreakEvenCalculator";
import { FAQSection } from "@/components/FAQSection";
import { FormulaExplanation } from "@/components/FormulaExplanation";
import { InternalLinks } from "@/components/InternalLinks";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Break-even Calculator | Find Your Break-even Point",
  description:
    "Calculate break-even point in units and revenue. Free business calculator for fixed costs, variable costs, and pricing.",
  path: "/break-even-calculator",
  keywords: ["break-even calculator", "break-even analysis", "contribution margin", "fixed costs"],
});

const faqItems = [
  {
    question: "What is break-even analysis?",
    answer:
      "Break-even is the point where total revenue equals total costs—no profit, no loss. It helps you know how many units to sell to cover fixed costs.",
  },
  {
    question: "When is contribution margin negative?",
    answer:
      "When variable cost per unit exceeds price. You cannot break even—each sale increases your loss. You must raise price or reduce variable costs.",
  },
];

export default function BreakEvenPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-8">
      <header className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-slate-800 ">
          Break-even Calculator
        </h1>
        <p className="text-lg text-slate-600 ">
          Find how many units you need to sell to cover your costs. Enter fixed costs, price, and variable cost per unit.
        </p>
      </header>

      <BreakEvenCalculator />

      <div className="mt-8 space-y-8">
        <FormulaExplanation
          title="Formula"
          formula="Break-even Units = Fixed Costs ÷ (Price - Variable Cost per Unit)"
          description="The denominator is contribution margin. You need enough contribution margin to cover fixed costs."
          example="Fixed $10,000, Price $50, Variable $30: Break-even = 10,000 ÷ 20 = 500 units"
        />
        <FAQSection items={faqItems} />
        <InternalLinks currentTool="break-even-calculator" />
      </div>
    </article>
  );
}
