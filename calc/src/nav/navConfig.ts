/**
 * Grouped navigation for JCalc — used by header (mobile drawer + desktop menus).
 */
export type NavLinkItem = { href: string; label: string; description?: string };

export type NavGroup = { id: string; title: string; links: NavLinkItem[] };

export const NAV_GROUPS: NavGroup[] = [
  {
    id: "personal",
    title: "Personal & finance",
    links: [
      { href: "/loan-calculator", label: "Loan calculator", description: "Mortgages, auto, personal loans" },
      { href: "/roi-calculator", label: "ROI calculator", description: "Investment returns" },
    ],
  },
  {
    id: "business",
    title: "Business",
    links: [
      { href: "/profit-pricing-calculator", label: "Profit & pricing", description: "Margin, markup" },
      { href: "/break-even-calculator", label: "Break-even", description: "Units to cover costs" },
      { href: "/cash-flow-calculator", label: "Cash flow", description: "In vs out" },
      { href: "/growth-calculator", label: "Growth", description: "CAGR & growth rate" },
      { href: "/unit-economics-calculator", label: "Unit economics", description: "CAC, LTV" },
    ],
  },
  {
    id: "math",
    title: "Math, science & students",
    links: [
      {
        href: "/percentage-calculator",
        label: "Percentage calculator",
        description: "%, change, grades, homework, science",
      },
      { href: "/loan-calculator", label: "Student loans", description: "Estimate payments before you borrow" },
    ],
  },
];

export const SITE_LINKS: NavLinkItem[] = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/** Flat list of all calculator hrefs for active-state checks */
export const ALL_CALC_HREFS = new Set(
  NAV_GROUPS.flatMap((g) => g.links.map((l) => l.href))
);

/** Compact pills for mobile horizontal scroll (under header bar) */
export const MOBILE_QUICK_LINKS: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/loan-calculator", label: "Loan" },
  { href: "/roi-calculator", label: "ROI" },
  { href: "/percentage-calculator", label: "%" },
  { href: "/profit-pricing-calculator", label: "Profit" },
  { href: "/break-even-calculator", label: "Break-even" },
  { href: "/cash-flow-calculator", label: "Cash flow" },
  { href: "/growth-calculator", label: "Growth" },
  { href: "/unit-economics-calculator", label: "Unit econ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
