import React, { useState } from "react";

import { LoadingRipple } from "@phantomthief-react/components.loading-ripple";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./_components";

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

export const LazyLoad: Story = {
  args: {
    variant: "outlined",
    loading: true,
    loadingComponent: <>...</>,
  },
  render: function Render(args) {
    const [loadingComponent, setLoadingComponent] = useState(
      args.loadingComponent,
    );

    return (
      <div style={{ display: "inline-flex", flexDirection: "column" }}>
        <Button {...args} loadingComponent={loadingComponent} />
        <button
          style={{ marginTop: 48 }}
          onClick={() =>
            setLoadingComponent((prev) => (prev ? null : args.loadingComponent))
          }
        >
          Toggle show custom loading component
        </button>
        <p style={{ color: "#ffffff" }}>
          Please note: To replicate this lazy behavior, comment out the
          CustomLoading story. Otherwise, the LoadingRipple will still load due
          to the definition of the CustomLoading story.
        </p>
      </div>
    );
  },
};

export const WithHTMLAttributes: Story = {
  args: {
    htmlAttributes: {
      "data-gtm": "button-gtm-id",
    },
  },
};
