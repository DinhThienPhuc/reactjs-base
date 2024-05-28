import { ArrowDownCircle as IconArrowDownCircle } from "react-feather";
import React, { ChangeEvent, useCallback, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useForm, Controller } from "react-hook-form";
import { Select } from "./_components";

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
        value: "option-1",
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
      children: <IconArrowDownCircle />,
    },
    helperTextProps: {
      children: "helper text",
    },
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    labelProps: null,
    postAdormentProps: null,
    helperTextProps: null,
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
    labelProps: null,
    postAdormentProps: null,
    helperTextProps: null,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    labelProps: null,
    postAdormentProps: null,
    helperTextProps: null,
  },
};

export const FullWidth: Story = {
  args: {
    variant: "outlined",
    fullWidth: true,
    labelProps: null,
    postAdormentProps: null,
    helperTextProps: null,
  },
};

export const Required: Story = {
  args: {
    variant: "filled",
    required: true,
    labelProps: null,
    postAdormentProps: null,
    helperTextProps: null,
  },
};

export const LabeledDefault: Story = {
  args: {
    postAdormentProps: null,
    helperTextProps: null,
  },
};

export const LabeledOutlined: Story = {
  args: {
    variant: "outlined",
    postAdormentProps: null,
    helperTextProps: null,
  },
};

export const LabeledFilled: Story = {
  args: {
    variant: "filled",
    postAdormentProps: null,
    helperTextProps: null,
  },
};

export const CustomPostAdorment: Story = {
  args: {
    variant: "outlined",
    helperTextProps: null,
  },
};

export const HelperTextDefault: Story = {
  args: {},
};

export const HelperTextOutlined: Story = {
  args: {
    variant: "outlined",
  },
};

export const HelperTextFilled: Story = {
  args: {
    variant: "filled",
  },
};

export const ParentController: Story = {
  render: function Render(args) {
    const [value, setValue] = useState(args.options[1].value);

    const handleChange = useCallback(
      (value: string) => () => {
        setValue(value);
      },
      [],
    );

    console.log("ParentControllerSelect: ", value);

    return (
      <div style={{ display: "inline-flex", flexDirection: "column" }}>
        <Select {...args} variant="filled" value={value} />
        <button
          style={{ marginTop: 48 }}
          onClick={handleChange(args.options[0].value)}
        >
          Change to first option
        </button>
        <button
          style={{ marginTop: 24 }}
          onClick={handleChange(args.options[3].value)}
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
    const {
      handleSubmit,
      control,
      formState: { errors },
    } = useForm<Record<string, string>>({
      defaultValues: {
        select: "",
      },
    });

    const onSubmit = (data: Record<string, string>) => {
      console.log("RHF form data: ", data);
    };

    console.log("errors", errors);

    return (
      <form
        style={{ display: "inline-flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          control={control}
          name="select"
          rules={{
            required: {
              value: true,
              message: "This field is required!",
            },
          }}
          render={({ field }) => {
            return (
              <Select
                {...args}
                {...field}
                isError={!!errors.select}
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
