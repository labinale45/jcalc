"use client";

import { useState, useCallback } from "react";
import { FormInput } from "@/components/FormInput";
import { ResultPanel } from "@/components/ResultPanel";
import { CurrencySelector } from "@/components/CurrencySelector";
import { RiskWarning } from "@/components/RiskWarning";
import { InsightPanel } from "@/components/InsightPanel";
import { calculateBreakEven } from "@/lib/breakEvenFormula";
import { useCurrency } from "@/contexts/CurrencyContext";

export function BreakEvenCalculator() {
  const { format } = useCurrency();
  const [fixedCosts, setFixedCosts] = useState("10000");
  const [price, setPrice] = useState("50");
  const [variableCost, setVariableCost] = useState("30");

  const result = useCallback(() => {
    return calculateBreakEven({
      fixedCosts: parseFloat(fixedCosts) || 0,
      pricePerUnit: parseFloat(price) || 0,
      variableCostPerUnit: parseFloat(variableCost) || 0,
    });
  }, [fixedCosts, price, variableCost])();

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-slate-200 bg-white p-6 ">
        <CurrencySelector className="mb-4" />
        <form className="grid gap-4 sm:grid-cols-3" onSubmit={(e) => e.preventDefault()}>
          <FormInput id="fixed" label="Fixed costs" value={fixedCosts} onChange={(e) => setFixedCosts(e.target.value)} min="0" />
          <FormInput id="price" label="Price per unit" value={price} onChange={(e) => setPrice(e.target.value)} min="0" />
          <FormInput id="variable" label="Variable cost per unit" value={variableCost} onChange={(e) => setVariableCost(e.target.value)} min="0" />
        </form>
      </div>

      {result && (
        <>
          <ResultPanel
            title="Results"
            visible
            items={[
              { label: "Break-even units", value: result.breakEvenUnits.toLocaleString() },
              { label: "Break-even revenue", value: format(result.breakEvenRevenue) },
              { label: "Contribution margin per unit", value: format(result.contributionMargin) },
              { label: "Contribution margin ratio", value: `${result.contributionMarginRatio}%` },
            ]}
          />
          <InsightPanel
            type="info"
            title="Interpretation"
            message={`You need to sell ${Math.ceil(result.breakEvenUnits)} units (or earn ${format(result.breakEvenRevenue)}) to break even.`}
          />
        </>
      )}

      {!result && parseFloat(price) > 0 && parseFloat(variableCost) >= parseFloat(price) && (
        <RiskWarning
          message="Variable cost per unit is greater than or equal to price. You cannot break even—each sale increases loss. Raise price or reduce variable costs."
          severity="high"
        />
      )}
    </div>
  );
}
