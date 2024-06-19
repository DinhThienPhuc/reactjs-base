import { HamburgerMenu } from "@phantomthief-react/components";
import { useBlock } from "@phantomthief-react/hooks";
import { IResponsiveTopnavProps } from "./_types";
import React, { useState } from "react";
import { Styled } from "./_styles";
import clsx from "clsx";

export const ResponsiveTopnav = ({
  items,
  activeKey = items[0].key,
  firstItemSelectable = false,
  collapseAfterSelectItem = true,
  mobileMenuExpanded = false,
  hamburgerProps,
  onClick,
  className,
}: IResponsiveTopnavProps) => {
  const [isMobileMenuExpanded, setMobileMenuExpand] =
    useState<boolean>(mobileMenuExpanded);

  const customItems = useBlock(() => {
    return items.map((item, index) => (
      <Styled.Item
        key={item.key}
        $isMobileMenuExpanded={isMobileMenuExpanded}
        $isActivated={activeKey === item.key}
        onClick={(e) => {
          collapseAfterSelectItem && setMobileMenuExpand(false);
          if (firstItemSelectable || index !== 0) {
            return onClick?.(e, item.key);
          }
          onClick?.(e);
        }}
        className={clsx(
          "responsive-topnav-item",
          isMobileMenuExpanded && "responsive-topnav-item--mobile-expanded",
          activeKey === item.key && "responsive-topnav-item--active",
          className,
        )}
      >
        {item.content}
      </Styled.Item>
    ));
  });

  return (
    <Styled.Container
      $isMobileMenuExpanded={isMobileMenuExpanded}
      className={clsx(
        "responsive-topnav",
        isMobileMenuExpanded && "responsive-topnav--mobile-expanded",
        className,
      )}
    >
      {customItems}
      <Styled.MenuIconWrapper>
        <HamburgerMenu
          {...hamburgerProps}
          isStandalone={false}
          width={hamburgerProps?.width ?? 24}
          height={hamburgerProps?.height ?? 24}
          gap={hamburgerProps?.gap ?? 4}
          active={isMobileMenuExpanded}
          onClick={(expanded) => {
            setMobileMenuExpand(expanded);
            hamburgerProps?.onClick?.(expanded);
          }}
        />
      </Styled.MenuIconWrapper>
    </Styled.Container>
  );
};
