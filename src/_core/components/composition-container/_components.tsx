import { DEFAULT_COMPOSITION_CONTAINER_OFFSET } from "./_constants";
import { ICompositionContainerProps } from "./_types";
import { Styled } from "./_style";
import React from "react";

export const CompositionContainer = ({
  children,
  offset,
  style,
}: ICompositionContainerProps) => {
  const mergedOffset = {
    ...DEFAULT_COMPOSITION_CONTAINER_OFFSET,
    ...offset,
  };

  const mergedStyle = {
    backgroundColor: "#101418",
    padding: 24,
    ...(style ?? {}),
  };

  return (
    <Styled.Container $offset={mergedOffset} style={mergedStyle}>
      {children}
    </Styled.Container>
  );
};
