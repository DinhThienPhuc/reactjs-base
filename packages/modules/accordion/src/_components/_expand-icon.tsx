import { Icon } from "@phantomthief-react/components";
import { IAccordionItemProps } from "../_types";
import { useAccordionState } from "../_states";
import { Styled } from "../_styles";
import React from "react";

export const AccordionItemExpandIcon = ({
  itemKey = "",
  expandIcon,
}: IAccordionItemProps) => {
  const isExpanded = useAccordionState((state) => !!state.itemKeys[itemKey]);

  return (
    <Styled.ItemHeaderExpandIcon
      $isExpanded={isExpanded}
      className="accordion-item__header__right__expand-icon"
    >
      {expandIcon ?? <Icon name="chevron-down" />}
    </Styled.ItemHeaderExpandIcon>
  );
};
