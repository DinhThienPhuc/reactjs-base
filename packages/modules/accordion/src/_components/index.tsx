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
            id={item.id}
            label={item.label}
            body={item.body}
            preIcon={preIcon ?? item.preIcon}
            postIcon={postIcon ?? item.postIcon}
            expandIcon={expandIcon ?? item.expandIcon}
            disabled={disabled || item.disabled}
            bodyHtmlAttributes={item.bodyHtmlAttributes}
            htmlAttributes={item.htmlAttributes}
            expandIconHtmlAttributes={item.expandIconHtmlAttributes}
            itemHeaderHtmlAttributes={item.itemHeaderHtmlAttributes}
            itemHeaderLabelHtmlAttributes={item.itemHeaderLabelHtmlAttributes}
            isExpanded={item.id ? !!itemDictionary[item.id] : false}
            isOnlyOneExpand={isOnlyOneExpand}
            setItemDictionary={setItemDictionary}
          />
        );
      })}
    </Styled.Container>
  );
};
