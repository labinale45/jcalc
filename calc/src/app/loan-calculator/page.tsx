import type { Metadata } from "next";
import { LoanCalculator } from "@/app/loan-calculator/LoanCalculator";
import { AdBlock } from "@/components/AdBlock";
import { FAQSection } from "@/components/FAQSection";
import { FormulaExplanation } from "@/components/FormulaExplanation";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Free Loan Calculator | Monthly Payment & Amortization",
  description:
    "Calculate monthly loan payments, total interest, and amortization schedule. Free online loan calculator for mortgages, auto loans, and personal loans. No signup required.",
  openGraph: {
    title: "Free Loan Calculator | Monthly Payment & Amortization | JCalc",
    description:
      "Calculate monthly loan payments, total interest, and amortization. Free tool for mortgages, auto loans, and personal loans.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "How is the monthly loan payment calculated?",
    answer:
      "The monthly payment is calculated using the standard amortization formula: M = P × r × (1+r)^n / ((1+r)^n - 1), where P is the principal, r is the monthly interest rate, and n is the number of payments. This formula ensures equal payments over the loan term.",
  },
  {
    question: "What is the difference between APR and interest rate?",
    answer:
      "The interest rate is the cost of borrowing the principal. APR (Annual Percentage Rate) includes the interest rate plus fees and other costs, giving you a more complete picture of the loan's true cost. Our calculator uses the annual interest rate.",
  },
  {
    question: "Can I use this for mortgage calculations?",
    answer:
      "Yes! This loan calculator works for any fixed-rate loan including mortgages, auto loans, and personal loans. Enter your principal, annual interest rate, and loan term in years to get your monthly payment.",
  },
  {
    question: "Does the calculator account for extra payments?",
    answer:
      "This calculator provides the standard monthly payment for fixed-rate loans. For scenarios with extra payments, you would need a more advanced amortization calculator. Try our tool to get a quick estimate.",
  },
];

export default function LoanCalculatorPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-8">
      <header className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-slate-800">
          Loan Calculator
        </h1>
        <p className="text-lg text-slate-600">
          Calculate your monthly payment, total interest, and amortization schedule
          for any fixed-rate loan. Free, instant results—no signup required.
        </p>
      </header>

      <LoanCalculator />

      <AdBlock slot="below-result" format="horizontal" className="my-8 min-h-[90px]" />

      <div className="space-y-8">
        <FormulaExplanation
          title="How the Loan Payment Formula Works"
          formula="Monthly Payment = P × r × (1+r)^n / ((1+r)^n - 1)"
          description="P is the principal (loan amount), r is the monthly interest rate (annual rate ÷ 12), and n is the total number of monthly payments. This formula distributes your payments evenly over the loan term, with earlier payments going mostly toward interest and later payments toward principal."
          example="For a $200,000 loan at 6% annual interest over 30 years: r = 0.06/12 = 0.005, n = 360. Monthly payment ≈ $1,199.10. Total paid ≈ $431,676. Total interest ≈ $231,676."
        />

        <AdBlock slot="between-content" format="rectangle" className="my-8 min-h-[250px]" />

        <section>
          <h2 className="mb-4 text-xl font-semibold text-slate-800">
            How to Use the Loan Calculator
          </h2>
          <p className="mb-4 text-slate-600">
            Enter the loan amount (principal), annual interest rate as a percentage,
            and the loan term in years. Results update instantly. The calculator
            shows your monthly payment, total amount you&apos;ll pay over the life of the
            loan, and total interest. An amortization preview shows how much of
            each payment goes to principal vs. interest in the first few months.
          </p>
          <h3 className="mb-2 text-lg font-medium text-slate-800">
            Example: Home Loan Calculation
          </h3>
          <p className="text-slate-600">
            Suppose you borrow $250,000 for a home at 5.5% annual interest over 25
            years. Your monthly payment would be approximately $1,530. Over the life
            of the loan, you would pay about $209,000 in interest, for a total of
            $459,000. Use our loan calculator above to plug in your own numbers and
            see your results instantly. This tool works for mortgages, auto loans,
            student loans, and personal loans with fixed interest rates.
          </p>
        </section>

        <FAQSection items={faqItems} />

        <InternalLinks currentTool="loan-calculator" />

        <p className="text-slate-600">
          Need to measure investment performance? Try our{" "}
          <a
            href="/roi-calculator"
            className="text-[#66A3FF] underline hover:text-[#5592e6]"
          >
            ROI calculator
          </a>{" "}
          to calculate return on investment. For quick percentage calculations, use
          our{" "}
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
