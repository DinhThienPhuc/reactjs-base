import { Typography } from "@phantomthief-react/components.typography";
import { Button } from "@phantomthief-react/components.button";
import type { Meta, StoryObj } from "@storybook/react";
import { FONT } from "@phantomthief-react/utils";
import { Navbar } from "./_components";
import React from "react";

const meta = {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    title: (
      <Typography font={FONT.VERNADA} color="#94f2f4">
        Home Page
      </Typography>
    ),
    leftButton: <Button>$</Button>,
    rightButton: <Button>&</Button>,
  },
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
