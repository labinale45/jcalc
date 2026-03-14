/**
 * Percentage Calculator Formulas
 * - X% of Y = (X/100) × Y
 * - Y is what % of X = (Y/X) × 100
 * - Percentage change = ((New - Old) / Old) × 100
 */

export type PercentageMode = "x_of_y" | "y_of_x" | "percentage_change";

export interface PercentageInput {
  mode: PercentageMode;
  value1: number;
  value2: number;
}

export interface PercentageResult {
  result: number;
  explanation: string;
  formula: string;
}

export function calculatePercentage(input: PercentageInput): PercentageResult {
  const { mode, value1, value2 } = input;

  switch (mode) {
    case "x_of_y": {
      // X% of Y
      const result = (value1 / 100) * value2;
      return {
        result: Math.round(result * 100) / 100,
        explanation: `${value1}% of ${value2} = ${result.toFixed(2)}`,
        formula: `(${value1}/100) × ${value2} = ${result.toFixed(2)}`,
      };
    }
    case "y_of_x": {
      // Y is what percent of X
      if (value2 === 0) {
        return {
          result: 0,
          explanation: "Cannot divide by zero",
          formula: "Y / X × 100 (X must not be 0)",
        };
      }
      const result = (value1 / value2) * 100;
      return {
        result: Math.round(result * 100) / 100,
        explanation: `${value1} is ${result.toFixed(2)}% of ${value2}`,
        formula: `(${value1}/${value2}) × 100 = ${result.toFixed(2)}%`,
      };
    }
    case "percentage_change": {
      // Percentage increase/decrease from value1 (old) to value2 (new)
      if (value1 === 0) {
        return {
          result: 0,
          explanation: "Cannot calculate percentage change from zero",
          formula: "((New - Old) / Old) × 100 (Old must not be 0)",
        };
      }
      const result = ((value2 - value1) / value1) * 100;
      const direction = result >= 0 ? "increase" : "decrease";
      return {
        result: Math.round(result * 100) / 100,
        explanation: `${Math.abs(result).toFixed(2)}% ${direction} from ${value1} to ${value2}`,
        formula: `((${value2} - ${value1}) / ${value1}) × 100 = ${result.toFixed(2)}%`,
      };
    }
    default:
      return { result: 0, explanation: "", formula: "" };
  }
}

export const PERCENTAGE_FORMULAS = {
  x_of_y: "X% of Y = (X ÷ 100) × Y",
  y_of_x: "Y is what % of X = (Y ÷ X) × 100",
  percentage_change: "Percentage Change = ((New - Old) ÷ Old) × 100",
};
