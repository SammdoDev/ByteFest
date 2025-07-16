// components/SelectField.tsx
"use client";

type Option = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  id: string;
  label: string;
  options: Option[];
  className?: string;
};

export default function SelectField({
  id,
  label,
  options,
  className = "",
}: SelectFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block font-medium text-gray-700">
        {label}
      </label>
      <select
        id={id}
        className={`w-full border border-gray-300 text-black px-3 py-2 rounded ${className}`}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
