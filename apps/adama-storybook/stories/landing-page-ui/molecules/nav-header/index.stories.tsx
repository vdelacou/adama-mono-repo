import { Brand, NavHeader } from '@adama/components-landing-page-ui';
import { useArgs } from '@storybook/preview-api';
import type { Meta, StoryObj } from '@storybook/react';
import React, { FC } from 'react';

const meta: Meta<typeof NavHeader> = {
  title: 'landing-page/molecules/nav-header',
  component: NavHeader,
};

export default meta;

const ComponentRender: FC = (args) => {
  const [, setArgs] = useArgs();
  const onValueChange = () => {
    setArgs({ ...args, open: !args.open });
  };
  return <NavHeader {...args} mobileMenuButtonOnClick={onValueChange} />;
};

type Story = StoryObj<typeof meta>;

/** On Mobile a menu will happens. Can click on the logo */
export const Primary: Story = {
  render: ComponentRender,
  args: {
    mobileMenuButtonOnClick: () => undefined,
    open: false,
    brandLink: <Brand BrandImage={() => <img alt={'Default Alt'} src={'./logo.svg'} />} />,
  },
};
