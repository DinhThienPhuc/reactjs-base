import { AccordionItemExpandIcon } from "./_expand-icon";
import { IAccordionItemProps } from "../_types";
import { useAccordionState } from "../_states";
import { Styled } from "../_styles";
import React, { memo } from "react";

export const AccordionItemHeader = memo(
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
          <AccordionItemExpandIcon expandIcon={expandIcon} itemKey={itemKey} />
        </Styled.ItemHeaderSection>
      </Styled.ItemHeader>
    );
  },
);

AccordionItemHeader.displayName = "AccordionItemHeader";
