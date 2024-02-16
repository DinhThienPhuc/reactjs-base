import { Controller, useForm } from "react-hook-form";
import React, { ChangeEventHandler, useState } from "react";

import { CompositionContainer } from "@phantomthief/react.components.composition-container";
import { INPUT_VARIANT } from "./_constants";
import { Input } from "./_components";
import { Text } from "@phantomthief/react.components.text";
import { VERNADA_FONT } from "@phantomthief/react.utils.constants";
import { logger } from "@phantomthief/react.utils.helpers";

const PreAdorment = <Text font={VERNADA_FONT}>@</Text>;
const PostAdorment = <Text font={VERNADA_FONT}>&</Text>;
const commonProps = {
  label: "Label",
  preAdorment: null,
  postAdorment: null,
  helperText: "Helper text",
  required: false,
  disabled: false,
  hiddenLabel: false,
  fullWidth: false,
  variant: INPUT_VARIANT.STANDARD,
  clear: undefined,
};

export const DefaultInput = () => (
  <CompositionContainer>
    <Input />
  </CompositionContainer>
);

export const FilledInput = () => (
  <CompositionContainer>
    <Input {...commonProps} variant={INPUT_VARIANT.FILLED} />
  </CompositionContainer>
);
export const OutlinedInput = () => (
  <CompositionContainer>
    <Input {...commonProps} variant={INPUT_VARIANT.OUTLINED} />
  </CompositionContainer>
);

export const CustomLabelInput = () => (
  <CompositionContainer>
    <Input {...commonProps} label="Option 123" />
  </CompositionContainer>
);

export const CustomPreAdormentInput = () => (
  <CompositionContainer>
    <Input {...commonProps} preAdorment={PreAdorment} />
  </CompositionContainer>
);

export const CustomPostAdormentInput = () => (
  <CompositionContainer>
    <Input {...commonProps} postAdorment={PostAdorment} />
  </CompositionContainer>
);

export const CustomHelperTextInput = () => (
  <CompositionContainer>
    <Input {...commonProps} helperText="This is an input" />
  </CompositionContainer>
);

export const RequiredInput = () => (
  <CompositionContainer>
    <Input {...commonProps} required={true} />
  </CompositionContainer>
);

export const DisabledInput = () => (
  <CompositionContainer>
    <Input {...commonProps} disabled={true} />
  </CompositionContainer>
);

export const HiddenLabelInput = () => (
  <CompositionContainer>
    <Input {...commonProps} hiddenLabel={true} />
  </CompositionContainer>
);

export const FullWidthInput = () => (
  <CompositionContainer>
    <Input {...commonProps} fullWidth={true} />
  </CompositionContainer>
);

export const StateControllerInput = () => {
  const [value, setValue] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  return (
    <CompositionContainer>
      <Input {...commonProps} value={value} onChange={handleChange} />
    </CompositionContainer>
  );
};

export const RHFControllerInput = () => {
  const { handleSubmit, control } = useForm<Record<string, string>>({
    defaultValues: {
      input: "",
    },
  });

  const onSubmit = (data: Record<string, string>) => {
    logger.log("RHF form data: ", data);
  };

  return (
    <CompositionContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="input"
          render={({ field }) => <Input {...commonProps} {...field} />}
        />

        <input type="submit" style={{ marginTop: 24 }} />
      </form>
    </CompositionContainer>
  );
};
