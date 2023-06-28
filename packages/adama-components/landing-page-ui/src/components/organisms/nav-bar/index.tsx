import Link from 'next/link';
import { NavLink } from '../../atoms/nav-link';
import { NavHeader, NavHeaderProps } from '../../molecules';

export type NavBarProps = {
  navHeaderProps: NavHeaderProps;
  navLinkProps: { name: string; href: string }[];
  authProps: {
    signIn: { name: string; href: string };
    signUp: { name: string; href: string };
  };
};

export const NavBar = ({ navLinkProps, navHeaderProps, authProps }: NavBarProps) => {
  const { mobileMenuButtonOnClick, open, brandProps } = navHeaderProps;
  return (
    <header className="relative">
      <div className="mx-auto max-w-screen-xl px-4 md:hidden md:px-8">
        <NavHeader open={open} mobileMenuButtonOnClick={mobileMenuButtonOnClick} brandProps={brandProps} />
      </div>
      <nav className={`bg-white pb-5 md:static md:block md:text-sm ${open ? 'absolute inset-x-4 top-2 z-20 rounded-xl border shadow-lg md:border-none md:shadow-none' : 'hidden'}`}>
        <div className="mx-auto max-w-screen-xl items-center gap-x-20 px-4 md:flex md:px-8">
          <NavHeader open={open} mobileMenuButtonOnClick={mobileMenuButtonOnClick} brandProps={brandProps} />
          <div className={`mt-8 flex-1 items-center text-gray-600 md:mt-0 md:flex md:font-medium ${open ? 'block' : 'hidden'} `}>
            <ul className="items-center justify-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              {navLinkProps.map((item) => {
                return (
                  <li key={item.name} className="hover:text-gray-900">
                    <Link href={item.href} className="block" scroll={false}>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-6 flex-1 items-center justify-end gap-x-6 space-y-6 md:mt-0 md:flex md:space-y-0">
              <Link href={authProps.signIn.href} className="block hover:text-gray-900">
                {authProps.signIn.name}
              </Link>
              <NavLink
                href={authProps.signUp.href}
                className="flex items-center justify-center gap-x-1 bg-gray-800 text-sm font-medium text-white hover:bg-gray-600 active:bg-gray-900 md:inline-flex"
              >
                {authProps.signUp.name}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
