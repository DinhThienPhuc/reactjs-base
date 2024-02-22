import { CompositionContainer } from "@phantomthief/react.components.composition-container";
import React from "react";
import { Text } from "./_components";

export const DefaultText = () => (
  <CompositionContainer>
    <Text color="#ffffff">Default text</Text>
  </CompositionContainer>
);

export const CustomColorText = () => (
  <CompositionContainer>
    <Text color="#c5cbce">Custom color text</Text>
  </CompositionContainer>
);

export const CustomSizeText = () => (
  <CompositionContainer>
    <Text color="#ffffff" size={24}>
      Custom size text
    </Text>
  </CompositionContainer>
);

export const CustomBoldText = () => (
  <CompositionContainer>
    <Text color="#ffffff" bold={700}>
      Custom bold text
    </Text>
  </CompositionContainer>
);

export const CustomVariantText = () => (
  <CompositionContainer>
    <Text color="#ffffff" variant="p" bold={700}>
      Custom variant text
    </Text>
  </CompositionContainer>
);

export const CustomFontText = () => (
  <CompositionContainer>
    <Text color="#ffffff" font="Arial, Helvetica, sans-serif">
      Custom font text
    </Text>
  </CompositionContainer>
);
