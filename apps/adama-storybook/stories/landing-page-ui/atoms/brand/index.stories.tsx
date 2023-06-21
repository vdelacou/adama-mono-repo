import { Brand } from "@adama/components-landing-page-ui/src";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Brand> = {
  title: "landing-page/atoms/brand",
  component: Brand,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    alt: "Default Alt",
    src: "./logo.svg",
    width: 86,
    height: 48,
  },
};
