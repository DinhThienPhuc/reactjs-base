import clsx from "clsx";
import React, { memo } from "react";

import { Styled } from "../_styles";
import { IAccordionItemProps } from "../_types";
import { AccordionItemHeader } from "./_item-header";

export const AccordionItem = memo(
  ({
    label,
    body,
    preIcon,
    postIcon,
    expandIcon,
    disabled,
    isExpanded,
    isOnlyOneExpand,
    id,
    bodyHtmlAttributes,
    expandIconHtmlAttributes,
    itemHeaderHtmlAttributes,
    itemHeaderLabelHtmlAttributes,
    htmlAttributes,
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
          id={id}
          isOnlyOneExpand={isOnlyOneExpand}
          itemHeaderHtmlAttributes={itemHeaderHtmlAttributes}
          expandIconHtmlAttributes={expandIconHtmlAttributes}
          itemHeaderLabelHtmlAttributes={itemHeaderLabelHtmlAttributes}
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
