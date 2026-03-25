import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About JCalc",
  description:
    "Learn about JCalc. We provide free, easy-to-use online calculators for loans, ROI, percentages, and more. No signup required.",
  path: "/about",
  keywords: ["JCalc", "about", "online calculators"],
});

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold text-slate-800">About JCalc</h1>

      <div className="space-y-6 text-slate-600">
        <p>
          JCalc is a free online calculator website. Our mission is to provide simple,
          accurate tools for everyday math and finance—without signups, downloads, or
          complicated interfaces.
        </p>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-slate-800">What We Offer</h2>
          <p>
            We offer calculators for loans, return on investment (ROI), percentages, and
            more. Each tool includes formula explanations, examples, and FAQs so you can
            understand and trust the results.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-slate-800">Our Values</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Free and accessible—no signup required</li>
            <li>Privacy-friendly—calculations run in your browser</li>
            <li>Transparent—we explain how our formulas work</li>
            <li>User-friendly—clean, fast interface</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-slate-800">Our Calculators</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/loan-calculator" className="text-[#66A3FF] hover:text-[#5592e6] underline">
                Loan Calculator
              </Link>{" "}
              — Monthly payments and amortization
            </li>
            <li>
              <Link href="/roi-calculator" className="text-[#66A3FF] hover:text-[#5592e6] underline">
                ROI Calculator
              </Link>{" "}
              — Return on investment
            </li>
            <li>
              <Link href="/percentage-calculator" className="text-[#66A3FF] hover:text-[#5592e6] underline">
                Percentage Calculator
              </Link>{" "}
              — X% of Y, percent change, and more
            </li>
          </ul>
        </section>

        <p>
          Have feedback or a suggestion?{" "}
          <Link href="/contact" className="text-[#66A3FF] hover:text-[#5592e6] underline">
            Contact us
          </Link>
          .
        </p>
      </div>

      <p className="mt-8">
        <Link href="/" className="text-[#66A3FF] hover:text-[#5592e6] underline">
          ← Back to Home
        </Link>
      </p>
    </article>
  );
}
