import React, { memo } from "react";

import { Icon } from "@phantompurr-react/components.icon";

import { Styled } from "../_styles";
import { IAccordionItemExpandIconProps } from "../_types";

export const AccordionItemExpandIcon = memo(
  ({
    expandIcon,
    isExpanded,
    htmlAttributes,
  }: IAccordionItemExpandIconProps) => {
    return (
      <Styled.ItemHeaderExpandIcon
        {...htmlAttributes}
        $isExpanded={isExpanded}
        className="accordion-item__header__right__expand-icon"
      >
        {expandIcon ?? <Icon name="chevron-down" />}
      </Styled.ItemHeaderExpandIcon>
    );
  },
);

AccordionItemExpandIcon.displayName = "AccordionItemExpandIcon";
