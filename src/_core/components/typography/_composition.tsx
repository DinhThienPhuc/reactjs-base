import { CompositionContainer } from "@phantomthief/react.components.composition-container";
import React from "react";
import { Typography } from "./_components";

export const DefaultText = () => (
  <CompositionContainer>
    <Typography color="#ffffff">Default text</Typography>
  </CompositionContainer>
);

export const CustomColorText = () => (
  <CompositionContainer>
    <Typography color="#c5cbce">Custom color text</Typography>
  </CompositionContainer>
);

export const CustomSizeText = () => (
  <CompositionContainer>
    <Typography color="#ffffff" size={24}>
      Custom size text
    </Typography>
  </CompositionContainer>
);

export const CustomBoldText = () => (
  <CompositionContainer>
    <Typography color="#ffffff" bold={700}>
      Custom bold text
    </Typography>
  </CompositionContainer>
);

export const CustomVariantText = () => (
  <CompositionContainer>
    <Typography color="#ffffff" variant="p" bold={700}>
      Custom variant text
    </Typography>
  </CompositionContainer>
);

export const CustomFontText = () => (
  <CompositionContainer>
    <Typography color="#ffffff" font="Arial, Helvetica, sans-serif">
      Custom font text
    </Typography>
  </CompositionContainer>
);
