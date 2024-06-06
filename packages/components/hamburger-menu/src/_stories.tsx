import type { Meta, StoryObj } from "@storybook/react";
import { HamburgerMenu } from "./_components";

const meta = {
  title: "Components/Hamburger Menu",
  component: HamburgerMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof HamburgerMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
