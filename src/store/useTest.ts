import { createJSONStorage, devtools, persist } from "zustand/middleware";

import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";

interface ITest {
  id: string;
  setId: (id: string) => void;
}

const useTest = createWithEqualityFn<ITest>()(
  devtools(
    persist(
      (set) => ({
        id: "",
        setId: (id: string) =>
          set((state) => ({
            ...state,
            id,
          })),
      }),
      {
        name: "react-base__test",
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
  shallow,
);

export default useTest;
