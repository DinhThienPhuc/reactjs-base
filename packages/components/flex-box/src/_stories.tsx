import type { Meta, StoryObj } from "@storybook/react";

import { FlexBox } from "./_components";

const meta = {
  title: "Components/Flex Box",
  component: FlexBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    alignItems: {
      control: {
        type: "select",
        options: ["flex-start", "center", "flex-end"],
      },
      description: "Align items in the cross-axis",
    },
    justifyContent: {
      control: {
        type: "select",
        options: ["flex-start", "center", "flex-end"],
      },
      description: "Align items in the main-axis",
    },
    flexDirection: {
      control: {
        type: "select",
        options: ["row", "column"],
      },
      description: "Direction of the flex items",
    },
    variant: {
      control: {
        type: "select",
        options: ["div", "span"],
      },
      description: "HTML tag to render",
    },
    children: {
      description: "Content to render",
    },
  },
  args: {
    children: "Content",
    htmlAttributes: {
      style: {
        width: 600,
        height: 360,
        border: "1px solid green",
        color: "#ffffff",
        padding: 24,
      },
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
