import { Controller, useForm } from "react-hook-form";
import React, { ChangeEvent, useCallback, useState } from "react";

import { CompositionContainer } from "@phantomthief/react.components.composition-container";
import { ArrowDownCircle as IconArrowDownCircle } from "react-feather";
import { Select } from "./_components";
import { logger } from "@phantomthief/react.utils.helpers";

const options = [
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
];

const labelProps = {
  children: "Label",
};

const postAdormentProps = {
  children: <IconArrowDownCircle />,
};

const helperTextProps = {
  children: "helper text",
};

const commonProps = {
  options,
  labelProps,
  postAdormentProps,
  helperTextProps,
};

export const DefaultSelect = () => (
  <CompositionContainer>
    <Select options={options} />
  </CompositionContainer>
);

export const OutlinedSelect = () => (
  <CompositionContainer>
    <Select options={options} variant="outlined" />
  </CompositionContainer>
);

export const FilledSelect = () => (
  <CompositionContainer>
    <Select options={options} variant="filled" />
  </CompositionContainer>
);

export const DisabledSelect = () => (
  <CompositionContainer>
    <Select options={options} disabled />
  </CompositionContainer>
);

export const FullWidthSelect = () => (
  <CompositionContainer>
    <Select options={options} variant="outlined" fullWidth />
  </CompositionContainer>
);

export const RequiredSelect = () => (
  <CompositionContainer>
    <Select {...commonProps} variant="filled" required />
  </CompositionContainer>
);

export const LabeledDefaultSelect = () => (
  <CompositionContainer>
    <Select options={options} labelProps={labelProps} />
  </CompositionContainer>
);
export const LabeledOutlinedSelect = () => (
  <CompositionContainer>
    <Select options={options} labelProps={labelProps} variant="outlined" />
  </CompositionContainer>
);
export const LabeledFilledSelect = () => (
  <CompositionContainer>
    <Select options={options} labelProps={labelProps} variant="filled" />
  </CompositionContainer>
);

export const CustomPostAdormentSelect = () => (
  <CompositionContainer>
    <Select {...commonProps} />
  </CompositionContainer>
);

export const HelperTextDefaultSelect = () => (
  <CompositionContainer>
    <Select {...commonProps} helperTextProps={helperTextProps} />
  </CompositionContainer>
);

export const HelperTextOutlinedSelect = () => (
  <CompositionContainer>
    <Select {...commonProps} variant="outlined" />
  </CompositionContainer>
);

export const HelperTextFilledSelect = () => (
  <CompositionContainer>
    <Select {...commonProps} variant="filled" />
  </CompositionContainer>
);

export const ParentControllerSelect = () => {
  const [value, setValue] = useState(options[1].value);

  const handleChange = useCallback(
    (value: string) => () => {
      setValue(value);
    },
    [],
  );

  logger.log("ParentControllerSelect: ", value);

  return (
    <CompositionContainer>
      <div style={{ display: "inline-flex", flexDirection: "column" }}>
        <Select {...commonProps} variant="filled" value={value} />
        <button
          style={{ marginTop: 48 }}
          onClick={handleChange(options[0].value)}
        >
          Change to first option
        </button>
        <button
          style={{ marginTop: 24 }}
          onClick={handleChange(options[3].value)}
        >
          Change to fourth option
        </button>
      </div>
    </CompositionContainer>
  );
};

export const PropsControllerSelect = () => {
  const [value, setValue] = useState(options[2].value);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  logger.log("PropsControllerSelect: ", value);

  return (
    <CompositionContainer>
      <div style={{ display: "inline-flex", flexDirection: "column" }}>
        <Select
          {...commonProps}
          variant="outlined"
          value={value}
          onChange={handleChange}
        />
      </div>
    </CompositionContainer>
  );
};

export const RHFControllerSelect = () => {
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
    logger.log("RHF form data: ", data);
  };

  logger.log("errors", errors);

  return (
    <CompositionContainer>
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
                {...field}
                {...commonProps}
                isError={!!errors.select}
                variant="outlined"
              />
            );
          }}
        />

        <input type="submit" style={{ marginTop: 48 }} />
      </form>
    </CompositionContainer>
  );
};
