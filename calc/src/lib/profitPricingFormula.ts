/**
 * Profit & Pricing Calculator
 * Profit = Revenue - Cost | Margin = (Profit / Revenue) * 100 | Markup = (Profit / Cost) * 100
 */

export interface ProfitPricingInput {
  cost: number;
  price: number;
  quantity?: number;
}

export interface ProfitPricingResult {
  revenue: number;
  totalCost: number;
  profit: number;
  margin: number;
  markup: number;
  profitPerUnit: number;
}

export function calculateProfitPricing(input: ProfitPricingInput): ProfitPricingResult {
  const { cost, price, quantity = 1 } = input;
  const totalCost = cost * quantity;
  const revenue = price * quantity;
  const profit = revenue - totalCost;
  const margin = revenue > 0 ? (profit / revenue) * 100 : 0;
  const markup = totalCost > 0 ? (profit / totalCost) * 100 : 0;
  const profitPerUnit = price - cost;

  return {
    revenue: Math.round(revenue * 100) / 100,
    totalCost: Math.round(totalCost * 100) / 100,
    profit: Math.round(profit * 100) / 100,
    margin: Math.round(margin * 100) / 100,
    markup: Math.round(markup * 100) / 100,
    profitPerUnit: Math.round(profitPerUnit * 100) / 100,
  };
}
