import { Brand, NavBar } from '@adama/components-landing-page-ui';
import { useArgs } from '@storybook/preview-api';
import type { Meta, StoryObj } from '@storybook/react';
import React, { FC, PropsWithChildren } from 'react';

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
      brand: <Brand BrandImage={() => <img alt={'Default Alt'} src={'./logo.svg'} />} />,
    },
    navLinkProps: [
      { name: 'Features', Link: ({ children }: PropsWithChildren) => <a href={'#'}>{children}</a> },
      { name: 'Pricing', Link: ({ children }: PropsWithChildren) => <a href={'#'}>{children}</a> },
      { name: 'FAQs', Link: ({ children }: PropsWithChildren) => <a href={'#'}>{children}</a> },
    ],
    authProps: {
      signIn: { name: 'Sign in', Link: ({ children }: PropsWithChildren) => <a href={'#'}>{children}</a> },
      signUp: { name: 'Get started', Link: ({ children }: PropsWithChildren) => <a href={'#'}>{children}</a> },
    },
  },
};
