import React, { memo } from "react";

import { Icon } from "@phantomthief-react/components";

import { IAccordionItemExpandIconProps } from "../_types";
import { Styled } from "../_styles";

export const AccordionItemExpandIcon = memo(
  ({ expandIcon, isExpanded }: IAccordionItemExpandIconProps) => {
    return (
      <Styled.ItemHeaderExpandIcon
        $isExpanded={isExpanded}
        className="accordion-item__header__right__expand-icon"
      >
        {expandIcon ?? <Icon name="chevron-down" />}
      </Styled.ItemHeaderExpandIcon>
    );
  },
);

AccordionItemExpandIcon.displayName = "AccordionItemExpandIcon";
