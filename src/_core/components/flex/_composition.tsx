import { CompositionContainer } from "@phantomthief/react.components.composition-container";
import { Flex } from "./_components";
import React from "react";

const commonStyle = {
  width: 600,
  height: 360,
  border: "1px solid green",
  color: "#ffffff",
  padding: 24,
};

export const DefaultFlex = () => (
  <CompositionContainer>
    <Flex style={commonStyle}>Content</Flex>
  </CompositionContainer>
);

export const StartAlignFlex = () => (
  <CompositionContainer>
    <Flex style={commonStyle} justifyContent="flex-start">
      Content
    </Flex>
  </CompositionContainer>
);

export const EndAlignFlex = () => (
  <CompositionContainer>
    <Flex style={commonStyle} justifyContent="flex-end">
      Content
    </Flex>
  </CompositionContainer>
);

export const TopAlignFlex = () => (
  <CompositionContainer>
    <Flex style={commonStyle} alignItems="flex-start">
      Content
    </Flex>
  </CompositionContainer>
);

export const BottomAlignFlex = () => (
  <CompositionContainer>
    <Flex style={commonStyle} alignItems="flex-end">
      Content
    </Flex>
  </CompositionContainer>
);
