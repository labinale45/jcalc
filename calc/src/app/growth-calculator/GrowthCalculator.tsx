"use client";

import { useState, useCallback } from "react";
import { FormInput } from "@/components/FormInput";
import { ResultPanel } from "@/components/ResultPanel";
import { CurrencySelector } from "@/components/CurrencySelector";
import { InsightPanel } from "@/components/InsightPanel";
import { calculateGrowth } from "@/lib/growthFormula";
import { useCurrency } from "@/contexts/CurrencyContext";

export function GrowthCalculator() {
  const { format } = useCurrency();
  const [oldValue, setOldValue] = useState("100000");
  const [newValue, setNewValue] = useState("150000");
  const [years, setYears] = useState("3");

  const result = useCallback(() => {
    return calculateGrowth({
      oldValue: parseFloat(oldValue) || 0,
      newValue: parseFloat(newValue) || 0,
      years: parseFloat(years) || 1,
    });
  }, [oldValue, newValue, years])();

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-slate-200 bg-white p-6 ">
        <CurrencySelector className="mb-4" />
        <form className="grid gap-4 sm:grid-cols-3" onSubmit={(e) => e.preventDefault()}>
          <FormInput id="old" label="Old value" value={oldValue} onChange={(e) => setOldValue(e.target.value)} min="0" />
          <FormInput id="new" label="New value" value={newValue} onChange={(e) => setNewValue(e.target.value)} min="0" />
          <FormInput id="years" label="Years" value={years} onChange={(e) => setYears(e.target.value)} min="0.1" step="0.1" placeholder="1" />
        </form>
      </div>

      {result && parseFloat(oldValue) > 0 && (
        <>
          <ResultPanel
            title="Results"
            visible
            items={[
              { label: "Absolute change", value: `${result.growthRate >= 0 ? "+" : ""}${format(result.absoluteChange)}` },
              { label: "Growth rate", value: `${result.growthRate >= 0 ? "+" : ""}${result.growthRate}%` },
              ...(result.cagr !== null ? [{ label: "CAGR", value: `${result.cagr >= 0 ? "+" : ""}${result.cagr}%` }] : []),
            ]}
          />
          {result.doubled && (
            <InsightPanel type="success" title="Value doubled" message="Your value has at least doubled. Strong growth!" />
          )}
        </>
      )}
    </div>
  );
}
