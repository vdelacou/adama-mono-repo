import Link from 'next/link';

export interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  scroll?: boolean;
}

export const NavLink = ({ children, href, className, scroll }: NavLinkProps) => (
  <Link href={href} className={`rounded-full px-4 py-2.5 text-center duration-150 ${className ?? ''}`} scroll={scroll ? scroll : true}>
    {children}
  </Link>
);
