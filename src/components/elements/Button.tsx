interface ButtonProps {
  name: string;
  className?: string;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
}
export default function Button({
  type = "button",
  name,
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${className}`}
    >
      {name}
    </button>
  );
}
