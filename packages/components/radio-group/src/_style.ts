import styled from "styled-components";

import { FONT } from "@phantomthief-react/utils";

export const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
  Label: styled.span<{ $hasValue?: boolean }>`
    transition: color 200ms ease-in-out;
    color: ${({ $hasValue }) => ($hasValue ? "#90caf9" : "#ffffffb3")};
    font-size: 16px;
    font-family: ${FONT.VERNADA};
  `,
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
  OptionLabelText: styled.span`
    font-family: ${FONT.VERNADA};
    font-size: 16px;
    color: #ffffff;
  `,
};
