import { createJSONStorage, devtools, persist } from "zustand/middleware";

import { MAX_COMPARE_FIGHTERS } from "utils";
import { create } from "zustand";

interface ICompareFighters {
  fighterIds: Array<string | null>;
  toggleSelectFighter: (id: string) => void;
}

const useCompareFighters = create<ICompareFighters>()(
  devtools(
    persist(
      (set) => ({
        fighterIds: [],
        toggleSelectFighter: (id: string) =>
          set((state) => {
            if (state.fighterIds.includes(id)) {
              return {
                fighterIds: state.fighterIds.filter((i) => i !== id),
              };
            } else {
              const fighterIds = [...state.fighterIds];
              if (fighterIds.length >= MAX_COMPARE_FIGHTERS) {
                fighterIds.shift();
              }
              fighterIds.push(id);
              return {
                fighterIds,
              };
            }
          }),
      }),
      {
        name: "kengan-fighters-analysis__fighterIds",
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);

export default useCompareFighters;
