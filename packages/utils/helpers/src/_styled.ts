import { TVariant } from "@phantomthief-react/utils.definations";
import { VARIANT } from "@phantomthief-react/utils.constants";
import { css } from "styled-components";

/**
 * Style for each variant of input/textare/element of form
 * @param props variant, disabled
 * @returns style sheets
 */
export const getVariantStyle = (props: {
  $variant: TVariant;
  $disabled: boolean;
}) => {
  if (props?.$variant === VARIANT.OUTLINED) {
    if (!props?.$disabled) {
      return css`
        border: 1px solid #ffffff3b;

        &:hover {
          border: 1px solid #ffffff;
        }

        &:focus,
        &:focus-visible,
        &:focus-within {
          border: 1px solid #90caf9;
        }
      `;
    }
    return css`
      border: 1px solid #ffffff80;
    `;
  }

  if (props?.$variant === VARIANT.FILLED) {
    if (!props?.$disabled) {
      return css`
        border-bottom: 1px solid #ffffffb3;
        background-color: #ffffff17;
        border-radius: 4px 4px 0px 0px;

        &:hover {
          border-bottom: 1px solid #ffffff;
          background-color: #ffffff21;
        }

        &:focus,
        &:focus-visible,
        &:focus-within {
          border-bottom: 1px solid #90caf9;
        }
      `;
    }
    return css`
      border-bottom: 1px solid #ffffff80;
      background-color: #ffffff17;
      border-radius: 4px 4px 0px 0px;
    `;
  }

  if (!props?.$disabled) {
    return css`
      border-bottom: 1px solid #ffffffb3;
      border-radius: 0px;

      &:hover {
        border-bottom: 1px solid #ffffff;
      }

      &:focus,
      &:focus-visible,
      &:focus-within {
        border-bottom: 1px solid #90caf9;
      }
    `;
  }

  return css`
    border-bottom: 1px solid #ffffff80;
    border-radius: 0px;
  `;
};
