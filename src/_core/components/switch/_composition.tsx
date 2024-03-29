import { Controller, useForm } from "react-hook-form";
import React, { useCallback, useState } from "react";

import { CompositionContainer } from "@phantomthief/react.components.composition-container";
import { Switch } from "./_components";
import { Text } from "@phantomthief/react.components.text";
import { VERNADA_FONT } from "@phantomthief/react.utils.constants";
import { logger } from "@phantomthief/react.utils.helpers";

const commonProps = {
  leftLabel: <Text font={VERNADA_FONT}>Left</Text>,
  rightLabel: <Text font={VERNADA_FONT}>Right</Text>,
};

export const DefaultSwitch = () => {
  return (
    <CompositionContainer>
      <Switch />
    </CompositionContainer>
  );
};

export const CustomLabelSwitch = () => {
  return (
    <CompositionContainer>
      <Switch leftLabel="Off" rightLabel="On" />
    </CompositionContainer>
  );
};

export const DisabledSwitch = () => {
  return (
    <CompositionContainer>
      <Switch {...commonProps} disabled />
    </CompositionContainer>
  );
};

export const StateControllerSwitch = () => {
  const [isSwitchOn, setSwitchOn] = useState(false);

  const handleChange = useCallback((value: boolean) => {
    setSwitchOn(value);
  }, []);

  return (
    <CompositionContainer>
      <Switch {...commonProps} value={isSwitchOn} onChange={handleChange} />
    </CompositionContainer>
  );
};

export const RHFControllerSwitch = () => {
  const { handleSubmit, control } = useForm<Record<string, boolean>>({
    defaultValues: {
      switch: false,
    },
  });

  const onSubmit = (data: Record<string, boolean>) => {
    logger.log("RHF form data: ", data);
  };

  return (
    <CompositionContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="switch"
          render={({ field }) => <Switch {...commonProps} {...field} />}
        />

        <input type="submit" style={{ marginTop: 24 }} />
      </form>
    </CompositionContainer>
  );
};
