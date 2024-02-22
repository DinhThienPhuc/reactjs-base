import { CompositionContainer } from "@phantomthief/react.components.composition-container";
import { LoadingRipple } from "./_components";
import React from "react";

export const DefaultLoadingRipple = () => (
  <CompositionContainer>
    <LoadingRipple />
  </CompositionContainer>
);

export const FullScreenLoadingRipple = () => (
  <CompositionContainer>
    <LoadingRipple fullScreen />
  </CompositionContainer>
);

export const CustomSizeLoadingRipple = () => (
  <CompositionContainer>
    <LoadingRipple size={120} />
  </CompositionContainer>
);

export const CustomColorLoadingRipple = () => (
  <CompositionContainer>
    <LoadingRipple color="#c5cbce" />
  </CompositionContainer>
);
