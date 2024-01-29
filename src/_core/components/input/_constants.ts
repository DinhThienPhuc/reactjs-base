import { VARIANT } from "@phantomthief/react.utils.constants";
import { TInputVariant } from "./_types";

export const INPUT_VARIANT: Record<string, TInputVariant> = {
  OUTLINED: VARIANT.OUTLINED as TInputVariant,
  FILLED: VARIANT.FILLED,
  STANDARD: VARIANT.STANDARD,
};
