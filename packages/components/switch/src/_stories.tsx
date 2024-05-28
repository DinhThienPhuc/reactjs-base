import { Typography } from "@phantomthief-react/components.typography";
import { FONT } from "@phantomthief-react/utils.constants";
import type { Meta, StoryObj } from "@storybook/react";
import { useForm, Controller } from "react-hook-form";
import React, { useCallback, useState } from "react";
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

export const Default: Story = {};

export const CustomLabel: Story = {
  args: {
    leftLabel: "Off",
    rightLabel: "On",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const StateController: Story = {
  args: {
    leftLabel: <Typography font={FONT.VERNADA}>Left</Typography>,
    rightLabel: <Typography font={FONT.VERNADA}>Right</Typography>,
  },
  render: function Render(args) {
    const [isSwitchOn, setSwitchOn] = useState(false);

    const handleChange = useCallback((value: boolean) => {
      setSwitchOn(value);
    }, []);

    console.log("isSwitchOn", isSwitchOn);

    return <Switch {...args} value={isSwitchOn} onChange={handleChange} />;
  },
};

export const RHFController: Story = {
  args: {
    leftLabel: <Typography font={FONT.VERNADA}>Left</Typography>,
    rightLabel: <Typography font={FONT.VERNADA}>Right</Typography>,
  },
  render: function Render(args) {
    const { handleSubmit, control } = useForm<Record<string, boolean>>({
      defaultValues: {
        switch: false,
      },
    });

    const onSubmit = (data: Record<string, boolean>) => {
      console.log("RHF form data: ", data);
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
