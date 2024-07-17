import clsx from "clsx";
import React, { useState } from "react";

import { Styled } from "../_styles";
import { IAccordionItem, IAccordionProps, TItemDictionary } from "../_types";
import { AccordionItem } from "./_item";

export const Accordion = ({
  items,
  className,
  isOnlyOneExpand = false,
  expandIds,
  preIcon = null,
  postIcon = null,
  expandIcon = null,
  disabled = false,
  htmlAttributes,
}: IAccordionProps) => {
  const [itemDictionary, setItemDictionary] = useState<TItemDictionary>(() =>
    expandIds
      ? expandIds.reduce((acc: TItemDictionary, id: string) => {
          acc[id] = true;
          return acc;
        }, {})
      : {},
  );

  return (
    <Styled.Container
      {...htmlAttributes}
      className={clsx("accordion", className)}
    >
      {items?.map((item: IAccordionItem) => {
        return (
          <AccordionItem
            key={item.id}
            label={item.label}
            body={item.body}
            preIcon={preIcon ?? item.preIcon}
            postIcon={postIcon ?? item.postIcon}
            expandIcon={expandIcon ?? item.expandIcon}
            disabled={disabled || item.disabled}
            isExpanded={item.id ? !!itemDictionary[item.id] : false}
            isOnlyOneExpand={isOnlyOneExpand}
            id={item.id}
            bodyHtmlAttributes={item.bodyHtmlAttributes}
            expandIconHtmlAttributes={item.expandIconHtmlAttributes}
            itemHeaderHtmlAttributes={item.itemHeaderHtmlAttributes}
            itemHeaderLabelHtmlAttributes={item.itemHeaderLabelHtmlAttributes}
            htmlAttributes={item.htmlAttributes}
            setItemDictionary={setItemDictionary}
          />
        );
      })}
    </Styled.Container>
  );
};
