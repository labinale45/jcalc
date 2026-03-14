"use client";

import { useState, useCallback } from "react";
import { FormInput } from "@/components/FormInput";
import { ResultPanel } from "@/components/ResultPanel";
import { calculateROI } from "@/lib/roiFormula";

const formatCurrency = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(n);

export function ROICalculator() {
  const [initialInvestment, setInitialInvestment] = useState<string>("5000");
  const [finalValue, setFinalValue] = useState<string>("6500");

  const result = useCallback(() => {
    const init = parseFloat(initialInvestment) || 0;
    const final = parseFloat(finalValue) || 0;
    if (init <= 0) return null;
    return calculateROI({ initialInvestment: init, finalValue: final });
  }, [initialInvestment, finalValue])();

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-slate-200 bg-white p-6">
        <form
          className="grid gap-4 sm:grid-cols-2"
          onSubmit={(e) => e.preventDefault()}
          aria-label="ROI calculation form"
        >
          <FormInput
            id="initialInvestment"
            label="Initial investment"
            unit="$"
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(e.target.value)}
            min="0.01"
            placeholder="5000"
          />
          <FormInput
            id="finalValue"
            label="Final value"
            unit="$"
            value={finalValue}
            onChange={(e) => setFinalValue(e.target.value)}
            min="0"
            placeholder="6500"
          />
        </form>
      </div>

      {result && (
        <ResultPanel
          title="Results"
          visible
          items={[
            {
              label: "ROI",
              value: `${result.roi >= 0 ? "+" : ""}${result.roi}%`,
            },
            {
              label: "Absolute return",
              value: `${result.isProfit ? "+" : ""}${formatCurrency(result.absoluteReturn)}`,
            },
          ]}
        />
      )}
    </div>
  );
}
