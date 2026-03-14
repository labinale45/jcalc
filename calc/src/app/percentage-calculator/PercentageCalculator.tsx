"use client";

import { useState, useCallback } from "react";
import { FormInput } from "@/components/FormInput";
import { ResultPanel } from "@/components/ResultPanel";
import {
  calculatePercentage,
  type PercentageMode,
} from "@/lib/percentageFormula";

const MODES: { value: PercentageMode; label: string }[] = [
  { value: "x_of_y", label: "X% of Y" },
  { value: "y_of_x", label: "Y is what % of X" },
  { value: "percentage_change", label: "Percentage change (Old → New)" },
];

export function PercentageCalculator() {
  const [mode, setMode] = useState<PercentageMode>("x_of_y");
  const [value1, setValue1] = useState<string>("20");
  const [value2, setValue2] = useState<string>("150");

  const result = useCallback(() => {
    const v1 = parseFloat(value1) || 0;
    const v2 = parseFloat(value2) || 0;
    return calculatePercentage({ mode, value1: v1, value2: v2 });
  }, [mode, value1, value2])();

  const label1 =
    mode === "x_of_y"
      ? "X (percent)"
      : mode === "y_of_x"
        ? "Y (value)"
        : "Old value";
  const label2 =
    mode === "x_of_y"
      ? "Y (value)"
      : mode === "y_of_x"
        ? "X (total)"
        : "New value";

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-slate-200 bg-white p-6">
        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700">
            Calculation type
          </label>
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value as PercentageMode)}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-800 focus:border-[#66A3FF] focus:outline-none focus:ring-1 focus:ring-[#66A3FF]"
            aria-label="Select percentage calculation type"
          >
            {MODES.map((m) => (
              <option key={m.value} value={m.value}>
                {m.label}
              </option>
            ))}
          </select>
        </div>
        <form
          className="grid gap-4 sm:grid-cols-2"
          onSubmit={(e) => e.preventDefault()}
          aria-label="Percentage calculation form"
        >
          <FormInput
            id="value1"
            label={label1}
            unit={mode === "x_of_y" ? "%" : undefined}
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
            placeholder={mode === "percentage_change" ? "50" : "20"}
          />
          <FormInput
            id="value2"
            label={label2}
            unit={mode === "percentage_change" ? undefined : mode === "y_of_x" ? undefined : undefined}
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
            placeholder={mode === "percentage_change" ? "60" : "150"}
          />
        </form>
      </div>

      {result && result.explanation && (
        <ResultPanel
          title="Result"
          visible
          items={[
            {
              label: mode === "x_of_y" ? "Result" : "Percentage",
              value: mode === "x_of_y" ? result.result : `${result.result}%`,
            },
            { label: "Explanation", value: result.explanation },
          ]}
        />
      )}
    </div>
  );
}
