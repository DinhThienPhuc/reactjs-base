import clsx from "clsx";
import React, { forwardRef, useMemo } from "react";

import { Styled } from "../_style";
import { ISelectMenuProps, ISelectOption } from "../_types";
import { SelectOption } from "./_option";

export const SelectMenu = forwardRef<HTMLDivElement, ISelectMenuProps>(
  ({ options, position, isShowed, currentValue, selectOption }, ref) => {
    const selectOptions = useMemo(() => {
      return options.map((option: ISelectOption) => {
        return (
          <SelectOption
            {...option}
            key={option.value}
            value={option.value}
            label={option.label}
            displayedValue={currentValue}
            handleSelectOption={selectOption}
          />
        );
      });
    }, [currentValue, options, selectOption]);

    return (
      <Styled.OptionGroup
        $position={position}
        $isShowed={isShowed}
        ref={ref}
        className={clsx(
          "select-options",
          !!position?.top && `select-options--position-top-${position.top}`,
          !!position?.left && `select-options--position-left-${position.left}`,
          !!position?.height &&
            `select-options--position-height-${position.height}`,
          !!position?.width &&
            `select-options--position-width-${position.width}`,
          isShowed && "select-options--showed",
        )}
      >
        {selectOptions}
      </Styled.OptionGroup>
    );
  },
);

SelectMenu.displayName = "SelectMenu";
