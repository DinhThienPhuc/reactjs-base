import type { Meta, StoryObj } from "@storybook/react";
import { HumburgerMenu } from "./_components";

const meta = {
  title: "Components/Humburger Menu",
  component: HumburgerMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof HumburgerMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
