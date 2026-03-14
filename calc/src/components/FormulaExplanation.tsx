interface FormulaExplanationProps {
  title: string;
  formula: string;
  description: string;
  example?: string;
}

export function FormulaExplanation({
  title,
  formula,
  description,
  example,
}: FormulaExplanationProps) {
  return (
    <section
      className="rounded-lg border border-slate-200 bg-white p-6"
      aria-labelledby="formula-heading"
    >
      <h2 id="formula-heading" className="mb-3 text-lg font-semibold text-slate-800">
        {title}
      </h2>
      <p className="mb-3 text-slate-600">
        {description}
      </p>
      <pre className="mb-4 overflow-x-auto rounded-lg bg-slate-800 p-4 font-mono text-sm text-slate-100">
        {formula}
      </pre>
      {example && (
        <div className="rounded-lg bg-slate-50 p-4">
          <strong className="text-slate-700">Example:</strong>
          <p className="mt-1 text-slate-600">{example}</p>
        </div>
      )}
    </section>
  );
}
