/**
 * Cash Flow Calculator
 * Net Cash Flow = Cash Inflows - Cash Outflows
 */

export interface CashFlowInput {
  cashInflows: number;
  cashOutflows: number;
}

export interface CashFlowResult {
  netCashFlow: number;
  isPositive: boolean;
  cashFlowMargin: number; // (Net / Inflows) * 100
}

export function calculateCashFlow(input: CashFlowInput): CashFlowResult {
  const { cashInflows, cashOutflows } = input;
  const netCashFlow = cashInflows - cashOutflows;
  const cashFlowMargin =
    cashInflows > 0 ? (netCashFlow / cashInflows) * 100 : 0;

  return {
    netCashFlow: Math.round(netCashFlow * 100) / 100,
    isPositive: netCashFlow >= 0,
    cashFlowMargin: Math.round(cashFlowMargin * 100) / 100,
  };
}
