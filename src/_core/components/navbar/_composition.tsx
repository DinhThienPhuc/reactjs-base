import { Button } from "@phantomthief/react.components.button";
import { CompositionContainer } from "@phantomthief/react.components.composition-container";
import { Navbar } from "./_components";
import React from "react";
import { Text } from "@phantomthief/react.components.text";
import { VERNADA_FONT } from "@phantomthief/react.utils.constants";

const title = (
  <Text font={VERNADA_FONT} color="#94f2f4">
    Navbar Header
  </Text>
);
const leftButton = <Button>$</Button>;
const rightButton = <Button>&</Button>;
const commonStyles = { border: "1px solid white" };

export const DefaultNavbar = () => (
  <CompositionContainer>
    <Navbar style={commonStyles} title="Header" />
  </CompositionContainer>
);

export const FullNavbar = () => (
  <CompositionContainer>
    <Navbar
      style={commonStyles}
      title={title}
      leftButton={leftButton}
      rightButton={rightButton}
    />
  </CompositionContainer>
);
