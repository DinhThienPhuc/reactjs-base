import React, { memo, useMemo } from "react";

import { IAccordionItemHeaderProps, TItemDictionary } from "../_types";
import { AccordionItemHeaderRight } from "./_item-header-right";
import { AccordionItemExpandIcon } from "./_expand-icon";
import { useWhyDidYouUpdate } from "ahooks";
import { Styled } from "../_styles";

export const AccordionItemHeader = memo(
  ({
    label,
    preIcon,
    postIcon,
    expandIcon,
    disabled,
    isExpanded,
    isOnlyOneExpand,
    id,
    setItemDictionary,
  }: IAccordionItemHeaderProps) => {
    const onClickItemHeader = (key: string) => () => {
      if (isOnlyOneExpand) {
        setItemDictionary((prev) => ({
          ...Object.keys(prev).reduce(
            (acc: TItemDictionary, currentKey: string) => {
              acc[currentKey] = false;
              return acc;
            },
            {},
          ),
          [key]: true,
        }));
      } else {
        setItemDictionary((prev) => ({ ...prev, [key]: !prev[key] }));
      }
    };

    const leftPanel = useMemo(() => {
      return (
        <Styled.ItemHeaderSection
          $disabled={disabled}
          variant="span"
          className="accordion-item__header__left"
        >
          {!!preIcon && (
            <Styled.ItemHeaderPreIcon className="accordion-item__header__left__pre-icon">
              {preIcon}
            </Styled.ItemHeaderPreIcon>
          )}
          <Styled.ItemHeaderLabel $disabled={disabled}>
            {label}
          </Styled.ItemHeaderLabel>
        </Styled.ItemHeaderSection>
      );
    }, [disabled, label, preIcon]);

    useWhyDidYouUpdate(`AccordionItemHeader ${id}`, {
      label,
      preIcon,
      postIcon,
      expandIcon,
      disabled,
      isExpanded,
      isOnlyOneExpand,
      id,
      setItemDictionary,
    });

    return (
      <Styled.ItemHeader
        $disabled={disabled}
        className="accordion-item__header"
        onClick={onClickItemHeader(id)}
      >
        {leftPanel}
        <AccordionItemHeaderRight postIcon={postIcon} disabled={disabled}>
          <AccordionItemExpandIcon
            expandIcon={expandIcon}
            isExpanded={isExpanded}
          />
        </AccordionItemHeaderRight>
      </Styled.ItemHeader>
    );
  },
);

AccordionItemHeader.displayName = "AccordionItemHeader";
