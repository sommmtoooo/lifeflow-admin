interface ViewBarProps {
  name: string;
  description: string;
  link?: string;
}
export default function ViewBar({ name, description, link }: ViewBarProps) {
  return (
    <section className="flex justify-between items-center py-3 mb-4">
      <div>
        <h1 className="text-3xl mb-6 font-bold">{name}</h1>
        <p className="text-md font-500">{description}</p>
      </div>
      {link ? (
        <a
          href={link}
          className="px-2 py-[.5rem] self-center rounded-md bg-primary font-bold text-white"
        >
          New
        </a>
      ) : (
        ""
      )}
    </section>
  );
}
