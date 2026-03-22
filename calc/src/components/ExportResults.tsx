"use client";

import { useState } from "react";

interface ExportResultsProps {
  title: string;
  items: Array<{ label: string; value: string | number }>;
}

export function ExportResults({ title, items }: ExportResultsProps) {
  const [copied, setCopied] = useState(false);

  const toText = () => {
    return [title, ...items.map((i) => `${i.label}: ${i.value}`)].join("\n");
  };

  const copy = async () => {
    await navigator.clipboard.writeText(toText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const download = () => {
    const blob = new Blob([toText()], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${title.replace(/\s+/g, "-").toLowerCase()}-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={copy}
        className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
      >
        {copied ? "Copied!" : "Copy results"}
      </button>
      <button
        type="button"
        onClick={download}
        className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
      >
        Download (.txt)
      </button>
    </div>
  );
}
