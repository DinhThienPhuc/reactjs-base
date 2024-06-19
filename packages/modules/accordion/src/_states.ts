import { isNil } from "@phantomthief-react/utils";
import { create } from "zustand";

export interface IAccordionState {
  itemKeys: Record<string, boolean>;
  toggleKey: (itemKey: string) => void;
  toggleOnlyKey: (itemKey: string) => void;
}

export const useAccordionState = create<IAccordionState>()((set) => ({
  itemKeys: {},
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
