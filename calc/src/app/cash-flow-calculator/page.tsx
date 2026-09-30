import { CashFlowCalculator } from "./CashFlowCalculator";
import { FAQSection } from "@/components/FAQSection";
import { FormulaExplanation } from "@/components/FormulaExplanation";
import { InternalLinks } from "@/components/InternalLinks";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Net Cash Flow Calculator | Cash Inflow & Outflow",
  description:
    "Use this free net cash flow calculator to subtract business cash outflows from inflows, check your cash flow margin, and quickly see whether cash increased or decreased.",
  path: "/cash-flow-calculator",
  keywords: ["net cash flow calculator", "cash flow calculator", "business cash flow calculator", "cash inflow and outflow calculator"],
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
          Net Cash Flow Calculator
        </h1>
        <p className="text-lg text-slate-600 ">
          Add up money coming in and going out to calculate net cash flow and cash flow margin for a business or reporting period.
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
