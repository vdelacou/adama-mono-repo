import { NavBar } from '@adama/components-landing-page-ui';
import { useArgs } from '@storybook/preview-api';
import type { Meta, StoryObj } from '@storybook/react';
import React, { FC } from 'react';

const meta: Meta<typeof NavBar> = {
  title: 'landing-page/organisms/nav-bar',
  component: NavBar,
};

export default meta;

type Story = StoryObj<typeof meta>;

const ComponentRender: FC = (args) => {
  const [, setArgs] = useArgs();
  const onValueChange = () => {
    setArgs({ ...args, navHeaderProps: { ...args.navHeaderProps, open: !args.navHeaderProps.open } });
  };
  return (
    <NavBar
      {...args}
      navHeaderProps={{
        ...args.navHeaderProps,
        mobileMenuButtonOnClick: onValueChange,
      }}
    />
  );
};

export const Primary: Story = {
  render: ComponentRender,
  args: {
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
  },
};
