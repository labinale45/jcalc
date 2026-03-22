"use client";

import { useState, useCallback } from "react";
import { FormInput } from "@/components/FormInput";
import { ResultPanel } from "@/components/ResultPanel";
import { CurrencySelector } from "@/components/CurrencySelector";
import { calculateLoanPayment } from "@/lib/loanFormula";
import { useCurrency } from "@/contexts/CurrencyContext";

export function LoanCalculator() {
  const { format, symbol } = useCurrency();
  const [principal, setPrincipal] = useState<string>("200000");
  const [annualRate, setAnnualRate] = useState<string>("6");
  const [termYears, setTermYears] = useState<string>("30");

  const result = useCallback(() => {
    const p = parseFloat(principal) || 0;
    const r = parseFloat(annualRate) || 0;
    const t = parseFloat(termYears) || 0;
    if (p <= 0 || t <= 0) return null;
    return calculateLoanPayment({ principal: p, annualRate: r, termYears: t });
  }, [principal, annualRate, termYears])();

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-slate-200 bg-white p-6 ">
        <CurrencySelector className="mb-4" />
        <form
          className="grid gap-4 sm:grid-cols-3"
          onSubmit={(e) => e.preventDefault()}
          aria-label="Loan calculation form"
        >
          <FormInput
            id="principal"
            label="Loan amount"
            unit={symbol}
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            min="1"
            placeholder="200000"
          />
          <FormInput
            id="annualRate"
            label="Annual interest rate"
            unit="%"
            value={annualRate}
            onChange={(e) => setAnnualRate(e.target.value)}
            min="0"
            max="100"
            step="0.01"
            placeholder="6"
          />
          <FormInput
            id="termYears"
            label="Loan term (years)"
            value={termYears}
            onChange={(e) => setTermYears(e.target.value)}
            min="1"
            max="50"
            placeholder="30"
          />
        </form>
      </div>

      {result && (
          <ResultPanel
            title="Results"
            visible
            showExport
            items={[
            { label: "Monthly payment", value: format(result.monthlyPayment) },
            { label: "Total payment", value: format(result.totalPayment) },
            { label: "Total interest", value: format(result.totalInterest) },
          ]}
        />
      )}

      {result && result.amortizationPreview.length > 0 && (
        <ResultPanel
          title="Amortization preview (first 3 months)"
          visible
          items={result.amortizationPreview.flatMap((row) => [
            { label: `Month ${row.month} principal`, value: format(row.principal) },
            { label: `Month ${row.month} interest`, value: format(row.interest) },
            { label: `Month ${row.month} balance`, value: format(row.balance) },
          ])}
        />
      )}
    </div>
  );
}
