import { ChangeEventHandler } from "react";

interface InputProps {
  name: string | undefined;
  type: "text" | "email";
  autocomplete: "email" | "password" | undefined;
  required: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
export default function Input({
  name,
  type,
  autocomplete,
  required,
  onChange,
}: InputProps) {
  return (
    <input
      name={name}
      type={type}
      autocomplete={autocomplete}
      required={required}
      onChange={onChange}
      className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
  );
}
