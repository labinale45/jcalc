import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "JCalc Terms and Conditions. Read the terms of use for our free online calculators and services.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold text-slate-800">Terms and Conditions</h1>
      <p className="mb-6 text-slate-600">
        Last updated: {new Date().toLocaleDateString("en-US")}
      </p>

      <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
        <section>
          <h2 className="text-xl font-semibold text-slate-800">Acceptance of Terms</h2>
          <p>
            By accessing and using JCalc (&quot;the Site&quot;), you accept and agree to be bound by
            these Terms and Conditions. If you do not agree, please do not use the Site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800">Use of Service</h2>
          <p>
            JCalc provides free online calculators for informational purposes. You may use
            our calculators for personal, non-commercial use. You agree to use the Site
            lawfully and not to:
          </p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Use the Site for any illegal purpose</li>
            <li>Attempt to gain unauthorized access to our systems or networks</li>
            <li>Interfere with or disrupt the Site or its functionality</li>
            <li>Use automated scripts or scrapers without permission</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800">Disclaimer</h2>
          <p>
            Our calculators are provided &quot;as is&quot; for general information only. Results are
            estimates and should not be relied upon as financial, legal, or professional
            advice. Always consult a qualified professional for important decisions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800">Limitation of Liability</h2>
          <p>
            JCalc and its operators shall not be liable for any indirect, incidental,
            special, or consequential damages arising from your use of the Site or any
            reliance on calculator results.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800">Intellectual Property</h2>
          <p>
            The Site, its content, design, and branding are owned by JCalc. You may not
            copy, modify, or distribute our content without permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800">Third-Party Links</h2>
          <p>
            The Site may contain links to third-party websites. We are not responsible
            for their content or privacy practices.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800">Changes</h2>
          <p>
            We may update these terms at any time. Continued use of the Site after
            changes constitutes acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800">Contact</h2>
          <p>
            Questions about these Terms? Please{" "}
            <Link href="/contact" className="text-[#66A3FF] hover:text-[#5592e6] underline">
              contact us
            </Link>
            .
          </p>
        </section>
      </div>

      <p className="mt-8">
        <Link href="/" className="text-[#66A3FF] hover:text-[#5592e6] underline">
          ← Back to Home
        </Link>
      </p>
    </article>
  );
}
