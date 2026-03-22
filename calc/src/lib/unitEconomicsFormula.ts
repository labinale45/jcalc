/**
 * Unit Economics: CAC (Customer Acquisition Cost) & LTV (Lifetime Value)
 * CAC = Total Marketing Spend / New Customers
 * LTV = ARPU * Gross Margin % / Churn Rate (simplified)
 * LTV:CAC ratio healthy if >= 3
 */

export interface UnitEconomicsInput {
  marketingSpend: number;
  newCustomers: number;
  arpu?: number; // Average Revenue Per User
  grossMarginPercent?: number;
  churnRatePercent?: number;
}

export interface UnitEconomicsResult {
  cac: number;
  ltv: number | null;
  ltvToCac: number | null;
  paybackMonths: number | null;
}

export function calculateUnitEconomics(input: UnitEconomicsInput): UnitEconomicsResult {
  const {
    marketingSpend,
    newCustomers,
    arpu = 0,
    grossMarginPercent = 100,
    churnRatePercent = 5,
  } = input;

  const cac = newCustomers > 0 ? marketingSpend / newCustomers : 0;

  let ltv: number | null = null;
  let ltvToCac: number | null = null;
  let paybackMonths: number | null = null;

  if (arpu > 0 && churnRatePercent > 0 && churnRatePercent < 100) {
    const marginDecimal = grossMarginPercent / 100;
    const churnDecimal = churnRatePercent / 100;
    ltv = (arpu * marginDecimal) / churnDecimal;
  }

  if (ltv !== null && cac > 0) {
    ltvToCac = ltv / cac;
  }

  if (arpu > 0 && grossMarginPercent > 0 && cac > 0) {
    const marginPerCustomer = arpu * (grossMarginPercent / 100);
    paybackMonths = marginPerCustomer > 0 ? cac / marginPerCustomer : null;
  }

  return {
    cac: Math.round(cac * 100) / 100,
    ltv: ltv !== null ? Math.round(ltv * 100) / 100 : null,
    ltvToCac: ltvToCac !== null ? Math.round(ltvToCac * 100) / 100 : null,
    paybackMonths: paybackMonths !== null ? Math.round(paybackMonths * 10) / 10 : null,
  };
}
