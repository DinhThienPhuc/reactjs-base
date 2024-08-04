import React, { memo, useMemo } from "react";

import { Typography } from "@phantomthief-react/components.typography";
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
    htmlAttributes,
    labelHtmlAttributes,
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
              font={FONT.VERNADA}
              className="accordion-item__header-label"
              htmlAttributes={labelHtmlAttributes}
            >
              {label}
            </Typography>
          </Styled.ItemHeaderSection>
          <Styled.ItemHeaderSection className="accordion-item__header__right">
            {postIcon}
          </Styled.ItemHeaderSection>
        </Styled.ItemHeaderSectionGroup>
      ),
      [label, labelHtmlAttributes, postIcon, preIcon],
    );

    return (
      <Styled.ItemHeader
        {...htmlAttributes}
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
