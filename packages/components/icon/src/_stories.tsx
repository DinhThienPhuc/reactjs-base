import React, { useState } from "react";

import { FONT } from "@phantomthief-react/utils";
import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "./_components";
import { ICONS } from "./_constants";

const meta = {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    name: "anchor",
    color: "#ffffff",
    width: 16,
    height: 16,
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomColor: Story = {
  args: {
    color: "yellow",
  },
};

export const ListIcons: Story = {
  render: function Render(args) {
    return (
      <div
        style={{ display: "flex", flexWrap: "wrap", gap: 24, color: "#ffffff" }}
      >
        {Object.values(ICONS).map((iconName: string) => (
          <div
            key={iconName}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              rowGap: 8,
              width: 100,
              height: 60,
            }}
          >
            <Icon {...args} name={iconName} />
            <span style={{ fontFamily: FONT.VERNADA, fontSize: 14 }}>
              {iconName}
            </span>
          </div>
        ))}
      </div>
    );
  },
};

export const LazyLoad: Story = {
  args: {
    name: "chevron-down",
    color: "#c5cbce",
  },
  render: function Render(args) {
    const [iconName, setIconName] = useState("");

    return (
      <div style={{ display: "inline-flex", flexDirection: "column" }}>
        <Icon {...args} name={iconName} />
        <button
          style={{ marginTop: 48 }}
          onClick={() => setIconName("WrongIcon")}
        >
          Toggle to invalid icon
        </button>
        <button
          style={{ marginTop: 48 }}
          onClick={() => setIconName(ICONS.BOOKMARK)}
        >
          Toggle to valid icon
        </button>
      </div>
    );
  },
};

export const WithHTMLAttributes: Story = {
  args: {
    htmlAttributes: {
      "data-gtm": "icon-gtm-id",
    },
  },
};
