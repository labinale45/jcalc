"use client";

type InsightType = "info" | "warning" | "success" | "risk";

interface InsightPanelProps {
  type?: InsightType;
  title: string;
  message: string;
  suggestion?: string;
}

const styles: Record<InsightType, string> = {
  info: "border-slate-300 bg-slate-50 text-slate-800",
  warning: "border-amber-300 bg-amber-50 text-amber-900",
  success: "border-[#A2CB8B] bg-[#A2CB8B]/10 text-slate-800",
  risk: "border-red-300 bg-red-50 text-red-900",
};

export function InsightPanel({ type = "info", title, message, suggestion }: InsightPanelProps) {
  return (
    <div
      className={`rounded-lg border p-4 ${styles[type]}`}
      role="alert"
      aria-live="polite"
    >
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-1 text-sm opacity-90">{message}</p>
      {suggestion && (
        <p className="mt-2 text-sm font-medium">
          Suggestion: {suggestion}
        </p>
      )}
    </div>
  );
}
