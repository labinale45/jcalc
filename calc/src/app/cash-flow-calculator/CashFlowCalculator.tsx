"use client";

import { useState, useCallback } from "react";
import { FormInput } from "@/components/FormInput";
import { ResultPanel } from "@/components/ResultPanel";
import { CurrencySelector } from "@/components/CurrencySelector";
import { RiskWarning } from "@/components/RiskWarning";
import { InsightPanel } from "@/components/InsightPanel";
import { calculateCashFlow } from "@/lib/cashFlowFormula";
import { useCurrency } from "@/contexts/CurrencyContext";

export function CashFlowCalculator() {
  const { format } = useCurrency();
  const [inflows, setInflows] = useState("50000");
  const [outflows, setOutflows] = useState("45000");

  const result = useCallback(() => {
    return calculateCashFlow({
      cashInflows: parseFloat(inflows) || 0,
      cashOutflows: parseFloat(outflows) || 0,
    });
  }, [inflows, outflows])();

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-slate-200 bg-white p-6 ">
        <CurrencySelector className="mb-4" />
        <form className="grid gap-4 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
          <FormInput id="inflows" label="Cash inflows" value={inflows} onChange={(e) => setInflows(e.target.value)} min="0" />
          <FormInput id="outflows" label="Cash outflows" value={outflows} onChange={(e) => setOutflows(e.target.value)} min="0" />
        </form>
      </div>

      {result && (
        <>
          <ResultPanel
            title="Results"
            visible
            items={[
              { label: "Net cash flow", value: `${result.isPositive ? "+" : ""}${format(result.netCashFlow)}` },
              { label: "Cash flow margin", value: `${result.cashFlowMargin}%` },
            ]}
          />

          {!result.isPositive && (
            <RiskWarning message="Negative cash flow — outflows exceed inflows. Monitor closely and consider cutting costs or increasing revenue." severity="high" />
          )}
          {result.isPositive && result.cashFlowMargin < 10 && (
            <InsightPanel type="warning" title="Tight margin" message="Cash flow margin is low. Build a buffer for unexpected expenses." suggestion="Consider increasing revenue or reducing fixed costs." />
          )}
        </>
      )}
    </div>
  );
}
