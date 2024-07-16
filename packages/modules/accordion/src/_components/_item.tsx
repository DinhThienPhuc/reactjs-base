import React, { memo } from "react";
import clsx from "clsx";

import { AccordionItemHeader } from "./_item-header";
import { IAccordionItemProps } from "../_types";
import { Styled } from "../_styles";

export const AccordionItem = memo(
  ({
    label,
    body,
    className,
    preIcon,
    postIcon,
    expandIcon,
    disabled,
    isExpanded,
    isOnlyOneExpand,
    id,
    setItemDictionary,
    ...restProps
  }: IAccordionItemProps) => {
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
          preIcon={preIcon}
          postIcon={postIcon}
          expandIcon={expandIcon}
          disabled={disabled}
          isExpanded={isExpanded}
          id={id}
          isOnlyOneExpand={isOnlyOneExpand}
          setItemDictionary={setItemDictionary}
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
  },
);

AccordionItem.displayName = "AccordionItem";
