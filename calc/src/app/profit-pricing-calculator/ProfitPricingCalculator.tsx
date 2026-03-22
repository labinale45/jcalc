"use client";

import { useState, useCallback } from "react";
import { FormInput } from "@/components/FormInput";
import { ResultPanel } from "@/components/ResultPanel";
import { CurrencySelector } from "@/components/CurrencySelector";
import { InsightPanel } from "@/components/InsightPanel";
import { RiskWarning } from "@/components/RiskWarning";
import { calculateProfitPricing } from "@/lib/profitPricingFormula";
import { useCurrency } from "@/contexts/CurrencyContext";

export function ProfitPricingCalculator() {
  const { format } = useCurrency();
  const [cost, setCost] = useState("50");
  const [price, setPrice] = useState("75");
  const [quantity, setQuantity] = useState("100");

  const result = useCallback(() => {
    const c = parseFloat(cost) || 0;
    const p = parseFloat(price) || 0;
    const q = parseFloat(quantity) || 1;
    return calculateProfitPricing({ cost: c, price: p, quantity: q });
  }, [cost, price, quantity])();

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-slate-200 bg-white p-6 ">
        <CurrencySelector className="mb-4" />
        <form className="grid gap-4 sm:grid-cols-3" onSubmit={(e) => e.preventDefault()}>
          <FormInput id="cost" label="Cost per unit" value={cost} onChange={(e) => setCost(e.target.value)} min="0" />
          <FormInput id="price" label="Price per unit" value={price} onChange={(e) => setPrice(e.target.value)} min="0" />
          <FormInput id="quantity" label="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="1" />
        </form>
      </div>

      {result && (
        <>
          <ResultPanel
            title="Results"
            visible
            showExport
            items={[
              { label: "Revenue", value: format(result.revenue) },
              { label: "Total cost", value: format(result.totalCost) },
              { label: "Profit", value: format(result.profit) },
              { label: "Profit margin", value: `${result.margin}%` },
              { label: "Markup", value: `${result.markup}%` },
            ]}
          />

          {result.margin < 10 && result.margin >= 0 && (
            <RiskWarning message="Low profit margin (under 10%). Consider reducing costs or increasing price." severity="medium" />
          )}
          {result.profit < 0 && (
            <RiskWarning message="Negative profit — you're losing money at this price. Increase price or reduce costs." severity="high" />
          )}
          {result.margin >= 20 && (
            <InsightPanel type="success" title="Healthy margin" message="Your profit margin is solid." suggestion="Monitor competition and costs regularly." />
          )}
        </>
      )}
    </div>
  );
}
