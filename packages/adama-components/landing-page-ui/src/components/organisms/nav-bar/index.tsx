import { AnchorHTMLAttributes, ComponentType } from 'react';
import { NavHeader, NavHeaderProps } from '../../molecules';

export type NavBarProps = {
  navHeaderProps: NavHeaderProps;
  navLinkProps: { name: string; Link: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>> }[];
  authProps: {
    signIn: { name: string; Link: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>> };
    signUp: { name: string; Link: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>> };
  };
};

export const NavBar = ({ navLinkProps, navHeaderProps, authProps }: NavBarProps) => {
  const { mobileMenuButtonOnClick, open, brand } = navHeaderProps;
  return (
    <header className="relative">
      <div className="mx-auto max-w-screen-xl px-4 md:hidden md:px-8">
        <NavHeader open={open} mobileMenuButtonOnClick={mobileMenuButtonOnClick} brand={brand} />
      </div>
      <nav className={`bg-white pb-5 md:static md:block md:text-sm ${open ? 'absolute inset-x-4 top-2 z-20 rounded-xl border shadow-lg md:border-none md:shadow-none' : 'hidden'}`}>
        <div className="mx-auto max-w-screen-xl items-center gap-x-20 px-4 md:flex md:px-8">
          <NavHeader open={open} mobileMenuButtonOnClick={mobileMenuButtonOnClick} brand={brand} />
          <div className={`mt-8 flex-1 items-center text-gray-600 md:mt-0 md:flex md:font-medium ${open ? 'block' : 'hidden'} `}>
            <ul className="items-center justify-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              {navLinkProps.map((item) => {
                return (
                  <li key={item.name} className="hover:text-gray-900">
                    <item.Link>
                      <div className="block">{item.name}</div>
                    </item.Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-6 flex-1 items-center justify-end gap-x-6 space-y-6 md:mt-0 md:flex md:space-y-0">
              <authProps.signIn.Link>
                <div className=" block hover:text-gray-900">{authProps.signIn.name}</div>
              </authProps.signIn.Link>
              <authProps.signUp.Link>
                <div className="mt-6 flex items-center justify-center gap-x-1 rounded-full bg-gray-800 px-4 py-2.5 text-center text-sm font-medium text-white duration-150 hover:bg-gray-600 active:bg-gray-900 md:mt-0 md:inline-flex">
                  {authProps.signUp.name}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </authProps.signUp.Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
