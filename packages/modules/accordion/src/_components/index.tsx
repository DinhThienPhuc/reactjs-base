import clsx from "clsx";
import React, { ReactNode, useMemo } from "react";

import { useOnMounted } from "@phantomthief-react/hooks";

import { useAccordionState } from "../_states";
import { Styled } from "../_styles";
import { IAccordionItemProps, IAccordionProps } from "../_types";
import { AccordionItem } from "./_item";

export const Accordion = ({
  items,
  className,
  isOnlyOneExpand = false,
  expandKeys = [],
  preIcon = null,
  postIcon = null,
  expandIcon = null,
  disabled = false,
  ...restProps
}: IAccordionProps) => {
  const initKeys = useAccordionState((state) => state.initKeys);

  const { listItems, listExpandkeys } = useMemo(() => {
    const listItems: ReactNode[] = [];
    let listExpandkeys = expandKeys;
    items?.forEach((item: IAccordionItemProps) => {
      listItems.push(
        <AccordionItem
          {...item}
          key={item.key}
          itemKey={item.key}
          isOnlyOneExpand={isOnlyOneExpand}
          preIcon={item.preIcon ?? preIcon}
          postIcon={item.postIcon ?? postIcon}
          expandIcon={item.expandIcon ?? expandIcon}
          disabled={item.disabled ?? disabled}
        />,
      );
      listExpandkeys = listExpandkeys.filter((expandKey: string) => {
        if ((item.disabled || disabled) && expandKey === item.key) {
          return false;
        }
        return true;
      });
    });
    return {
      listItems,
      listExpandkeys,
    };
  }, [
    disabled,
    expandIcon,
    expandKeys,
    isOnlyOneExpand,
    items,
    postIcon,
    preIcon,
  ]);

  useOnMounted(() => {
    if (listExpandkeys.length) {
      initKeys(listExpandkeys, isOnlyOneExpand);
    }
  });

  return (
    <Styled.Container
      {...restProps}
      className={clsx("accordion", className)}
      data-testid="accordion"
    >
      {listItems}
    </Styled.Container>
  );
};
