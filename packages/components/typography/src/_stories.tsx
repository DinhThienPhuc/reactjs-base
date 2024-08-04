import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "./_components";

const meta = {
  title: "Components/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    children: "Hello World",
    color: "#ffffff",
  },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomColor: Story = {
  args: {
    color: "#c5cbce",
  },
};

export const CustomSize: Story = {
  args: {
    color: "#ffffff",
    size: 24,
  },
};

export const CustomBold: Story = {
  args: {
    color: "#ffffff",
    bold: 700,
  },
};

export const CustomVariant: Story = {
  args: {
    color: "#ffffff",
    bold: 700,
    variant: "p",
  },
};

export const CustomFontText: Story = {
  args: {
    color: "#ffffff",
    font: "Arial, Helvetica, sans-serif",
  },
};

export const WithHTMLAttributes: Story = {
  args: {
    htmlAttributes: {
      "data-gtm": "test",
    },
  },
};
