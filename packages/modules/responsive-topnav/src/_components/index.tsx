import clsx from "clsx";
import React, { Suspense, lazy, useCallback, useMemo, useState } from "react";

import useBlock from "@phantomthief-react/hooks.block";
import useMediaQuery from "@phantomthief-react/hooks.media-query";
import { VIEWPORT } from "@phantomthief-react/utils";

import { Styled } from "../_styles";
import { IResponsiveTopnavProps } from "../_types";
import { ResponsiveTopnavItem } from "./_item";

const HamburgerMenu = lazy(() =>
  import("@phantomthief-react/components.hamburger-menu").then((module) => ({
    default: module.HamburgerMenu,
  })),
);

export const ResponsiveTopnav = ({
  className = "",
  items,
  activeKey = items[0].key,
  firstItemSelectable = false,
  collapseAfterSelectItem = true,
  mobileMenuExpanded = false,
  hamburgerProps,
  htmlAttributes,
  onClick,
}: IResponsiveTopnavProps) => {
  const [isMobileMenuExpanded, setMobileMenuExpand] =
    useState<boolean>(mobileMenuExpanded);

  const isNotMobileDevice = useMediaQuery(`(min-width: ${VIEWPORT.SEVEN}px)`);

  const customItems = useBlock(() => {
    return items.map((item, index) => (
      <ResponsiveTopnavItem
        key={item.key}
        isMobileMenuExpanded={isMobileMenuExpanded}
        content={item.content}
        index={index}
        activeKey={activeKey}
        itemKey={item.key}
        firstItemSelectable={firstItemSelectable}
        collapseAfterSelectItem={collapseAfterSelectItem}
        htmlAttributes={item.htmlAttributes}
        setMobileMenuExpand={setMobileMenuExpand}
        onClick={onClick}
      />
    ));
  });

  const handleClickMobileMenu = useCallback(
    (expanded: boolean) => {
      setMobileMenuExpand(expanded);
      hamburgerProps?.onClick?.(expanded);
    },
    [hamburgerProps],
  );

  const mobileMenu = useMemo(() => {
    if (isNotMobileDevice) {
      return null;
    }
    return (
      <Styled.MenuIconWrapper>
        <Suspense>
          <HamburgerMenu
            {...hamburgerProps}
            isStandalone={false}
            width={hamburgerProps?.width ?? 24}
            height={hamburgerProps?.height ?? 24}
            gap={hamburgerProps?.gap ?? 4}
            active={isMobileMenuExpanded}
            onClick={handleClickMobileMenu}
          />
        </Suspense>
      </Styled.MenuIconWrapper>
    );
  }, [
    hamburgerProps,
    handleClickMobileMenu,
    isMobileMenuExpanded,
    isNotMobileDevice,
  ]);

  return (
    <Styled.Container
      {...htmlAttributes}
      $isMobileMenuExpanded={isMobileMenuExpanded}
      className={clsx(
        "responsive-topnav",
        isMobileMenuExpanded && "responsive-topnav--mobile-expanded",
        className,
      )}
    >
      {customItems}
      {mobileMenu}
    </Styled.Container>
  );
};
