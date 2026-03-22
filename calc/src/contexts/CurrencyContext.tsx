"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { CURRENCIES, formatCurrency, getCurrencySymbol, type CurrencyCode } from "@/lib/currencies";

const STORAGE_KEY = "jcalc-currency";

interface CurrencyContextType {
  currency: CurrencyCode;
  symbol: string;
  setCurrency: (code: CurrencyCode) => void;
  format: (amount: number) => string;
  currencies: typeof CURRENCIES;
}

const CurrencyContext = createContext<CurrencyContextType | null>(null);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>("USD");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && CURRENCIES.some((c) => c.code === saved)) {
      setCurrencyState(saved as CurrencyCode);
    }
    setMounted(true);
  }, []);

  const setCurrency = useCallback((code: CurrencyCode) => {
    setCurrencyState(code);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, code);
    }
  }, []);

  const format = useCallback(
    (amount: number) => formatCurrency(amount, currency),
    [currency]
  );

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        symbol: getCurrencySymbol(currency),
        setCurrency,
        format,
        currencies: CURRENCIES,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) {
    return {
      currency: "USD" as CurrencyCode,
      symbol: "$",
      setCurrency: () => {},
      format: (n: number) => formatCurrency(n, "USD"),
      currencies: CURRENCIES,
    };
  }
  return ctx;
}
