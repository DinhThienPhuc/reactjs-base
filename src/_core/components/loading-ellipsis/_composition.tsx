import { CompositionContainer } from "@phantomthief/react.components.composition-container";
import { LoadingEllipsis } from "./_components";
import React from "react";

export const DefaultLoadingEllipsis = () => (
  <CompositionContainer>
    <LoadingEllipsis />
  </CompositionContainer>
);

export const FullScreenLoadingEllipsis = () => (
  <CompositionContainer>
    <LoadingEllipsis fullScreen />
  </CompositionContainer>
);

export const CustomSizeLoadingEllipsis = () => (
  <CompositionContainer>
    <LoadingEllipsis size={16} />
  </CompositionContainer>
);

export const CustomColorLoadingEllipsis = () => (
  <CompositionContainer>
    <LoadingEllipsis color="#c5cbce" />
  </CompositionContainer>
);
