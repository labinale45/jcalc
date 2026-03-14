import Link from "next/link";

interface CalculatorCardProps {
  title: string;
  description: string;
  href: string;
  icon?: string;
}

export function CalculatorCard({
  title,
  description,
  href,
  icon = "📊",
}: CalculatorCardProps) {
  return (
    <Link
      href={href}
      className="block rounded-lg border border-slate-200 bg-white p-6 transition-colors hover:border-[#66A3FF]/50 hover:bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-[#66A3FF] focus:ring-offset-2"
      aria-label={`Go to ${title} calculator`}
    >
      <span className="mb-3 inline-block text-2xl" role="img" aria-hidden>
        {icon}
      </span>
      <h3 className="mb-2 font-semibold text-slate-800">
        {title}
      </h3>
      <p className="text-sm text-slate-600">
        {description}
      </p>
    </Link>
  );
}
