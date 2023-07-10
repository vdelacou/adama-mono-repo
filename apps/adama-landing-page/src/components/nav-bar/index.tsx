'use client';
import { Brand, NavBar, NavBarProps } from '@adama/components-landing-page-ui';
import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren, useState } from 'react';

const CustomLink = ({ children }: PropsWithChildren) => <Link href={'#'}>{children}</Link>;

const navBarProps: NavBarProps = {
  navHeaderProps: {
    mobileMenuButtonOnClick: () => undefined,
    open: false,
    brand: (
      <Link href={'/'}>
        <Brand BrandImage={() => <Image alt={'Default Alt'} src={'./logo.svg'} width={86} height={48} />} />
      </Link>
    ),
  },
  navLinkProps: [
    { name: 'Features', Link: CustomLink },
    { name: 'Pricing', Link: CustomLink },
    { name: 'FAQs', Link: CustomLink },
  ],
  authProps: {
    signIn: { name: 'Sign in', Link: CustomLink },
    signUp: { name: 'Get started', Link: CustomLink },
  },
};
export const NavbarApp = () => {
  const [open, setOpen] = useState(false);
  return <NavBar {...navBarProps} navHeaderProps={{ ...navBarProps.navHeaderProps, open, mobileMenuButtonOnClick: () => setOpen((currentOpen) => !currentOpen) }} />;
};
