import React, { memo, useMemo } from "react";

import { Typography } from "@phantomthief-react/components";
import { FONT } from "@phantomthief-react/utils";

import { Styled } from "../_styles";
import { IAccordionItemHeaderProps, TItemDictionary } from "../_types";
import { AccordionItemExpandIcon } from "./_expand-icon";

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
    expandIconHtmlAttributes,
    itemHeaderHtmlAttributes,
    itemHeaderLabelHtmlAttributes,
    setItemDictionary,
  }: IAccordionItemHeaderProps) => {
    const onClickItemHeader = (id: string) => () => {
      if (isOnlyOneExpand) {
        setItemDictionary((prev) => ({
          ...Object.keys(prev).reduce(
            (acc: TItemDictionary, currentId: string) => {
              acc[currentId] = false;
              return acc;
            },
            {},
          ),
          [id]: prev[id] ? false : true,
        }));
      } else {
        setItemDictionary((prev) => ({ ...prev, [id]: !prev[id] }));
      }
    };

    const firstSection = useMemo(
      () => (
        <Styled.ItemHeaderSectionGroup>
          <Styled.ItemHeaderSection className="accordion-item__header__left">
            {preIcon}
            <Typography
              {...itemHeaderLabelHtmlAttributes}
              font={FONT.VERNADA}
              className="accordion-item__header-label"
            >
              {label}
            </Typography>
          </Styled.ItemHeaderSection>
          <Styled.ItemHeaderSection className="accordion-item__header__right">
            {postIcon}
          </Styled.ItemHeaderSection>
        </Styled.ItemHeaderSectionGroup>
      ),
      [itemHeaderLabelHtmlAttributes, label, postIcon, preIcon],
    );

    return (
      <Styled.ItemHeader
        {...itemHeaderHtmlAttributes}
        $disabled={disabled}
        className="accordion-item__header"
        onClick={onClickItemHeader(id)}
      >
        {firstSection}
        <AccordionItemExpandIcon
          htmlAttributes={expandIconHtmlAttributes}
          expandIcon={expandIcon}
          isExpanded={isExpanded}
        />
      </Styled.ItemHeader>
    );
  },
);

AccordionItemHeader.displayName = "AccordionItemHeader";
