import Link from "next/link";
import { CalculatorCard } from "@/components/CalculatorCard";
import { AdBlock } from "@/components/AdBlock";
import { homeMetadata } from "@/lib/seo";

export const metadata = homeMetadata();

const featured = [
  { title: "Loan Calculator", description: "Estimate monthly payments, total interest, and your repayment schedule.", href: "/loan-calculator", icon: "↗" },
  { title: "ROI Calculator", description: "See your return on investment and compare the result with your starting cost.", href: "/roi-calculator", icon: "⌁" },
  { title: "Net Cash Flow", description: "Compare cash coming in and going out to understand your net cash position.", href: "/cash-flow-calculator", icon: "⇄" },
];

export default function HomePage() {
  return (
    <article className="py-8 sm:py-12">
      <section className="relative isolate overflow-hidden rounded-[2rem] bg-[#111c30] px-6 py-12 text-white shadow-xl sm:px-10 sm:py-16 lg:px-14">
        <div className="pointer-events-none absolute -right-24 -top-32 -z-10 h-96 w-96 rounded-full bg-blue-500/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-1/3 -z-10 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
        <p className="mb-4 inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">Clear answers. Better decisions.</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">The numbers you need, without the guesswork.</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">Free, easy-to-use calculators for finance, business, and everyday math. Enter your numbers and get a clear answer in seconds.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="#calculators" className="rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/20 hover:bg-blue-400">Explore calculators <span aria-hidden="true">↓</span></Link>
          <Link href="/net-present-value-calculator" className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">Calculate project NPV <span aria-hidden="true">→</span></Link>
        </div>
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300"><span>✓ Free to use</span><span>✓ No account needed</span><span>✓ Results update instantly</span></div>
      </section>

      <AdBlock slot="header" format="horizontal" className="my-8 min-h-[90px]" />

      <section id="calculators" className="scroll-mt-28 pt-8" aria-labelledby="featured-heading">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div><p className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">Start here</p><h2 id="featured-heading" className="text-2xl font-bold text-slate-900 sm:text-3xl">Popular calculators</h2></div>
          <span className="text-sm text-slate-500">Practical tools, ready when you are</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item) => <CalculatorCard key={item.href} {...item} />)}
        </div>
      </section>

      <AdBlock slot="below-result" format="rectangle" className="my-10 min-h-[250px]" />

      <section className="pt-4" aria-labelledby="business-heading">
        <div className="mb-6"><p className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">For your work and plans</p><h2 id="business-heading" className="text-2xl font-bold text-slate-900 sm:text-3xl">Business & finance tools</h2></div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <CalculatorCard title="Net Present Value (NPV)" description="Discount future project cash flows to today and assess an investment at your required return." href="/net-present-value-calculator" icon="∑" />
          <CalculatorCard title="Profit & Pricing" description="Work out profit, markup, and margin to set a price with confidence." href="/profit-pricing-calculator" icon="$" />
          <CalculatorCard title="Break-even" description="Find the sales volume that covers your fixed and variable costs." href="/break-even-calculator" icon="⌖" />
          <CalculatorCard title="Growth" description="Calculate CAGR and growth rates across a chosen period." href="/growth-calculator" icon="↗" />
          <CalculatorCard title="Unit Economics" description="Understand customer acquisition cost, lifetime value, and their ratio." href="/unit-economics-calculator" icon="◎" />
          <CalculatorCard title="Percentage" description="Calculate a percentage, percentage change, discounts, and more." href="/percentage-calculator" icon="%" />
        </div>
      </section>

      <section className="mt-12 grid gap-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 lg:grid-cols-[.7fr_1.3fr]">
        <div><p className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">Built for clarity</p><h2 className="text-2xl font-bold text-slate-900">Useful answers, explained simply</h2></div>
        <div className="space-y-4 text-slate-600"><p>JCalc brings everyday math and financial planning tools into one straightforward place. Each calculator is designed to make inputs easy to understand and results quick to use.</p><p>Calculations run in your browser, and many tools include formula explanations and examples so you can see how the answer is worked out.</p><div className="flex flex-wrap gap-x-5 gap-y-2 pt-1 text-sm font-medium"><Link className="text-blue-700 hover:text-blue-900" href="/about">Learn about JCalc →</Link><Link className="text-blue-700 hover:text-blue-900" href="/contact">Get in touch →</Link></div></div>
      </section>
      <AdBlock slot="footer" format="horizontal" className="mt-10 min-h-[90px]" />
    </article>
  );
}
