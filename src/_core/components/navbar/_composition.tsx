import { Button } from "@phantomthief/react.components.button";
import { CompositionContainer } from "@phantomthief/react.components.composition-container";
import { Navbar } from "./_components";
import React from "react";
import { Text } from "@phantomthief/react.components.text";
import { VERNADA_FONT } from "@phantomthief/react.utils.constants";

const title = <Text font={VERNADA_FONT}>Navbar</Text>;
const leftButton = <Button>$</Button>;
const rightButton = <Button>&</Button>;

export const DefaultNavbar = () => (
  <CompositionContainer>
    <Navbar />
  </CompositionContainer>
);

// TODO: update title to use `Text`

export const FullNavbar = () => (
  <CompositionContainer>
    <Navbar title={title} leftButton={leftButton} rightButton={rightButton} />
  </CompositionContainer>
);
