import { Button } from '@adama/components-landing-page-ui/src';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta<typeof Button> = {
  title: 'landing-page/atoms/button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <>{'Button Children'}</>,
  },
};
