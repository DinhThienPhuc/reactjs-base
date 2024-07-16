import type { Meta, StoryObj } from "@storybook/react";

import { LoadingRipple } from "./_components";

const meta = {
  title: "Components/Loading Ripple",
  component: LoadingRipple,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof LoadingRipple>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FullScreen: Story = {
  args: {
    fullScreen: true,
  },
};

export const CustomSize: Story = {
  args: {
    size: 120,
  },
};

export const CustomColor: Story = {
  args: {
    color: "#c5cbce",
  },
};
