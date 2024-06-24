import React, { ChangeEvent, useCallback, useState } from "react";
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
      { key: "option-3", value: "option-3", label: "Option 3" },
      { key: "option-4", value: "option-4", label: "Option 4" },
    ],
    helperTextProps: {
      children: "helper text",
    },
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      console.log("e", e.target.value);
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isStandalone: true,
  },
};

export const WithDefaultValue: Story = {
  args: {
    isStandalone: true,
    value: "option-2",
  },
};

// export const Outlined: Story = {
//   args: {
//     variant: "outlined",
//     labelProps: null,
//     postAdormentProps: null,
//     helperTextProps: null,
//     isStandalone: true,
//   },
// };

// export const Filled: Story = {
//   args: {
//     variant: "filled",
//     labelProps: null,
//     postAdormentProps: null,
//     helperTextProps: null,
//     isStandalone: true,
//   },
// };

// export const Disabled: Story = {
//   args: {
//     disabled: true,
//     labelProps: null,
//     postAdormentProps: null,
//     helperTextProps: null,
//     isStandalone: true,
//   },
// };

// export const FullWidth: Story = {
//   args: {
//     variant: "outlined",
//     fullWidth: true,
//     labelProps: null,
//     postAdormentProps: null,
//     helperTextProps: null,
//     isStandalone: true,
//   },
// };

// export const Required: Story = {
//   args: {
//     variant: "filled",
//     required: true,
//     labelProps: null,
//     postAdormentProps: null,
//     helperTextProps: null,
//     isStandalone: true,
//   },
// };

// export const LabeledDefault: Story = {
//   args: {
//     postAdormentProps: null,
//     helperTextProps: null,
//     isStandalone: true,
//   },
// };

// export const LabeledOutlined: Story = {
//   args: {
//     variant: "outlined",
//     postAdormentProps: null,
//     helperTextProps: null,
//     isStandalone: true,
//   },
// };

// export const LabeledFilled: Story = {
//   args: {
//     variant: "filled",
//     postAdormentProps: null,
//     helperTextProps: null,
//     isStandalone: true,
//   },
// };

// export const CustomPostAdorment: Story = {
//   args: {
//     variant: "outlined",
//     helperTextProps: null,
//     isStandalone: true,
//   },
// };

// export const HelperTextDefault: Story = {
//   args: { isStandalone: true },
// };

// export const HelperTextOutlined: Story = {
//   args: {
//     variant: "outlined",
//     isStandalone: true,
//   },
// };

// export const HelperTextFilled: Story = {
//   args: {
//     variant: "filled",
//     isStandalone: true,
//   },
// };

// export const ParentController: Story = {
//   render: function Render(args) {
//     const [value, setValue] = useState(args.options[1].value);

//     const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
//       setValue(e.target.value);
//     }, []);

//     const handleParentChange = useCallback(
//       (value: string) => () => {
//         setValue(value);
//       },
//       [],
//     );

//     console.log("ParentController: ", value);

//     return (
//       <div style={{ display: "inline-flex", flexDirection: "column" }}>
//         <Select
//           {...args}
//           variant="filled"
//           value={value}
//           onChange={handleChange}
//         />
//         <button
//           style={{ marginTop: 48 }}
//           onClick={handleParentChange(args.options[0].value)}
//         >
//           Change to first option
//         </button>
//         <button
//           style={{ marginTop: 24 }}
//           onClick={handleParentChange(args.options[3].value)}
//         >
//           Change to fourth option
//         </button>
//       </div>
//     );
//   },
// };

export const PropsControllerSelect: Story = {
  render: function Render(args) {
    const [value, setValue] = useState(args.options[2].value);

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    }, []);

    console.log("PropsControllerSelect: ", value);

    return (
      <div style={{ display: "inline-flex", flexDirection: "column" }}>
        <RadioGroup {...args} value={value} onChange={handleChange} />
      </div>
    );
  },
};

// export const RHFController: Story = {
//   render: function Render(args) {
//     const validationSchema = useMemo(
//       () =>
//         yup
//           .object({
//             select: yup
//               .string()
//               .required("This field is required!")
//               .max(10, "Text must be less than 10 characters"),
//           })
//           .required(),
//       [],
//     );

//     const { handleSubmit, control } = useForm<{ select: string }>({
//       resolver: yupResolver(validationSchema),
//       defaultValues: {
//         select: "",
//       },
//     });

//     const onSubmit = (data: { select: string }) => {
//       console.log("RHFController form data: ", data);
//     };

//     return (
//       <form
//         style={{ display: "inline-flex", flexDirection: "column" }}
//         onSubmit={handleSubmit(onSubmit)}
//       >
//         <Controller
//           control={control}
//           name="select"
//           render={({ field, formState: { errors } }) => {
//             return (
//               <Select
//                 {...args}
//                 {...field}
//                 error={errors.select}
//                 variant="outlined"
//               />
//             );
//           }}
//         />

//         <input type="submit" style={{ marginTop: 48 }} />
//       </form>
//     );
//   },
// };
