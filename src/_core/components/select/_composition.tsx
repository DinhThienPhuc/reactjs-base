import { CompositionContainer } from "@phantomthief/react.components.composition-container";
import { ArrowDownCircle as IconArrowDownCircle } from "react-feather";
import React from "react";
import { Select } from "./_components";

const options = [
  {
    label: "Option 1",
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
];

const labelProps = {
  text: "Label",
};

const postAdormentProps = {
  content: <IconArrowDownCircle />,
};

const helperTextProps = {
  text: "helper text",
};

export const DefaultSelect = () => (
  <CompositionContainer>
    <Select options={options} />
  </CompositionContainer>
);

export const OutlinedSelect = () => (
  <CompositionContainer>
    <Select
      options={options}
      variant="outlined"
      // disabled = false,
      // fullWidth = false,
      // required = false,
      // tabIndex = -1,
      // optionGroupClassName,
      // labelProps,
      // postAdormentProps,
      // helperTextProps,
    />
  </CompositionContainer>
);

export const FilledSelect = () => (
  <CompositionContainer>
    <Select
      options={options}
      variant="filled"
      // disabled = false,
      // fullWidth = false,
      // required = false,
      // tabIndex = -1,
      // optionGroupClassName,
      // labelProps,
      // postAdormentProps,
      // helperTextProps,
    />
  </CompositionContainer>
);

export const DisabledSelect = () => (
  <CompositionContainer>
    <Select
      options={options}
      variant="filled"
      disabled
      // fullWidth = false,
      // required = false,
      // tabIndex = -1,
      // optionGroupClassName,
      // labelProps,
      // postAdormentProps,
      // helperTextProps,
    />
  </CompositionContainer>
);

export const FullWidthSelect = () => (
  <CompositionContainer>
    <Select
      options={options}
      variant="filled"
      fullWidth
      // required = false,
      // tabIndex = -1,
      // optionGroupClassName,
      // labelProps,
      // postAdormentProps,
      // helperTextProps,
    />
  </CompositionContainer>
);

export const RequiredSelect = () => (
  <CompositionContainer>
    <Select
      options={options}
      required
      // tabIndex = -1,
      // optionGroupClassName,
      // labelProps,
      // postAdormentProps,
      // helperTextProps,
    />
  </CompositionContainer>
);

export const LabeledSelect = () => (
  <CompositionContainer>
    <Select
      options={options}
      labelProps={labelProps}
      // postAdormentProps,
      // helperTextProps,
    />
  </CompositionContainer>
);

export const CustomPostAdormentSelect = () => (
  <CompositionContainer>
    <Select
      options={options}
      labelProps={labelProps}
      postAdormentProps={postAdormentProps}
      // helperTextProps,
    />
  </CompositionContainer>
);

export const HelperTextSelect = () => (
  <CompositionContainer>
    <Select
      options={options}
      labelProps={labelProps}
      postAdormentProps={postAdormentProps}
      helperTextProps={helperTextProps}
    />
  </CompositionContainer>
);
