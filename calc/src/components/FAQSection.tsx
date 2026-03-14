interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
}

export function FAQSection({
  items,
  title = "Frequently Asked Questions",
}: FAQSectionProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section aria-labelledby="faq-heading" className="space-y-6">
      <h2 id="faq-heading" className="text-xl font-semibold text-slate-800">
        {title}
      </h2>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="space-y-4">
        {items.map((item, index) => (
          <details
            key={index}
            className="rounded-lg border border-slate-200 bg-white p-4"
          >
            <summary className="cursor-pointer list-none font-medium text-slate-800 [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-2">
                {item.question}
                <span className="text-slate-400" aria-hidden>▼</span>
              </span>
            </summary>
            <p className="mt-3 border-t border-slate-100 pt-3 text-slate-600">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
