import { ChevronDown as IconChevronDown } from "react-feather";
import { IAccordionItemProps } from "../_types";
import { useAccordionState } from "../_states";
import { Styled } from "../_styles";
import React from "react";

export const AccordionItemExpandIcon = ({
  key = "",
  expandIcon,
}: IAccordionItemProps) => {
  const isExpanded = useAccordionState((state) => !!state.itemKeys[key]);

  return (
    <Styled.ItemHeaderExpandIcon
      $isExpanded={isExpanded}
      className="accordion-item__header__right__expand-icon"
    >
      {expandIcon ?? <IconChevronDown />}
    </Styled.ItemHeaderExpandIcon>
  );
};
