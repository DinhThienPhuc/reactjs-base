import { IAccordionItemProps, IAccordionProps } from "./_types";
import { useAccordionState } from "./_states";
import { Styled } from "./_styles";
import React from "react";
import clsx from "clsx";

const AccordionItem = ({
  label,
  body,
  className,
  itemKey = "",
  isOnlyOneExpand,
  ...restProps
}: IAccordionItemProps) => {
  const toggleKey = useAccordionState((state) => state.toggleKey);
  const toggleOnlyKey = useAccordionState((state) => state.toggleOnlyKey);
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
      <Styled.ItemHeader
        className="accordion-item__header"
        onClick={() =>
          isOnlyOneExpand ? toggleOnlyKey(itemKey) : toggleKey(itemKey)
        }
      >
        {label}
      </Styled.ItemHeader>
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

AccordionItem.displayName = "AccordionItem";

export const Accordion = ({
  items,
  className,
  isOnlyOneExpand = false,
  ...restProps
}: IAccordionProps) => {
  return (
    <Styled.Container
      {...restProps}
      className={clsx("accordion", className)}
      data-testid="accordion"
    >
      {items?.map((item: IAccordionItemProps) => (
        <AccordionItem
          {...item}
          key={item.key}
          itemKey={item.key}
          isOnlyOneExpand={isOnlyOneExpand}
        />
      ))}
    </Styled.Container>
  );
};
