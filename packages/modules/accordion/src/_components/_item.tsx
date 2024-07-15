import clsx from "clsx";
import React from "react";

import { useAccordionState } from "../_states";
import { Styled } from "../_styles";
import { IAccordionItemProps } from "../_types";
import { AccordionItemHeader } from "./_item-header";

export const AccordionItem = ({
  label,
  body,
  className,
  itemKey = "",
  isOnlyOneExpand,
  preIcon,
  postIcon,
  expandIcon,
  disabled,
  ...restProps
}: IAccordionItemProps) => {
  const isExpanded = useAccordionState((state) => !!state.itemKeys[itemKey]);

  return (
    <Styled.ItemContainer
      {...restProps}
      $isExpanded={isExpanded}
      className={clsx(
        "accordion-item",
        isExpanded && "accordion-item--isExpanded",
        className,
      )}
    >
      <AccordionItemHeader
        label={label}
        itemKey={itemKey}
        isOnlyOneExpand={isOnlyOneExpand}
        preIcon={preIcon}
        postIcon={postIcon}
        expandIcon={expandIcon}
        disabled={disabled}
      />
      <Styled.ItemContent
        $isExpanded={isExpanded}
        className={clsx(
          "accordion-item__content",
          isExpanded && "accordion-item__content--isExpanded",
        )}
      >
        {body}
      </Styled.ItemContent>
    </Styled.ItemContainer>
  );
};
