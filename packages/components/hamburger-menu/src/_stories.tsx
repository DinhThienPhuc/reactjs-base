import React, { useCallback, useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { HamburgerMenu } from "./_components";

const meta = {
  title: "Components/Hamburger Menu",
  component: HamburgerMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof HamburgerMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ParentController: Story = {
  render: function Render() {
    const [value, setValue] = useState(false);

    const handleClick = useCallback((isActivated: boolean) => {
      setValue(isActivated);
    }, []);

    const handleParentChange = useCallback(
      (value: boolean) => () => {
        setValue(value);
      },
      [],
    );

    console.log("ParentController: ", value);

    return (
      <div style={{ display: "inline-flex", flexDirection: "column" }}>
        <HamburgerMenu
          isStandalone={false}
          active={value}
          onClick={handleClick}
        />
        <button style={{ marginTop: 48 }} onClick={handleParentChange(false)}>
          Trigger hamburger inactive
        </button>
        <button style={{ marginTop: 24 }} onClick={handleParentChange(true)}>
          Trigger hamburger active
        </button>
      </div>
    );
  },
};

export const PropsController: Story = {
  render: function Render() {
    const [value, setValue] = useState(false);

    const handleClick = useCallback((isActivated: boolean) => {
      setValue(isActivated);
    }, []);

    console.log("PropsController: ", value);

    return (
      <div style={{ display: "inline-flex", flexDirection: "column" }}>
        <HamburgerMenu
          isStandalone={false}
          active={value}
          onClick={handleClick}
        />
      </div>
    );
  },
};

export const WithHTMLAttributes: Story = {
  args: {
    htmlAttributes: {
      "data-gtm": "hamburger-gtm-id",
    },
  },
};
