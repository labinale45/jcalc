"use client";

import { ExportResults } from "./ExportResults";

interface ResultPanelProps {
  title: string;
  items: Array<{ label: string; value: string | number }>;
  visible?: boolean;
  showExport?: boolean;
}

export function ResultPanel({
  title,
  items,
  visible = true,
  showExport = false,
}: ResultPanelProps) {
  if (!visible) return null;

  return (
    <div
      className="rounded-lg border border-[#A2CB8B]/60 bg-[#A2CB8B]/10 p-6"
      role="region"
      aria-label={`${title} results`}
    >
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold text-slate-800">
          {title}
        </h3>
        {showExport && <ExportResults title={title} items={items} />}
      </div>
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
