import { Hero } from '@adama/components-landing-page-ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Hero> = {
  title: 'landing-page/molecules/hero',
  component: Hero,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: { left: 'The fastest way to Increase your', withGradient: 'website traffic', right: '' },
    description: 'The ultimate way to get more website traffic and grow your online business. Start your free trial now.',
    cta1: {
      name: 'Get free trial',
      href: '#',
    },
    cta2: {
      name: 'Learn more',
      href: '#',
    },
  },
};
