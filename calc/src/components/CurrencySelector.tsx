"use client";

import { useCurrency } from "@/contexts/CurrencyContext";

interface CurrencySelectorProps {
  id?: string;
  label?: string;
  className?: string;
}

export function CurrencySelector({ id = "currency", label = "Currency", className = "" }: CurrencySelectorProps) {
  const { currency, setCurrency, currencies } = useCurrency();

  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-slate-700">
        {label}
      </label>
      <select
        id={id}
        value={currency}
        onChange={(e) => setCurrency(e.target.value as typeof currency)}
        className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-800 focus:border-[#66A3FF] focus:outline-none focus:ring-1 focus:ring-[#66A3FF] "
        aria-label="Select currency"
      >
        {currencies.map((c) => (
          <option key={c.code} value={c.code}>
            {c.code} - {c.name} ({c.symbol})
          </option>
        ))}
      </select>
    </div>
  );
}
