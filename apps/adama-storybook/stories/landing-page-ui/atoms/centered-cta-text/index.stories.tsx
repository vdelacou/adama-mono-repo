import { CenteredCTAText } from '@adama/components-landing-page-ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CenteredCTAText> = {
  title: 'landing-page/atoms/centered-cta-text',
  component: CenteredCTAText,
};

export default meta;

type Story = StoryObj<typeof meta>;

/** Display Text for CTA */
export const Primary: Story = {
  args: {
    title: 'Default Title',
    description: 'Default Description',
  },
};
