import type { Meta, StoryObj } from "@storybook/react";
import { LoadingEllipsis } from "./_components";

const meta = {
  title: "Components/Loading Ellipsis",
  component: LoadingEllipsis,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof LoadingEllipsis>;

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
