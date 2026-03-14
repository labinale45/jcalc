/**
 * ROI (Return on Investment) Calculator Formula
 * ROI = ((Final Value - Initial Investment) / Initial Investment) × 100
 */

export interface ROIInput {
  initialInvestment: number;
  finalValue: number;
}

export interface ROIResult {
  roi: number;
  absoluteReturn: number;
  isProfit: boolean;
}

export function calculateROI(input: ROIInput): ROIResult {
  const { initialInvestment, finalValue } = input;

  if (initialInvestment <= 0) {
    return { roi: 0, absoluteReturn: 0, isProfit: false };
  }

  const absoluteReturn = finalValue - initialInvestment;
  const roi = (absoluteReturn / initialInvestment) * 100;

  return {
    roi: Math.round(roi * 100) / 100,
    absoluteReturn: Math.round(absoluteReturn * 100) / 100,
    isProfit: absoluteReturn >= 0,
  };
}

export const ROI_FORMULA_DESCRIPTION =
  "ROI = ((Final Value - Initial Investment) / Initial Investment) × 100. This expresses your return as a percentage of your original investment. Positive ROI means profit; negative ROI means loss.";
