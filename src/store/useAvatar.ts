import { DEFAULT_AVATAR } from "utils";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IAvatar {
  url: string;
  setUrl: (url: string | undefined | null) => void;
}

const useAvatar = create<IAvatar>()(
  devtools((set) => ({
    url: DEFAULT_AVATAR,
    setUrl: (url: string | undefined | null) =>
      set((state) => {
        return { ...state, url: !url ? DEFAULT_AVATAR : url };
      }),
  })),
);

export default useAvatar;
