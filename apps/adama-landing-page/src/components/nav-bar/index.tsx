'use client';
import { NavBar, NavBarProps } from '@adama/components-landing-page-ui';
import { useState } from 'react';

const navBarProps: NavBarProps = {
  navHeaderProps: {
    mobileMenuButtonOnClick: () => undefined,
    open: false,
    brandProps: {
      alt: 'Default Alt',
      src: './logo.svg',
      width: 86,
      height: 48,
    },
  },
  navLinkProps: [
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'FAQs', href: '#' },
  ],
  authProps: {
    signIn: { name: 'Sign in', href: '#' },
    signUp: { name: 'Get started', href: '#' },
  },
};
export const NavbarApp = () => {
  const [open, setOpen] = useState(false);
  return <NavBar {...navBarProps} navHeaderProps={{ ...navBarProps.navHeaderProps, open, mobileMenuButtonOnClick: () => setOpen((currentOpen) => !currentOpen) }} />;
};
