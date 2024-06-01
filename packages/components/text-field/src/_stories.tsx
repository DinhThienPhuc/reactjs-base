import React, { ChangeEvent, useCallback, useMemo, useState } from "react";
import { Info as IconInfo, Anchor as IconAnchor } from "react-feather";
import type { Meta, StoryObj } from "@storybook/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "./_components";
import * as yup from "yup";

const meta = {
  title: "Components/Text Field",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    labelProps: {
      children: "Username",
    },
    preAdormentProps: {
      children: <IconAnchor color="#ffffff" width={16} height={16} />,
    },
    postAdormentProps: {
      children: <IconInfo color="#ffffff" width={16} height={16} />,
    },
    helperTextProps: {
      children: "This is a text field",
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isStandalone: true,
    labelProps: null,
    preAdormentProps: null,
    postAdormentProps: null,
    helperTextProps: null,
  },
};

export const Outlined: Story = {
  args: {
    isStandalone: true,
    variant: "outlined",
    labelProps: null,
    preAdormentProps: null,
    postAdormentProps: null,
    helperTextProps: null,
  },
};

export const Filled: Story = {
  args: {
    isStandalone: true,
    variant: "filled",
    labelProps: null,
    preAdormentProps: null,
    postAdormentProps: null,
    helperTextProps: null,
  },
};

export const FullWidth: Story = {
  args: {
    variant: "outlined",
    fullWidth: true,
    labelProps: null,
    preAdormentProps: null,
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
    preAdormentProps: null,
    postAdormentProps: null,
    helperTextProps: null,
    isStandalone: true,
  },
};

export const LabeledDefault: Story = {
  args: {
    preAdormentProps: null,
    postAdormentProps: null,
    helperTextProps: null,
    isStandalone: true,
  },
};

export const LabeledOutlined: Story = {
  args: {
    variant: "outlined",
    preAdormentProps: null,
    postAdormentProps: null,
    helperTextProps: null,
    isStandalone: true,
  },
};

export const LabeledFilled: Story = {
  args: {
    variant: "filled",
    preAdormentProps: null,
    postAdormentProps: null,
    helperTextProps: null,
    isStandalone: true,
  },
};

export const CustomPreAdorment: Story = {
  args: {
    variant: "outlined",
    postAdormentProps: null,
    helperTextProps: null,
    isStandalone: true,
  },
};

export const CustomPostAdorment: Story = {
  args: {
    variant: "outlined",
    preAdormentProps: null,
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
  args: {},
  render: function Render(args) {
    const [value, setValue] = useState("");

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    }, []);

    const handleParentChange = useCallback(
      (text: string) => () => {
        setValue(text);
      },
      [],
    );

    return (
      <div style={{ display: "inline-flex", flexDirection: "column" }}>
        <TextField {...args} value={value} onChange={handleChange} />
        <button
          style={{ marginTop: 48 }}
          onClick={handleParentChange("Text first or init")}
        >
          Update text 1
        </button>
        <button
          style={{ marginTop: 48 }}
          onClick={handleParentChange("Text 2")}
        >
          Update text 2
        </button>
      </div>
    );
  },
};

export const PropsControllerSelect: Story = {
  args: {},
  render: function Render(args) {
    const [value, setValue] = useState("");

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    }, []);

    return <TextField {...args} value={value} onChange={handleChange} />;
  },
};

export const RHFController: Story = {
  args: {},
  render: function Render(args) {
    const validationSchema = useMemo(
      () =>
        yup
          .object({
            textField: yup
              .string()
              .required("This field is required!")
              .min(10, "Text must be greater than 10 characters"),
          })
          .required(),
      [],
    );

    const { handleSubmit, control } = useForm<{ textField: string }>({
      resolver: yupResolver(validationSchema),
      defaultValues: {
        textField: "",
      },
    });

    const onSubmit = (data: Record<string, string>) => {
      console.log("RHFController form data: ", data);
    };

    return (
      <form
        style={{ display: "inline-flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          control={control}
          name="textField"
          render={({ field, formState: { errors } }) => (
            <TextField {...args} {...field} error={errors.textField} />
          )}
        />

        <input type="submit" style={{ marginTop: 48 }} />
      </form>
    );
  },
};
