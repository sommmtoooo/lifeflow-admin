import { ChangeEventHandler } from "react";

interface InputProps {
  name: string | undefined;
  type: "text" | "email" | "number" | "date";
  autocomplete: "email" | "password" | undefined;
  placeholder: string;
  required: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
}
export default function Input({
  name,
  type,
  min,
  max,
  minLength = 3,
  maxLength,
  placeholder,
  autocomplete,
  required,
  onChange,
}: InputProps) {
  return (
    <input
      name={name}
      type={type}
      autocomplete={autocomplete}
      placeholder={placeholder}
      min={min}
      max={max}
      minLength={minLength}
      maxLength={maxLength}
      required={required}
      onChange={onChange}
      className="block w-full rounded-md border-0 my-2 px-1.5 py-1.5 text-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-dark-overlay focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
  );
}
