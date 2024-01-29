import React from "react";
import { ICompositionContainerProps } from "./_types";
import { Styled } from "./_style";
import { COMPOSITION_CONTAINER_OFFSET } from "./_constants";

export const CompositionContainer = ({
  children,
  offset,
  style,
}: ICompositionContainerProps) => {
  const mergedOffset = {
    ...COMPOSITION_CONTAINER_OFFSET,
    ...offset,
  };

  const mergedStyle = {
    backgroundColor: "#0a1929",
    padding: 24,
    ...(style ?? {}),
  };

  return (
    <Styled.Container offset={mergedOffset} style={mergedStyle}>
      {children}
    </Styled.Container>
  );
};
