import { Typography } from "@phantomthief-react/components.typography";
import { TRadioGroupDirection } from "./_types";
import styled from "styled-components";

export const Styled = {
  Container: styled.div<{ $direction: TRadioGroupDirection }>`
    display: flex;
    gap: 16px;
    flex-direction: ${({ $direction }) => $direction};
  `,
  Label: styled(Typography)``,
  OptionLabel: styled.label`
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
  `,
  OptionInput: styled.input`
    appearance: none;
    width: 16px;
    height: 16px;
    border: 2px solid #90caf9;
    border-radius: 50%;

    &::before {
      transition: transform 200ms ease-in-out;
      content: "";
      display: block;
      margin-top: 2px;
      margin-left: 2px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #90caf9;
      transform: scale(0);
    }

    &:checked::before {
      transform: scale(1);
    }

    &[type="radio" i] {
      margin: 0;
    }
  `,
};
