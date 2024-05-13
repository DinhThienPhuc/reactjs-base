import type { Meta, StoryObj } from "@storybook/react";
import { FlexBox } from "./_components";
import { fn } from "@storybook/test";

const meta = {
  title: "FlexBox",
  component: FlexBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    onClick: fn(),
    children: "Content",
    style: {
      width: 600,
      height: 360,
      border: "1px solid green",
      color: "#ffffff",
      padding: 24,
    },
  },
} satisfies Meta<typeof FlexBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const StartAlign: Story = {
  args: {
    justifyContent: "flex-start",
  },
};

export const EndAlign: Story = {
  args: {
    justifyContent: "flex-end",
  },
};

export const TopAlign: Story = {
  args: {
    alignItems: "flex-start",
  },
};

export const BottomAlign: Story = {
  args: {
    alignItems: "flex-end",
  },
};
