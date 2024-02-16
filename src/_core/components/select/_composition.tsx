import { Controller, useForm } from "react-hook-form";
import React, { ChangeEventHandler, useState } from "react";

import { CompositionContainer } from "@phantomthief/react.components.composition-container";
import { SELECT_VARIANT } from "./_constants";
import { Select } from "./_components";
import { logger } from "@phantomthief/react.utils.helpers";

const commonProps = {
  label: "Label",
  options: [
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
    {
      label: "Option 5",
      value: "option-5",
    },
  ],
  helperText: "Helper text",
  variant: SELECT_VARIANT.STANDARD,
  disabled: false,
  fullWidth: false,
  hiddenLabel: false,
  required: false,
};

export const DefaultSelect = () => (
  <CompositionContainer>
    <Select {...commonProps} />
  </CompositionContainer>
);

export const StateControllerInput = () => {
  const [value, setValue] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  return (
    <CompositionContainer>
      <Select {...commonProps} value={value} onChange={handleChange} />
    </CompositionContainer>
  );
};

export const RHFControllerInput = () => {
  const { handleSubmit, control } = useForm<Record<string, string>>({
    defaultValues: {
      select: "",
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
          name="select"
          render={({ field }) => <Select {...commonProps} {...field} />}
        />

        <input type="submit" style={{ marginTop: 24 }} />
      </form>
    </CompositionContainer>
  );
};
