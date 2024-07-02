import type { Meta, StoryObj } from "@storybook/react";
import { FONT } from "@phantomthief-react/utils";
import { Icon } from "./_components";
import React from "react";

const listIconNames = [
  "anchor",
  "arrow-down",
  "arrow-left",
  "arrow-right",
  "arrow-up",
  "bookmark",
  "chevron-down",
  "chevron-left",
  "chevron-right",
  "chevron-up",
  "contact",
  "copy",
  "external-link",
  "facebook",
  "git-hub",
  "info",
  "linked-in",
  "rss",
  "save",
  "settings",
  "upwork",
  "user-search",
  "x",
];

const meta = {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    name: "chevron-down",
    color: "#ffffff",
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ListIcons: Story = {
  render: function Render(args) {
    return (
      <div
        style={{ display: "flex", flexWrap: "wrap", gap: 24, color: "#ffffff" }}
      >
        {listIconNames.map((iconName: string) => (
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
