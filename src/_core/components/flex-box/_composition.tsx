import { CompositionContainer } from "@phantomthief/react.components.composition-container";
import { FlexBox } from "./_components";
import React from "react";

const commonStyle = {
  width: 600,
  height: 360,
  border: "1px solid green",
  color: "#ffffff",
  padding: 24,
};

export const DefaultFlexBox = () => (
  <CompositionContainer>
    <FlexBox style={commonStyle}>Content</FlexBox>
  </CompositionContainer>
);

export const StartAlignFlexBox = () => (
  <CompositionContainer>
    <FlexBox style={commonStyle} justifyContent="flex-start">
      Content
    </FlexBox>
  </CompositionContainer>
);

export const EndAlignFlexBox = () => (
  <CompositionContainer>
    <FlexBox style={commonStyle} justifyContent="flex-end">
      Content
    </FlexBox>
  </CompositionContainer>
);

export const TopAlignFlexBox = () => (
  <CompositionContainer>
    <FlexBox style={commonStyle} alignItems="flex-start">
      Content
    </FlexBox>
  </CompositionContainer>
);

export const BottomAlignFlexBox = () => (
  <CompositionContainer>
    <FlexBox style={commonStyle} alignItems="flex-end">
      Content
    </FlexBox>
  </CompositionContainer>
);
