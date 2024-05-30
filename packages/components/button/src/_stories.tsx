import { LoadingRipple } from "@phantomthief-react/components.loading-ripple";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./_components";
import React from "react";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    onClick: () => console.log("Click the button to perform action!"),
    children: "Click me!",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Contained: Story = {
  args: {
    variant: "contained",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
  },
};

export const Small: Story = {
  args: {
    variant: "contained",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    variant: "outlined",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    variant: "contained",
    size: "large",
  },
};

export const Loading: Story = {
  args: {
    variant: "outlined",
    loading: true,
  },
};

export const CustomLoading: Story = {
  args: {
    variant: "outlined",
    loading: true,
    loadingComponent: <LoadingRipple size={6} fullScreen={false} />,
  },
};
