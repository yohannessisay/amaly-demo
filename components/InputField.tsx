"use client";

interface InputFieldProps {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
}

export default function InputField({
  label,
  id,
  type = "text",
  value,
  onChange,
}: InputFieldProps) {
  return (
    <div className="group relative w-72 md:w-80 lg:w-96 my-1">
      <label
        htmlFor={id}
        className="block w-full pb-1 text-sm font-medium text-white transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
      >
        {label}
      </label>
      <input
        required
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="peer text-black h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}
