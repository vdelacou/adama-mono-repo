import Link from 'next/link';
import { PropsWithChildren } from 'react';

export const customLink = (href: string) => {
  const Component = ({ children }: PropsWithChildren) => {
    return <Link href={href}>{children}</Link>;
  };
  Component.displayName = 'CustomLink';
  return Component;
};
