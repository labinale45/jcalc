import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "JCalc Privacy Policy. Learn how we collect, use, and protect your information when you use our free online calculators.",
  path: "/privacy-policy",
  keywords: ["privacy policy", "cookies", "Google Analytics", "Google AdSense"],
});

export default function PrivacyPolicyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold text-slate-800">Privacy Policy</h1>
      <p className="mb-6 text-slate-600">
        Last updated: {new Date().toLocaleDateString("en-US")}
      </p>

      <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
        <section>
          <h2 className="text-xl font-semibold text-slate-800">Introduction</h2>
          <p>
            Welcome to JCalc. We respect your privacy and are committed to protecting your
            personal data. This privacy policy explains how we handle information when you
            use our website and calculators.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800">Information We Collect</h2>
          <p>
            JCalc is a static website. Our calculators run entirely in your browser—your
            input data is not sent to our servers. We may collect:
          </p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Usage data through analytics (e.g., Google Analytics) such as pages visited and general traffic</li>
            <li>Cookies for analytics and advertising purposes</li>
            <li>Device and browser information (non-personally identifiable)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800">How We Use Your Information</h2>
          <p>
            We use collected information to improve our website, understand how visitors
            use our tools, and display relevant advertisements. We do not sell your
            personal data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800">Third-Party Services</h2>
          <p>
            Our site may use third-party services including:
          </p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Google Analytics for traffic analysis</li>
            <li>Google AdSense for advertising (including personalized ads where applicable)</li>
          </ul>
          <p className="mt-2">
            Google describes how it uses data in ads and on partner sites in its{" "}
            <a
              href="https://policies.google.com/technologies/ads"
              className="text-[#66A3FF] underline hover:text-[#5592e6]"
              rel="noopener noreferrer"
              target="_blank"
            >
              Advertising Policy
            </a>{" "}
            and{" "}
            <a
              href="https://policies.google.com/privacy"
              className="text-[#66A3FF] underline hover:text-[#5592e6]"
              rel="noopener noreferrer"
              target="_blank"
            >
              Privacy Policy
            </a>
            . You can manage ad personalization through{" "}
            <a
              href="https://www.google.com/settings/ads"
              className="text-[#66A3FF] underline hover:text-[#5592e6]"
              rel="noopener noreferrer"
              target="_blank"
            >
              Google Ads Settings
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800">Cookies</h2>
          <p>
            We use cookies and similar technologies for analytics and ads. You can
            control cookies through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800">Data Security</h2>
          <p>
            Calculator inputs are processed locally in your browser. We do not store or
            transmit your calculation data to our servers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800">Children&apos;s Privacy</h2>
          <p>
            Our site is not directed at children under 13. We do not knowingly collect
            personal information from children.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800">Changes</h2>
          <p>
            We may update this policy from time to time. The &quot;Last updated&quot; date at the top
            reflects the latest version.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800">Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please{" "}
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
