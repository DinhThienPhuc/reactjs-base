import { HamburgerMenu } from "@phantomthief-react/components";
import { useBlock } from "@phantomthief-react/hooks";
import { IResponsiveTopnavProps } from "./_types";
import React, { useMemo, useState } from "react";
import { Styled } from "./_styles";
import clsx from "clsx";

export const ResponsiveTopnav = ({
  items,
  activeKey = items[0].key,
  firstItemSelectable = false,
  onClick,
  className,
}: IResponsiveTopnavProps) => {
  const [isMobileMenuExpanded, setMobileMenuExpand] = useState(false);

  const customItems = useBlock(() => {
    return items.map((item, index) => (
      <Styled.Item
        key={item.key}
        $isMobileMenuExpanded={isMobileMenuExpanded}
        $isActivated={activeKey === item.key}
        onClick={(e) => {
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

  const menuIcon = useMemo(
    () => (
      <HamburgerMenu
        width={24}
        height={24}
        gap={4}
        onClick={setMobileMenuExpand}
      />
    ),
    [],
  );

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
      <Styled.MenuIconWrapper>{menuIcon}</Styled.MenuIconWrapper>
    </Styled.Container>
  );
};
