/**
 * Break-even Calculator
 * Break-even units = Fixed Costs / (Price - Variable Cost per Unit)
 * Break-even revenue = Break-even units * Price
 */

export interface BreakEvenInput {
  fixedCosts: number;
  pricePerUnit: number;
  variableCostPerUnit: number;
}

export interface BreakEvenResult {
  breakEvenUnits: number;
  breakEvenRevenue: number;
  contributionMargin: number;
  contributionMarginRatio: number;
}

export function calculateBreakEven(input: BreakEvenInput): BreakEvenResult | null {
  const { fixedCosts, pricePerUnit, variableCostPerUnit } = input;
  const contributionMargin = pricePerUnit - variableCostPerUnit;

  if (contributionMargin <= 0) return null;

  const breakEvenUnits = fixedCosts / contributionMargin;
  const breakEvenRevenue = breakEvenUnits * pricePerUnit;
  const contributionMarginRatio = (contributionMargin / pricePerUnit) * 100;

  return {
    breakEvenUnits: Math.round(breakEvenUnits * 100) / 100,
    breakEvenRevenue: Math.round(breakEvenRevenue * 100) / 100,
    contributionMargin: Math.round(contributionMargin * 100) / 100,
    contributionMarginRatio: Math.round(contributionMarginRatio * 100) / 100,
  };
}
