import { InputHTMLAttributes } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  hint?: string;
  unit?: string;
}

export function FormInput({
  id,
  label,
  hint,
  unit,
  className = "",
  ...props
}: FormInputProps) {
  return (
    <div className="space-y-1">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-slate-700"
      >
        {label}
      </label>
      <div className="relative flex">
        <input
          id={id}
          type="number"
          step="any"
          className={`w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:border-[#66A3FF] focus:outline-none focus:ring-1 focus:ring-[#66A3FF] ${
            unit ? "pr-12" : ""
          } ${className}`}
          aria-describedby={hint ? `${id}-hint` : undefined}
          {...props}
        />
        {unit && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
            {unit}
          </span>
        )}
      </div>
      {hint && (
        <p id={`${id}-hint`} className="text-xs text-slate-500">
          {hint}
        </p>
      )}
    </div>
  );
}
