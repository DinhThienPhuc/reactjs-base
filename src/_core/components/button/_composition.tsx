import React from "react";
import { Button } from "./_components";
import { CompositionContainer } from "@phantomthief/react.components.composition-container";
import { logger } from "@phantomthief/react.utils.helpers";

const onClick = () => logger.log("Click the button to perform action!");

export const DefaultButton = () => (
  <CompositionContainer>
    <Button onClick={onClick}>Click button!!</Button>
  </CompositionContainer>
);

export const ContainedButton = () => (
  <CompositionContainer>
    <Button variant="contained" onClick={onClick}>
      Click button!!
    </Button>
  </CompositionContainer>
);

export const OutlinedButton = () => (
  <CompositionContainer>
    <Button variant="outlined" onClick={onClick}>
      Click button!!
    </Button>
  </CompositionContainer>
);

export const SmallButton = () => (
  <CompositionContainer>
    <Button variant="outlined" size="small" onClick={onClick}>
      Click button!!
    </Button>
  </CompositionContainer>
);

export const MediumButton = () => (
  <CompositionContainer>
    <Button variant="outlined" size="medium" onClick={onClick}>
      Click button!!
    </Button>
  </CompositionContainer>
);

export const LargeButton = () => (
  <CompositionContainer>
    <Button variant="outlined" size="large" onClick={onClick}>
      Click button!!
    </Button>
  </CompositionContainer>
);

export const LoadingButton = () => (
  <CompositionContainer>
    <Button variant="outlined" loading onClick={onClick}>
      Click button!!
    </Button>
  </CompositionContainer>
);

export const CustomLoadingButton = () => (
  <CompositionContainer>
    <Button
      variant="outlined"
      loading
      loadingComponent={<span>...</span>}
      onClick={onClick}
    >
      Click button!!
    </Button>
  </CompositionContainer>
);

export const CustomClassButton = () => (
  <CompositionContainer>
    <Button
      variant="outlined"
      onClick={onClick}
      className="custom-class-for-button"
    >
      Click button!!
    </Button>
  </CompositionContainer>
);
