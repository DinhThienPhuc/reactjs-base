import React, { useState } from "react";
import clsx from "clsx";

import { IAccordionItem, IAccordionProps, TItemDictionary } from "../_types";
import { AccordionItem } from "./_item";
import { Styled } from "../_styles";

export const Accordion = ({
  items,
  className,
  isOnlyOneExpand = false,
  expandKeys,
  preIcon = null,
  postIcon = null,
  expandIcon = null,
  disabled = false,
  ...restProps
}: IAccordionProps) => {
  const [itemDictionary, setItemDictionary] = useState<TItemDictionary>(() =>
    expandKeys
      ? expandKeys.reduce((acc: TItemDictionary, key: string) => {
          acc[key] = true;
          return acc;
        }, {})
      : {},
  );

  return (
    <Styled.Container
      {...restProps}
      className={clsx("accordion", className)}
      data-testid="accordion"
    >
      {items?.map((item: IAccordionItem) => {
        return (
          <AccordionItem
            {...item}
            key={item.key}
            id={item.key}
            isOnlyOneExpand={isOnlyOneExpand}
            preIcon={item.preIcon ?? preIcon}
            postIcon={item.postIcon ?? postIcon}
            expandIcon={item.expandIcon ?? expandIcon}
            disabled={item.disabled ?? disabled}
            isExpanded={item.key ? !!itemDictionary[item.key] : false}
            setItemDictionary={setItemDictionary}
          />
        );
      })}
    </Styled.Container>
  );
};
