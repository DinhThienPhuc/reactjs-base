import React from "react";

import { IAccordionItemHeaderRightProps } from "../_types";
import { useWhyDidYouUpdate } from "ahooks";
import { Styled } from "../_styles";

export const AccordionItemHeaderRight = ({
  postIcon,
  disabled,
  children,
}: IAccordionItemHeaderRightProps) => {
  useWhyDidYouUpdate("AccordionItemHeaderRight", {
    postIcon,
    disabled,
    children,
  });

  return (
    <Styled.ItemHeaderSection
      $disabled={disabled}
      variant="span"
      className="accordion-item__header__right"
    >
      {postIcon}
      {children}
    </Styled.ItemHeaderSection>
  );
};
