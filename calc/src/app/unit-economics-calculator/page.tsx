import { UnitEconomicsCalculator } from "./UnitEconomicsCalculator";
import { FAQSection } from "@/components/FAQSection";
import { FormulaExplanation } from "@/components/FormulaExplanation";
import { InternalLinks } from "@/components/InternalLinks";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Unit Economics Calculator | CAC & LTV",
  description:
    "Calculate Customer Acquisition Cost (CAC), Lifetime Value (LTV), and LTV:CAC ratio. Free business calculator.",
  path: "/unit-economics-calculator",
  keywords: ["CAC calculator", "LTV calculator", "unit economics", "LTV CAC ratio"],
});

const faqItems = [
  {
    question: "What is a good LTV:CAC ratio?",
    answer:
      "Generally 3:1 or higher is healthy. Below 1:1 means you spend more to acquire a customer than they're worth.",
  },
  {
    question: "What is payback period?",
    answer:
      "Months to recover CAC from gross margin per customer. Under 12 months is typically good for SaaS.",
  },
];

export default function UnitEconomicsPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-8">
      <header className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-slate-800 ">
          Unit Economics Calculator
        </h1>
        <p className="text-lg text-slate-600 ">
          Calculate CAC, LTV, LTV:CAC ratio, and payback period. Essential metrics for SaaS and subscription businesses.
        </p>
      </header>

      <UnitEconomicsCalculator />

      <div className="mt-8 space-y-8">
        <FormulaExplanation
          title="Formulas"
          formula="CAC = Marketing Spend ÷ New Customers\nLTV = (ARPU × Margin %) ÷ Monthly Churn %\nPayback = CAC ÷ (ARPU × Margin %)"
          description="CAC is cost per new customer. LTV estimates gross profit per customer over their lifetime (using monthly ARPU and churn). Used by SaaS and subscription businesses."
          example="Spend $10k, 100 customers: CAC=$100. ARPU $50/mo, 80% margin, 5% monthly churn: LTV=$800"
        />
        <FAQSection items={faqItems} />
        <InternalLinks currentTool="unit-economics-calculator" />
      </div>
    </article>
  );
}
