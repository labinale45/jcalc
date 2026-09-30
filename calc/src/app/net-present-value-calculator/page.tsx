import { FAQSection } from "@/components/FAQSection";
import { FormulaExplanation } from "@/components/FormulaExplanation";
import { InternalLinks } from "@/components/InternalLinks";
import { NetPresentValueCalculator } from "./NetPresentValueCalculator";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Net Present Value (NPV) Cash Flow Calculator",
  description:
    "Use this free net present value cash flow calculator to discount future cash flows, compare them with an upfront investment, and see your project's NPV instantly.",
  path: "/net-present-value-calculator",
  keywords: [
    "net present value cash flow calculator",
    "net present value calculator",
    "NPV calculator",
    "discounted cash flow calculator",
    "project valuation calculator",
  ],
});

const faqItems = [
  {
    question: "What does net present value (NPV) tell me?",
    answer:
      "NPV estimates what a project's future cash flows are worth today after discounting them for the time value of money, then subtracts the initial investment. A positive NPV means the discounted inflows exceed the upfront cost at the discount rate you entered.",
  },
  {
    question: "How do I choose a discount rate?",
    answer:
      "Use a rate that reflects your required return or the project's cost of capital and risk. The appropriate rate depends on the project and your assumptions; compare scenarios when the rate is uncertain.",
  },
  {
    question: "Are cash flows entered at the beginning or end of each period?",
    answer:
      "This calculator treats the first forecast cash flow as arriving at the end of period 1, the next at the end of period 2, and so on. The initial investment happens today at period 0.",
  },
];

export default function NetPresentValuePage() {
  return (
    <article className="px-4 py-8">
      <header className="mb-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">Investment analysis</p>
        <h1 className="mb-3 font-bold text-slate-900">Net Present Value Cash Flow Calculator</h1>
        <p className="text-lg text-slate-600">
          Discount expected future cash flows to today&apos;s value and compare them with your initial investment. Enter one cash flow for each period to calculate project NPV instantly.
        </p>
      </header>

      <NetPresentValueCalculator />

      <div className="mt-10 space-y-10">
        <FormulaExplanation
          title="Net Present Value Formula"
          formula="NPV = sum(CF_t / (1 + r)^t) - Initial Investment"
          description="Each future cash flow is discounted by the required return for its period. The initial investment is subtracted because it is paid today and therefore is not discounted."
          example="Invest $10,000 today and receive $6,000 at the end of each of the next two years. At a 10% discount rate, NPV = $6,000/1.10 + $6,000/1.10^2 - $10,000 = about $413."
        />
        <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="mb-3 text-xl font-semibold text-slate-900">How to use this NPV calculator</h2>
          <p className="text-slate-600">
            Enter the cost paid today, your required annual return, and the expected cash flow for each future year or period. Separate cash flows with commas. Positive values represent money received and negative values represent additional costs. The result updates as you edit the inputs.
          </p>
        </section>
        <FAQSection items={faqItems} />
        <InternalLinks currentTool="net-present-value-calculator" />
      </div>
    </article>
  );
}
