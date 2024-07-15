import { create } from "zustand";

import { isNil } from "@phantomthief-react/utils";

export interface IAccordionState {
  itemKeys: Record<string, boolean>;
  initKeys: (expandKeys: string[], isOnlyOneExpand?: boolean) => void;
  toggleKey: (itemKey: string) => void;
  toggleOnlyKey: (itemKey: string) => void;
}

export const useAccordionState = create<IAccordionState>()((set) => ({
  itemKeys: {},
  initKeys: (expandKeys: string[], isOnlyOneExpand = false) => {
    if (expandKeys.length === 1 || isOnlyOneExpand) {
      return set(() => ({
        itemKeys: { [expandKeys[0]]: true },
      }));
    }

    set((state) => ({
      itemKeys: expandKeys.reduce(
        (acc: Record<string, boolean>, key: string) => {
          acc[key] = true;
          return acc;
        },
        state.itemKeys,
      ),
    }));
  },
  toggleKey: (itemKey: string) =>
    set((state) => ({
      itemKeys: {
        ...state.itemKeys,
        [itemKey]: !state.itemKeys[itemKey],
      },
    })),
  toggleOnlyKey: (itemKey: string) =>
    set((state) => {
      if (isNil(state.itemKeys[itemKey])) {
        return {
          itemKeys: {
            [itemKey]: true,
          },
        };
      }
      return {
        itemKeys: Object.keys(state.itemKeys).reduce(
          (acc: Record<string, boolean>, key: string) => {
            if (key !== itemKey) {
              acc[key] = false;
            } else {
              acc[key] = !acc[key];
            }
            return acc;
          },
          state.itemKeys,
        ),
      };
    }),
}));
