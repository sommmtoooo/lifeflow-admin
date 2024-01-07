interface NavLinkProps {
  name: string;
  link?: string;
}

export default function NavLink({ name, link = "/" }: NavLinkProps) {
  return (
    <a href={`/admin/dashboard${link}`} className="text-white font-bold my-2">
      {name}
    </a>
  );
}
