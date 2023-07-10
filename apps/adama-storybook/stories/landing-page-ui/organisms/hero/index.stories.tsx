import { Hero } from '@adama/components-landing-page-ui';
import type { Meta, StoryObj } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

const meta: Meta<typeof Hero> = {
  title: 'landing-page/organisms/hero',
  component: Hero,
};

export default meta;

type Story = StoryObj<typeof meta>;

/** Display Hero with 2 actions */
export const Primary: Story = {
  args: {
    title: { left: 'The fastest way to Increase your', withGradient: 'website traffic', right: '' },
    description: 'The ultimate way to get more website traffic and grow your online business. Start your free trial now.',
    cta1: {
      name: 'Get free trial',
      navLink: ({ children }: PropsWithChildren) => <a href={'#'}>{children}</a>,
    },
    cta2: {
      name: 'Learn more',
      navLink: ({ children }: PropsWithChildren) => <a href={'#'}>{children}</a>,
    },
  },
};
