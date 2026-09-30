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
      className="group block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-900/5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      aria-label={`Go to ${title} calculator`}
    >
      <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl font-semibold text-blue-700" role="img" aria-hidden>
        {icon}
      </span>
      <h3 className="mb-2 flex items-center justify-between gap-2 font-semibold text-slate-900">
        {title}<span className="text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-700" aria-hidden="true">→</span>
      </h3>
      <p className="text-sm text-slate-600">
        {description}
      </p>
    </Link>
  );
}
