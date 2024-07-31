import clsx from "clsx";
import React, { MouseEvent, memo } from "react";

import { arePropsShallowEqual } from "@phantomthief-react/utils";

import { Styled } from "../_styles";
import { IResponsiveTopnavItemProps } from "../_types";

export const ResponsiveTopnavItem = memo(
  ({
    isMobileMenuExpanded,
    content,
    index,
    activeKey,
    itemKey,
    firstItemSelectable,
    collapseAfterSelectItem,
    htmlAttributes,
    setMobileMenuExpand,
    onClick,
  }: IResponsiveTopnavItemProps) => {
    const handleClickItem = (e: MouseEvent<HTMLButtonElement>) => {
      collapseAfterSelectItem && setMobileMenuExpand(false);
      if (firstItemSelectable || index !== 0) {
        return onClick?.(e, itemKey);
      }
      onClick?.(e);
    };

    return (
      <Styled.Item
        {...htmlAttributes}
        $isMobileMenuExpanded={isMobileMenuExpanded}
        $isActivated={activeKey === itemKey}
        onClick={handleClickItem}
        className={clsx(
          "responsive-topnav-item",
          isMobileMenuExpanded && "responsive-topnav-item--mobile-expanded",
          activeKey === itemKey && "responsive-topnav-item--active",
        )}
      >
        {content}
      </Styled.Item>
    );
  },
  arePropsShallowEqual(["activeKey"], (key, prevProps, nextProps) => {
    switch (key) {
      case "activeKey":
        const willNotRender =
          nextProps["itemKey"] !== nextProps["activeKey"] &&
          prevProps["itemKey"] !== prevProps["activeKey"];
        return willNotRender;
      default:
        return;
    }
  }),
);

ResponsiveTopnavItem.displayName = "ResponsiveTopnavItem";
