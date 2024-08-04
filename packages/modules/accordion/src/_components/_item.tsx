import clsx from "clsx";
import React, { memo } from "react";

import { Styled } from "../_styles";
import { IAccordionItemProps } from "../_types";
import { AccordionItemHeader } from "./_item-header";

export const AccordionItem = memo(
  ({
    id,
    label,
    body,
    preIcon,
    postIcon,
    expandIcon,
    disabled,
    bodyHtmlAttributes,
    htmlAttributes,
    expandIconHtmlAttributes,
    itemHeaderHtmlAttributes,
    itemHeaderLabelHtmlAttributes,
    isExpanded,
    isOnlyOneExpand,
    setItemDictionary,
  }: IAccordionItemProps) => {
    return (
      <Styled.ItemContainer
        {...htmlAttributes}
        $isExpanded={isExpanded}
        className={clsx(
          "accordion-item",
          isExpanded && "accordion-item--isExpanded",
        )}
      >
        <AccordionItemHeader
          label={label}
          preIcon={preIcon}
          postIcon={postIcon}
          expandIcon={expandIcon}
          disabled={disabled}
          isExpanded={isExpanded}
          isOnlyOneExpand={isOnlyOneExpand}
          id={id}
          expandIconHtmlAttributes={expandIconHtmlAttributes}
          htmlAttributes={itemHeaderHtmlAttributes}
          labelHtmlAttributes={itemHeaderLabelHtmlAttributes}
          setItemDictionary={setItemDictionary}
        />
        <Styled.ItemContent
          {...bodyHtmlAttributes}
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
