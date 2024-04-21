import { TVariant } from "@phantomthief/react.utils.definations";
import { VARIANT } from "@phantomthief/react.utils.constants";
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
        border-radius: 4px 4px 0px 0px;
        background-color: #ffffff17;

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
    `;
  }

  if (!props?.$disabled) {
    return css`
      border-bottom: 1px solid #ffffffb3;
      border-radius: 4px 4px 0px 0px;

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
  `;
};

/**
 * Style for label of input/textare/element of form, depend on variant
 * @param props variant, isLabelCollapsed
 * @returns style sheets
 */
export const getLabelStyle = <TVariant>(props: {
  $variant: TVariant;
  $isLabelCollapsed: boolean;
}) => {
  if (props?.$variant === VARIANT.STANDARD) {
    if (props?.$isLabelCollapsed) {
      return css`
        font-size: 12px;
        top: 12px;
        left: 0px;
        color: #90caf9;
      `;
    }
    return css`
      left: 0px;
    `;
  }
  if (props?.$isLabelCollapsed) {
    return css`
      font-size: 12px;
      top: 12px;
      left: 14px;
      color: #90caf9;
    `;
  }
  return css`
    left: 14px;
  `;
};
