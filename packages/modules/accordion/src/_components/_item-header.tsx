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
          [key]: prev[key] ? false : true,
        }));
      } else {
        setItemDictionary((prev) => ({ ...prev, [key]: !prev[key] }));
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
            >
              {label}
            </Typography>
          </Styled.ItemHeaderSection>
          <Styled.ItemHeaderSection className="accordion-item__header__right">
            {postIcon}
          </Styled.ItemHeaderSection>
        </Styled.ItemHeaderSectionGroup>
      ),
      [label, postIcon, preIcon],
    );

    return (
      <Styled.ItemHeader
        $disabled={disabled}
        className="accordion-item__header"
        onClick={onClickItemHeader(id)}
      >
        {firstSection}
        <AccordionItemExpandIcon
          expandIcon={expandIcon}
          isExpanded={isExpanded}
        />
      </Styled.ItemHeader>
    );
  },
);

AccordionItemHeader.displayName = "AccordionItemHeader";
