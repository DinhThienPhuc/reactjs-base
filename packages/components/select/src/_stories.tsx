import React, { ChangeEvent, useCallback, useMemo, useState } from "react";
import { Icon } from "@phantomthief-react/components.icon";
import type { Meta, StoryObj } from "@storybook/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { Select } from "./_components";
import * as yup from "yup";

const meta = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    options: [
      {
        label: "Option 1 1 opiep oasi poeop aspoi posi",
        value: "option-1-1-2-3-4--5--6-67",
      },
      {
        label: "Option 2",
        value: "option-2",
      },
      {
        label: "Option 3",
        value: "option-3",
      },
      {
        label: "Option 4",
        value: "option-4",
      },
    ],
    labelProps: {
      children: "Label",
    },
    postAdormentProps: {
      children: <Icon name="arrow-down" />,
    },
    helperTextProps: {
      children: "helper text",
    },
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isStandalone: true,
    postAdormentProps: null,
  },
};

export const CustomDefaultValue: Story = {
  args: {
    isStandalone: true,
    value: "option-4",
    postAdormentProps: null,
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    labelProps: null,
    postAdormentProps: null,
    helperTextProps: null,
    isStandalone: true,
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
    labelProps: null,
    postAdormentProps: null,
    helperTextProps: null,
    isStandalone: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    labelProps: null,
    postAdormentProps: null,
    helperTextProps: null,
    isStandalone: true,
  },
};

export const FullWidth: Story = {
  args: {
    variant: "outlined",
    fullWidth: true,
    labelProps: null,
    postAdormentProps: null,
    helperTextProps: null,
    isStandalone: true,
  },
};

export const Required: Story = {
  args: {
    variant: "filled",
    required: true,
    labelProps: null,
    postAdormentProps: null,
    helperTextProps: null,
    isStandalone: true,
  },
};

export const LabeledDefault: Story = {
  args: {
    postAdormentProps: null,
    helperTextProps: null,
    isStandalone: true,
  },
};

export const LabeledOutlined: Story = {
  args: {
    variant: "outlined",
    postAdormentProps: null,
    helperTextProps: null,
    isStandalone: true,
  },
};

export const LabeledFilled: Story = {
  args: {
    variant: "filled",
    postAdormentProps: null,
    helperTextProps: null,
    isStandalone: true,
  },
};

export const CustomPostAdorment: Story = {
  args: {
    variant: "outlined",
    helperTextProps: null,
    isStandalone: true,
  },
};

export const HelperTextDefault: Story = {
  args: { isStandalone: true },
};

export const HelperTextOutlined: Story = {
  args: {
    variant: "outlined",
    isStandalone: true,
  },
};

export const HelperTextFilled: Story = {
  args: {
    variant: "filled",
    isStandalone: true,
  },
};

export const ParentController: Story = {
  render: function Render(args) {
    const [value, setValue] = useState(args.options[1].value);

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
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
        <Select
          {...args}
          variant="filled"
          value={value}
          onChange={handleChange}
        />
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

export const PropsControllerSelect: Story = {
  render: function Render(args) {
    const [value, setValue] = useState(args.options[2].value);

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    }, []);

    console.log("PropsControllerSelect: ", value);

    return (
      <div style={{ display: "inline-flex", flexDirection: "column" }}>
        <Select
          {...args}
          variant="outlined"
          value={value}
          onChange={handleChange}
        />
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
            select: yup
              .string()
              .required("This field is required!")
              .max(10, "Text must be less than 10 characters"),
          })
          .required(),
      [],
    );

    const { handleSubmit, control } = useForm<{ select: string }>({
      resolver: yupResolver(validationSchema),
      defaultValues: {
        select: "",
      },
    });

    const onSubmit = (data: { select: string }) => {
      console.log("RHFController form data: ", data);
    };

    return (
      <form
        style={{ display: "inline-flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          control={control}
          name="select"
          render={({ field, formState: { errors } }) => {
            return (
              <Select
                {...args}
                {...field}
                error={errors.select}
                variant="outlined"
              />
            );
          }}
        />

        <input type="submit" style={{ marginTop: 48 }} />
      </form>
    );
  },
};
