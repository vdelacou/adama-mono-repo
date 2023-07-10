import { Brand } from '@adama/components-landing-page-ui/src';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta<typeof Brand> = {
  title: 'landing-page/atoms/brand',
  component: Brand,
};

export default meta;

type Story = StoryObj<typeof meta>;

/** Display the main logo */
export const Primary: Story = {
  args: {
    BrandImage: () => <img alt={'Default Alt'} src={'./logo.svg'} />,
  },
};
