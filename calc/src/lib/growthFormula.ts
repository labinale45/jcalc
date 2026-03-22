/**
 * Growth Calculator
 * Growth Rate = ((New Value - Old Value) / Old Value) * 100
 * CAGR = ((End/Start)^(1/years) - 1) * 100
 */

export interface GrowthInput {
  oldValue: number;
  newValue: number;
  years?: number;
}

export interface GrowthResult {
  absoluteChange: number;
  growthRate: number;
  cagr: number | null;
  doubled: boolean;
}

export function calculateGrowth(input: GrowthInput): GrowthResult {
  const { oldValue, newValue, years = 1 } = input;

  if (oldValue <= 0) {
    return {
      absoluteChange: newValue - oldValue,
      growthRate: 0,
      cagr: null,
      doubled: newValue >= oldValue * 2,
    };
  }

  const absoluteChange = newValue - oldValue;
  const growthRate = (absoluteChange / oldValue) * 100;
  const cagr =
    years > 0 && newValue > 0
      ? (Math.pow(newValue / oldValue, 1 / years) - 1) * 100
      : null;

  return {
    absoluteChange: Math.round(absoluteChange * 100) / 100,
    growthRate: Math.round(growthRate * 100) / 100,
    cagr: cagr !== null ? Math.round(cagr * 100) / 100 : null,
    doubled: newValue >= oldValue * 2,
  };
}
