import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Contact JCalc. Get in touch with questions, feedback, or partnership inquiries about our free online calculators.",
  path: "/contact",
  keywords: ["contact", "JCalc"],
});

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold text-slate-800">Contact Us</h1>

      <div className="space-y-6 text-slate-600">
        <p>
          We&apos;d love to hear from you. Whether you have a question, feedback, or a
          suggestion for a new calculator, please reach out.
        </p>

        <section className="rounded-lg border border-slate-200 bg-white p-6">
          <h2 className="mb-2 text-lg font-semibold text-slate-800">How to Reach Us</h2>
          <p>
            Send your message to:{" "}
            <a
              href="mailto:alejunov9@gmail.com"
              className="text-[#66A3FF] hover:text-[#5592e6] underline"
            >
              alejunov9@gmail.com
            </a>
          </p>
          <p className="mt-2 text-sm text-slate-500">
            We typically respond within 2–3 business days.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-slate-800">What to Include</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Your name or a nickname</li>
            <li>Clear description of your question or feedback</li>
            <li>Relevant calculator or page URL if applicable</li>
          </ul>
        </section>

        <p>
          For legal or privacy inquiries, please mention that in your subject line.
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
