"use client";

interface RiskWarningProps {
  message: string;
  severity?: "low" | "medium" | "high";
}

export function RiskWarning({ message, severity = "medium" }: RiskWarningProps) {
  const bg =
    severity === "high"
      ? "bg-red-100 border-red-300"
      : severity === "medium"
        ? "bg-amber-100 border-amber-300"
        : "bg-slate-100 border-slate-300";

  return (
    <div
      className={`flex items-start gap-2 rounded-lg border p-3 text-sm ${bg}`}
      role="alert"
    >
      <span className="text-lg" aria-hidden>
        ⚠️
      </span>
      <p>{message}</p>
    </div>
  );
}
