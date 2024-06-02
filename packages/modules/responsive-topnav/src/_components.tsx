import { IResponsiveTopnavProps } from "./_types";
import React, { useMemo, useState } from "react";
import { Styled } from "./_styles";

export const ResponsiveTopnav = ({ items }: IResponsiveTopnavProps) => {
  const [isMobileMenuExpanded, setMobileMenuExpand] = useState(false);

  const handleClick = () => {
    setMobileMenuExpand((prev) => !prev);
  };

  const customItem = useMemo(() => {
    return items.map((item) => (
      <Styled.Item key={item.key} $isMobileMenuExpanded={isMobileMenuExpanded}>
        {item.content}
      </Styled.Item>
    ));
  }, [isMobileMenuExpanded, items]);

  return (
    <Styled.Container $isMobileMenuExpanded={isMobileMenuExpanded}>
      {customItem}
      <Styled.Item
        $isMobileMenuExpanded={isMobileMenuExpanded}
        onClick={handleClick}
      >
        X
      </Styled.Item>
    </Styled.Container>
  );
};
