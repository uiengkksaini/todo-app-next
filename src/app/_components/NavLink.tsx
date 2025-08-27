import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`px-3 py-2 rounded-md flex items-center gap-1 text-sm font-medium transition
        ${isActive ? "text-lg text-pink-400" : "text-gray-300 hover:text-pink-300 "}`}
    >
      {children}
    </Link>
  );
}

export default NavLink;