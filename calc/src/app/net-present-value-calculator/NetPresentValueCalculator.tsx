"use client";

import { useMemo, useState } from "react";
import { CurrencySelector } from "@/components/CurrencySelector";
import { FormInput } from "@/components/FormInput";
import { ResultPanel } from "@/components/ResultPanel";
import { useCurrency } from "@/contexts/CurrencyContext";

export function NetPresentValueCalculator() {
  const { format } = useCurrency();
  const [investment, setInvestment] = useState("10000");
  const [discountRate, setDiscountRate] = useState("10");
  const [cashFlows, setCashFlows] = useState("6000, 6000");
  const flows = useMemo(
    () => cashFlows.split(/[\s,;]+/).filter(Boolean).map((value) => Number(value)).filter(Number.isFinite),
    [cashFlows],
  );
  const rate = Math.max(0, Number(discountRate) || 0) / 100;
  const presentValue = flows.reduce((sum, flow, index) => sum + flow / Math.pow(1 + rate, index + 1), 0);
  const npv = presentValue - (Number(investment) || 0);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8" aria-labelledby="npv-input-heading">
        <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 id="npv-input-heading" className="text-lg font-semibold text-slate-900">Project assumptions</h2>
            <p className="mt-1 text-sm text-slate-500">Change any value to update your estimate.</p>
          </div>
          <CurrencySelector className="w-full sm:w-56" />
        </div>
        <div className="grid gap-5">
          <FormInput id="initial-investment" label="Initial investment" hint="The amount paid today (period 0)." min="0" value={investment} onChange={(event) => setInvestment(event.target.value)} />
          <FormInput id="discount-rate" label="Discount rate per period" unit="%" hint="For annual cash flows, enter an annual discount rate." min="0" step="any" value={discountRate} onChange={(event) => setDiscountRate(event.target.value)} />
          <div className="space-y-1">
            <label htmlFor="future-cash-flows" className="block text-sm font-medium text-slate-700">Future cash flows</label>
            <textarea id="future-cash-flows" rows={3} value={cashFlows} onChange={(event) => setCashFlows(event.target.value)} aria-describedby="cash-flows-hint" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-600/10" />
            <p id="cash-flows-hint" className="text-xs text-slate-500">Enter one amount per period, separated by commas. Example: 6000, 7000, 8000.</p>
          </div>
        </div>
      </section>
      <div className="space-y-4">
        <div className={`rounded-2xl p-6 text-white shadow-sm sm:p-8 ${npv >= 0 ? "bg-gradient-to-br from-blue-700 to-indigo-800" : "bg-gradient-to-br from-slate-700 to-slate-900"}`} aria-live="polite">
          <p className="text-sm font-medium text-white/75">Net present value</p>
          <p className="mt-2 break-words text-3xl font-bold tracking-tight sm:text-4xl">{format(npv)}</p>
          <p className="mt-3 text-sm text-white/80">{npv >= 0 ? "The discounted cash flows meet or exceed the initial investment at this rate." : "The discounted cash flows are below the initial investment at this rate."}</p>
        </div>
        <ResultPanel title="Calculation details" items={[
          { label: "Present value of future cash flows", value: format(presentValue) },
          { label: "Initial investment", value: format(Number(investment) || 0) },
          { label: "Periods entered", value: flows.length },
        ]} />
      </div>
    </div>
  );
}
