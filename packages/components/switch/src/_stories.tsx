import React, { useCallback, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "./_components";

const meta = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isStandalone: true,
  },
};

export const CustomLabel: Story = {
  args: {
    leftLabel: "Off",
    rightLabel: "On",
    isStandalone: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    isStandalone: true,
  },
};

export const ParentController: Story = {
  args: {
    leftLabel: "",
    rightLabel: "",
  },
  render: function Render(args) {
    const [value, setValue] = useState(true);
    const [leftLabel, setLeftLabel] = useState("");
    const [rightLabel, setRightLabel] = useState("");

    const handleChange = useCallback((value: boolean) => {
      setValue(value);
    }, []);

    const handleParentChange = useCallback(() => {
      setValue((prev) => !prev);
    }, []);

    console.log("ParentController: ", value);

    return (
      <div style={{ display: "inline-flex", flexDirection: "column" }}>
        <Switch
          {...args}
          leftLabel={leftLabel}
          rightLabel={rightLabel}
          value={value}
          onChange={handleChange}
        />
        <button style={{ marginTop: 48 }} onClick={handleParentChange}>
          Toggle switch
        </button>
        <button
          style={{ marginTop: 48 }}
          onClick={() => setLeftLabel((prev) => (prev ? "" : "Off"))}
        >
          Toggle left label
        </button>
        <button
          style={{ marginTop: 48 }}
          onClick={() => setRightLabel((prev) => (prev ? "" : "On"))}
        >
          Toggle right label
        </button>
      </div>
    );
  },
};

export const PropsController: Story = {
  args: {
    leftLabel: "Off",
    rightLabel: "On",
  },
  render: function Render(args) {
    const [isSwitchOn, setSwitchOn] = useState(false);

    const handleChange = useCallback((value: boolean) => {
      setSwitchOn(value);
    }, []);

    console.log("PropsController", isSwitchOn);

    return <Switch {...args} value={isSwitchOn} onChange={handleChange} />;
  },
};

export const RHFController: Story = {
  args: {
    leftLabel: "Off",
    rightLabel: "On",
  },
  render: function Render(args) {
    const { handleSubmit, control } = useForm<Record<string, boolean>>({
      defaultValues: {
        switch: false,
      },
    });

    const onSubmit = (data: Record<string, boolean>) => {
      console.log("RHFController form data: ", data);
    };

    return (
      <form
        style={{ display: "inline-flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          control={control}
          name="switch"
          render={({ field }) => <Switch {...args} {...field} />}
        />

        <input type="submit" style={{ marginTop: 24 }} />
      </form>
    );
  },
};

export const LazyLoad: Story = {
  render: function Render(args) {
    const [leftLabel, setLeftLabel] = useState("");
    const [rightLabel, setRightLabel] = useState("");
    const [isSwitchOn, setSwitchOn] = useState(false);

    const handleChange = useCallback((value: boolean) => {
      setSwitchOn(value);
    }, []);

    return (
      <div style={{ display: "inline-flex", flexDirection: "column" }}>
        <Switch
          {...args}
          value={isSwitchOn}
          onChange={handleChange}
          rightLabel={rightLabel}
          leftLabel={leftLabel}
        />
        <button
          style={{ marginTop: 48 }}
          onClick={() => setLeftLabel((prev) => (prev ? "" : "Left label"))}
        >
          Toggle show left label
        </button>
        <button
          style={{ marginTop: 48 }}
          onClick={() => setRightLabel((prev) => (prev ? "" : "Right label"))}
        >
          Toggle show right label
        </button>
      </div>
    );
  },
};
