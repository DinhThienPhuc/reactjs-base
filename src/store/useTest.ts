import { createJSONStorage, devtools, persist } from "zustand/middleware";

import { create } from "zustand";

interface ITest {
  id: string;
  setId: (id: string) => void;
}

const useTest = create<ITest>()(
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
);

export default useTest;
