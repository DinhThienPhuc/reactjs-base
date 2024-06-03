import { HamburgerMenu } from "@phantomthief-react/components";
import { IResponsiveTopnavProps } from "./_types";
import React, { useMemo, useState } from "react";
import { Styled } from "./_styles";

export const ResponsiveTopnav = ({ items }: IResponsiveTopnavProps) => {
  const [isMobileMenuExpanded, setMobileMenuExpand] = useState(false);

  const customItem = useMemo(() => {
    return items.map((item) => (
      <Styled.Item key={item.key} $isMobileMenuExpanded={isMobileMenuExpanded}>
        {item.content}
      </Styled.Item>
    ));
  }, [isMobileMenuExpanded, items]);

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
    <Styled.Container>
      {customItem}
      <Styled.MenuIconWrapper>{menuIcon}</Styled.MenuIconWrapper>
    </Styled.Container>
  );
};
