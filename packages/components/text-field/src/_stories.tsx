import React, { useCallback, useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import { IHelperTextProps } from "@phantomthief-react/components.helper-text";
import { Icon } from "@phantomthief-react/components.icon";
import { ILabelProps } from "@phantomthief-react/components.label";
import { IPostAdormentProps } from "@phantomthief-react/components.post-adorment";
import { IPreAdormentProps } from "@phantomthief-react/components.pre-adorment";
import type { Meta, StoryObj } from "@storybook/react";

import { TextField } from "./_components";

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
      children: <Icon name="anchor" color="#ffffff" />,
    },
    postAdormentProps: {
      children: <Icon name="info" color="#ffffff" />,
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
    labelProps: undefined,
    preAdormentProps: undefined,
    postAdormentProps: undefined,
    helperTextProps: undefined,
  },
};

export const Outlined: Story = {
  args: {
    isStandalone: true,
    variant: "outlined",
    labelProps: undefined,
    preAdormentProps: undefined,
    postAdormentProps: undefined,
    helperTextProps: undefined,
  },
};

export const Filled: Story = {
  args: {
    isStandalone: true,
    variant: "filled",
    labelProps: undefined,
    preAdormentProps: undefined,
    postAdormentProps: undefined,
    helperTextProps: undefined,
  },
};

export const FullWidth: Story = {
  args: {
    variant: "outlined",
    fullWidth: true,
    labelProps: undefined,
    preAdormentProps: undefined,
    postAdormentProps: undefined,
    helperTextProps: undefined,
    isStandalone: true,
  },
};

export const Required: Story = {
  args: {
    variant: "filled",
    required: true,
    labelProps: undefined,
    preAdormentProps: undefined,
    postAdormentProps: undefined,
    helperTextProps: undefined,
    isStandalone: true,
  },
};

export const LabeledDefault: Story = {
  args: {
    preAdormentProps: undefined,
    postAdormentProps: undefined,
    helperTextProps: undefined,
    isStandalone: true,
  },
};

export const LabeledOutlined: Story = {
  args: {
    variant: "outlined",
    preAdormentProps: undefined,
    postAdormentProps: undefined,
    helperTextProps: undefined,
    isStandalone: true,
  },
};

export const LabeledFilled: Story = {
  args: {
    variant: "filled",
    preAdormentProps: undefined,
    postAdormentProps: undefined,
    helperTextProps: undefined,
    isStandalone: true,
  },
};

export const CustomPreAdorment: Story = {
  args: {
    variant: "outlined",
    postAdormentProps: undefined,
    helperTextProps: undefined,
    isStandalone: true,
  },
};

export const CustomPostAdorment: Story = {
  args: {
    variant: "outlined",
    preAdormentProps: undefined,
    helperTextProps: undefined,
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

    const handleChange = useCallback((value: string) => {
      setValue(value);
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

export const PropsController: Story = {
  args: {},
  render: function Render(args) {
    const [value, setValue] = useState("");

    const handleChange = useCallback((value: string) => {
      setValue(value);
    }, []);

    return <TextField {...args} value={value} onChange={handleChange} />;
  },
};

export const RHFController: Story = {
  args: { clear: () => "" },
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

export const LazyLoad: Story = {
  render: function Render(args) {
    const [labelProps, setLabelProps] = useState<ILabelProps | undefined>(
      undefined,
    );
    const [preAdormentProps, setPreAdormentProps] = useState<
      IPreAdormentProps | undefined
    >(undefined);
    const [postAdormentProps, setPostAdormentProps] = useState<
      IPostAdormentProps | undefined
    >(undefined);
    const [helperTextProps, setHelperTextProps] = useState<
      IHelperTextProps | undefined
    >(undefined);
    const [value, setValue] = useState("");

    const handleChange = useCallback((value: string) => {
      setValue(value);
    }, []);

    return (
      <div style={{ display: "inline-flex", flexDirection: "column" }}>
        <TextField
          {...args}
          labelProps={labelProps}
          preAdormentProps={preAdormentProps}
          postAdormentProps={postAdormentProps}
          helperTextProps={helperTextProps}
          value={value}
          onChange={handleChange}
        />
        <button
          style={{ marginTop: 48 }}
          onClick={() =>
            setLabelProps((prev) => (prev ? undefined : args.labelProps))
          }
        >
          Toggle show label
        </button>
        <button
          style={{ marginTop: 48 }}
          onClick={() =>
            setPreAdormentProps((prev) =>
              prev ? undefined : args.preAdormentProps,
            )
          }
        >
          Toggle show pre adorment
        </button>
        <button
          style={{ marginTop: 48 }}
          onClick={() =>
            setPostAdormentProps((prev) =>
              prev ? undefined : args.postAdormentProps,
            )
          }
        >
          Toggle show post adorment
        </button>
        <button
          style={{ marginTop: 48 }}
          onClick={() =>
            setHelperTextProps((prev) =>
              prev ? undefined : args.helperTextProps,
            )
          }
        >
          Toggle show helper text
        </button>
      </div>
    );
  },
};

export const WithHTMLAttributes: Story = {
  args: {
    htmlAttributes: {
      "data-gtm": "text-field-gtm-id",
    },
    inputHtmlAttributes: {
      "data-gtm": "text-field-input-gtm-id",
    },
  },
};
