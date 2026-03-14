interface ResultPanelProps {
  title: string;
  items: Array<{ label: string; value: string | number }>;
  visible?: boolean;
}

export function ResultPanel({
  title,
  items,
  visible = true,
}: ResultPanelProps) {
  if (!visible) return null;

  return (
    <div
      className="rounded-lg border border-[#A2CB8B]/60 bg-[#A2CB8B]/10 p-6"
      role="region"
      aria-label={`${title} results`}
    >
      <h3 className="mb-4 text-lg font-semibold text-slate-800">
        {title}
      </h3>
      <dl className="space-y-3">
        {items.map(({ label, value }) => (
          <div
            key={label}
            className="flex flex-wrap justify-between gap-2 border-b border-slate-200/60 pb-3 last:border-0 last:pb-0"
          >
            <dt className="text-slate-600">{label}</dt>
            <dd className="font-semibold text-slate-800">
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
