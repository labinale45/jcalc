import { CashFlowCalculator } from "./CashFlowCalculator";
import { FAQSection } from "@/components/FAQSection";
import { FormulaExplanation } from "@/components/FormulaExplanation";
import { InternalLinks } from "@/components/InternalLinks";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cash Flow Calculator | Net Cash Flow",
  description:
    "Calculate net cash flow from inflows and outflows. Free business calculator for cash flow analysis.",
  path: "/cash-flow-calculator",
  keywords: ["cash flow calculator", "net cash flow", "business cash flow"],
});

const faqItems = [
  {
    question: "What is net cash flow?",
    answer:
      "Net cash flow = Cash inflows minus cash outflows. Positive means more cash coming in; negative means more going out.",
  },
  {
    question: "Why is cash flow important?",
    answer:
      "A business can be profitable on paper but run out of cash if outflows exceed inflows. Cash flow tells you if you can pay bills.",
  },
];

export default function CashFlowPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-8">
      <header className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-slate-800 ">
          Cash Flow Calculator
        </h1>
        <p className="text-lg text-slate-600 ">
          Calculate net cash flow from your inflows and outflows. Instant results for business cash analysis.
        </p>
      </header>

      <CashFlowCalculator />

      <div className="mt-8 space-y-8">
        <FormulaExplanation
          title="Formula"
          formula="Net Cash Flow = Cash Inflows - Cash Outflows"
          description="Simple sum of money in minus money out. Period can be monthly, quarterly, or yearly."
          example="Inflows $50,000, Outflows $45,000: Net = $5,000"
        />
        <FAQSection items={faqItems} />
        <InternalLinks currentTool="cash-flow-calculator" />
      </div>
    </article>
  );
}
