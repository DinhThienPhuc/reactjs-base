import { CompositionContainer } from "@phantomthief/react.components.composition-container";
import React from "react";
import { Text } from "./_components";

export const DefaultText = () => (
  <CompositionContainer>
    <Text>Default text</Text>
  </CompositionContainer>
);

export const CustomColorText = () => (
  <CompositionContainer>
    <Text color="#c5cbce">Custom color text</Text>
  </CompositionContainer>
);

export const CustomSizeText = () => (
  <CompositionContainer>
    <Text size={24}>Custom color text</Text>
  </CompositionContainer>
);

export const CustomBoldText = () => (
  <CompositionContainer>
    <Text bold={700}>Custom bold text</Text>
  </CompositionContainer>
);

export const CustomVariantText = () => (
  <CompositionContainer>
    <Text variant="p" bold={700}>
      Custom bold text
    </Text>
  </CompositionContainer>
);
