import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./_components";

const meta = {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    name: "chevron-down",
    color: "#ffffff",
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
