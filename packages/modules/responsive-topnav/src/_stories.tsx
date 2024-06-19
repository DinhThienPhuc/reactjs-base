import { Typography } from "@phantomthief-react/components";
import type { Meta, StoryObj } from "@storybook/react";
import React, { useState, MouseEvent } from "react";
import { FONT } from "@phantomthief-react/utils";
import { ResponsiveTopnav } from "./_components";

const meta = {
  title: "Modules/Responsive Topnav",
  component: ResponsiveTopnav,
  decorators: [
    (StoryComponent) => (
      <div style={{ marginLeft: "-50vw", marginRight: "-50vw" }}>
        <StoryComponent />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    items: [
      {
        key: "home",
        content: <Typography font={FONT.VERNADA}>Home</Typography>,
      },
      {
        key: "about-us",
        content: <Typography font={FONT.VERNADA}>About Us</Typography>,
      },
      {
        key: "categories",
        content: <Typography font={FONT.VERNADA}>Categories</Typography>,
      },
      {
        key: "products",
        content: <Typography font={FONT.VERNADA}>Products</Typography>,
      },
    ],
  },
} satisfies Meta<typeof ResponsiveTopnav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render(args) {
    const [activeKey, setActiveKey] = useState("");
    const handleSelectMenuItem = (
      _: MouseEvent<HTMLButtonElement>,
      key?: string,
    ) => {
      key && setActiveKey(key);
    };
    return (
      <ResponsiveTopnav
        {...args}
        activeKey={activeKey}
        onClick={handleSelectMenuItem}
      />
    );
  },
};
