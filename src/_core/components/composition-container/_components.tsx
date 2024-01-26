import React from "react";
import { ICompositionContainer } from "./_types";
import { Styled } from "./_style";
import { COMPOSITION_CONTAINER_OFFSET } from "./_constants";

export const CompositionContainer = ({
  children,
  offset,
  bgColor = "#0a1929",
}: ICompositionContainer) => {
  const mergedOffset = {
    ...COMPOSITION_CONTAINER_OFFSET,
    ...offset,
  };

  return (
    <Styled.Container offset={mergedOffset} bgColor={bgColor}>
      {children}
    </Styled.Container>
  );
};
