import { IAccordionItemProps, IAccordionProps } from "./_types";
import { ChevronDown as IconChevronDown } from "react-feather";
import { useOnMounted } from "@phantomthief-react/hooks";
import React, { ReactNode, memo, useMemo } from "react";
import { useAccordionState } from "./_states";
import { Styled } from "./_styles";
import clsx from "clsx";

const AccordionItemHeaderExpandIcon = ({
  itemKey = "",
  expandIcon,
}: IAccordionItemProps) => {
  const isExpanded = useAccordionState((state) => !!state.itemKeys[itemKey]);

  return (
    <Styled.ItemHeaderExpandIcon
      $isExpanded={isExpanded}
      className="accordion-item__header__right__expand-icon"
    >
      {expandIcon ?? <IconChevronDown />}
    </Styled.ItemHeaderExpandIcon>
  );
};

const AccordionItemHeader = memo(
  ({
    label,
    itemKey = "",
    isOnlyOneExpand,
    preIcon,
    postIcon,
    expandIcon,
    disabled,
  }: IAccordionItemProps) => {
    const toggleKey = useAccordionState((state) => state.toggleKey);
    const toggleOnlyKey = useAccordionState((state) => state.toggleOnlyKey);

    return (
      <Styled.ItemHeader
        $disabled={disabled}
        className="accordion-item__header"
        onClick={() =>
          isOnlyOneExpand ? toggleOnlyKey(itemKey) : toggleKey(itemKey)
        }
      >
        <Styled.ItemHeaderSection
          $disabled={disabled}
          className="accordion-item__header__left"
        >
          {!!preIcon && (
            <Styled.ItemHeaderPreIcon className="accordion-item__header__left__pre-icon">
              {preIcon}
            </Styled.ItemHeaderPreIcon>
          )}
          {label}
        </Styled.ItemHeaderSection>
        <Styled.ItemHeaderSection
          $disabled={disabled}
          className="accordion-item__header__right"
        >
          {postIcon}
          <AccordionItemHeaderExpandIcon
            expandIcon={expandIcon}
            itemKey={itemKey}
          />
        </Styled.ItemHeaderSection>
      </Styled.ItemHeader>
    );
  },
);

AccordionItemHeader.displayName = "AccordionItemHeader";

const AccordionItem = ({
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
