import React, { useCallback, useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import type { Meta, StoryObj } from "@storybook/react";

import { RadioGroup } from "./_components";

const meta = {
  title: "Components/Radio Group",
  component: RadioGroup,
  decorators: [
    (StoryComponent) => (
      <div style={{ color: "#ffffff" }}>
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
    name: "test-storybook-radio-group",
    options: [
      { key: "option-1", value: "option-1", label: "Option 1" },
      { key: "option-2", value: "option-2", label: "Option 2" },
      {
        key: "option-3",
        value: "option-3",
        label: "Option Long text will be this one",
      },
      { key: "option-4", value: "option-4", label: "Option 4" },
    ],
    label: "Label of radio group",
    onChange: (value: string) => {
      console.log("value", value);
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isStandalone: true,
    label: "",
  },
};

export const HorizontalAlign: Story = {
  args: {
    isStandalone: true,
    label: "",
    direction: "row",
  },
};

export const ParentController: Story = {
  args: {
    direction: "row",
  },
  render: function Render(args) {
    const [value, setValue] = useState(args.options[1].value);

    const handleChange = useCallback((value: string) => {
      setValue(value);
    }, []);

    const handleParentChange = useCallback(
      (value: string) => () => {
        setValue(value);
      },
      [],
    );

    console.log("ParentController: ", value);

    return (
      <div style={{ display: "inline-flex", flexDirection: "column" }}>
        <RadioGroup {...args} value={value} onChange={handleChange} />
        <button
          style={{ marginTop: 48 }}
          onClick={handleParentChange(args.options[0].value)}
        >
          Change to first option
        </button>
        <button
          style={{ marginTop: 24 }}
          onClick={handleParentChange(args.options[3].value)}
        >
          Change to fourth option
        </button>
      </div>
    );
  },
};

export const PropsController: Story = {
  render: function Render(args) {
    const [value, setValue] = useState(args.options[2].value);

    const handleChange = useCallback((value: string) => {
      setValue(value);
    }, []);

    console.log("PropsController: ", value);

    return (
      <div style={{ display: "inline-flex", flexDirection: "column" }}>
        <RadioGroup {...args} value={value} onChange={handleChange} />
      </div>
    );
  },
};

export const RHFController: Story = {
  render: function Render(args) {
    const validationSchema = useMemo(
      () =>
        yup
          .object({
            option: yup
              .string()
              .required("This field is required!")
              .max(10, "Text must be less than 10 characters"),
          })
          .required(),
      [],
    );

    const { handleSubmit, control } = useForm<{ option: string }>({
      resolver: yupResolver(validationSchema),
      defaultValues: {
        option: args.options[1].value,
      },
    });

    const onSubmit = (data: { option: string }) => {
      console.log("RHFController form data: ", data);
    };

    return (
      <form
        style={{ display: "inline-flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          control={control}
          name="option"
          render={({ field }) => {
            return <RadioGroup {...args} {...field} />;
          }}
        />

        {/* Implement Error state for form validation */}

        <input type="submit" style={{ marginTop: 48 }} />
      </form>
    );
  },
};

export const LazyLoad: Story = {
  render: function Render(args) {
    const [value, setValue] = useState(args.options[2].value);
    const [label, setLabel] = useState("");

    const handleChange = useCallback((value: string) => {
      setValue(value);
    }, []);

    return (
      <div style={{ display: "inline-flex", flexDirection: "column" }}>
        <RadioGroup
          {...args}
          label={label}
          value={value}
          onChange={handleChange}
        />
        <button
          style={{ marginTop: 48 }}
          onClick={() => setLabel((prev) => (prev ? "" : "Label lazy load"))}
        >
          Toggle show label
        </button>
      </div>
    );
  },
};

export const WithHTMLAttributes: Story = {
  args: {
    label: "Label for radio group",
    isStandalone: true,
    htmlAttributes: {
      "data-testid": "radio-group",
    },
    labelHtmlAttributes: {
      "data-testid": "radio-group-label",
    },
    optionHtmlAttributes: {
      "data-testid": "radio-group-option",
    },
  },
};
