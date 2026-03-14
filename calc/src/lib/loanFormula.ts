/**
 * Loan Calculator Formula
 * Monthly Payment = P * r * (1+r)^n / ((1+r)^n - 1)
 * Where:
 * P = Principal (loan amount)
 * r = Monthly interest rate (annual rate / 12)
 * n = Number of payments (months)
 */

export interface LoanInput {
  principal: number;
  annualRate: number;
  termYears: number;
}

export interface LoanResult {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  amortizationPreview: Array<{
    month: number;
    principal: number;
    interest: number;
    balance: number;
  }>;
}

export function calculateLoanPayment(input: LoanInput): LoanResult {
  const { principal, annualRate, termYears } = input;
  const monthlyRate = annualRate / 100 / 12;
  const numPayments = termYears * 12;

  let monthlyPayment = 0;
  if (monthlyRate === 0) {
    monthlyPayment = principal / numPayments;
  } else {
    const factor = Math.pow(1 + monthlyRate, numPayments);
    monthlyPayment = (principal * monthlyRate * factor) / (factor - 1);
  }

  const totalPayment = monthlyPayment * numPayments;
  const totalInterest = totalPayment - principal;

  // Generate first 3 months amortization preview
  const amortizationPreview: LoanResult["amortizationPreview"] = [];
  let balance = principal;

  for (let month = 1; month <= Math.min(3, numPayments); month++) {
    const interest = balance * monthlyRate;
    const principalPayment = monthlyPayment - interest;
    balance = Math.max(0, balance - principalPayment);
    amortizationPreview.push({
      month,
      principal: Math.round(principalPayment * 100) / 100,
      interest: Math.round(interest * 100) / 100,
      balance: Math.round(balance * 100) / 100,
    });
  }

  return {
    monthlyPayment: Math.round(monthlyPayment * 100) / 100,
    totalPayment: Math.round(totalPayment * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100,
    amortizationPreview,
  };
}

export const LOAN_FORMULA_DESCRIPTION =
  "Monthly Payment = P × r × (1+r)^n / ((1+r)^n - 1). P is the principal (loan amount), r is the monthly interest rate (annual rate ÷ 12), and n is the total number of monthly payments.";
