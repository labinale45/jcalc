"use client";

import { useState, useCallback } from "react";
import { FormInput } from "@/components/FormInput";
import { ResultPanel } from "@/components/ResultPanel";
import { CurrencySelector } from "@/components/CurrencySelector";
import { InsightPanel } from "@/components/InsightPanel";
import { RiskWarning } from "@/components/RiskWarning";
import { calculateUnitEconomics } from "@/lib/unitEconomicsFormula";
import { useCurrency } from "@/contexts/CurrencyContext";

export function UnitEconomicsCalculator() {
  const { format } = useCurrency();
  const [marketingSpend, setMarketingSpend] = useState("10000");
  const [newCustomers, setNewCustomers] = useState("100");
  const [arpu, setArpu] = useState("50");
  const [grossMargin, setGrossMargin] = useState("80");
  const [churnRate, setChurnRate] = useState("5");

  const result = useCallback(() => {
    return calculateUnitEconomics({
      marketingSpend: parseFloat(marketingSpend) || 0,
      newCustomers: parseFloat(newCustomers) || 0,
      arpu: parseFloat(arpu) || 0,
      grossMarginPercent: parseFloat(grossMargin) || 100,
      churnRatePercent: parseFloat(churnRate) || 5,
    });
  }, [marketingSpend, newCustomers, arpu, grossMargin, churnRate])();

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-slate-200 bg-white p-6 ">
        <CurrencySelector className="mb-4" />
        <form className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" onSubmit={(e) => e.preventDefault()}>
          <FormInput id="spend" label="Marketing spend" value={marketingSpend} onChange={(e) => setMarketingSpend(e.target.value)} min="0" />
          <FormInput id="customers" label="New customers" value={newCustomers} onChange={(e) => setNewCustomers(e.target.value)} min="1" />
          <FormInput id="arpu" label="ARPU (avg revenue per user per month)" value={arpu} onChange={(e) => setArpu(e.target.value)} min="0" hint="Typically monthly for SaaS/subscription" />
          <FormInput id="margin" label="Gross margin %" value={grossMargin} onChange={(e) => setGrossMargin(e.target.value)} min="0" max="100" />
          <FormInput id="churn" label="Monthly churn rate %" value={churnRate} onChange={(e) => setChurnRate(e.target.value)} min="0" max="100" step="0.1" />
        </form>
      </div>

      {result && result.cac > 0 && (
        <>
          <ResultPanel
            title="Results"
            visible
            items={[
              { label: "CAC", value: format(result.cac) },
              ...(result.ltv !== null ? [{ label: "LTV", value: format(result.ltv) }] : []),
              ...(result.ltvToCac !== null ? [{ label: "LTV:CAC ratio", value: `${result.ltvToCac}x` }] : []),
              ...(result.paybackMonths !== null ? [{ label: "Payback (months)", value: result.paybackMonths }] : []),
            ]}
          />

          {result.ltvToCac !== null && result.ltvToCac < 1 && (
            <RiskWarning message="LTV:CAC below 1 — you're spending more to acquire customers than they're worth. Reduce CAC or increase LTV." severity="high" />
          )}
          {result.ltvToCac !== null && result.ltvToCac >= 3 && (
            <InsightPanel type="success" title="Healthy unit economics" message="LTV:CAC of 3x or higher is typically sustainable." />
          )}
          {result.paybackMonths !== null && result.paybackMonths > 18 && (
            <RiskWarning message="Long payback period. Consider strategies to improve retention or reduce CAC." severity="medium" />
          )}
        </>
      )}
    </div>
  );
}
