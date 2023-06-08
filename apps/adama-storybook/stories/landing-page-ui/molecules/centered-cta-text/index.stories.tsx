import { CenteredCTAText } from "@adama/components-landing-page-ui/src";
import type { Meta, StoryObj } from "@storybook/react";

// export const Default = Template.bind({});
// Default.args = {
//   title: "Default Title",
//   description: "Default Description",
// };

const meta: Meta<typeof CenteredCTAText> = {
  title: 'landing-page/molecules/centered-cta-text',
  component: CenteredCTAText
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Default Title",
    description: "Default Description",
  }
};