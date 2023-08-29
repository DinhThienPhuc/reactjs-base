import { DEFAULT_AVATAR } from "utils";
import { createWithEqualityFn } from "zustand/traditional";
import { devtools } from "zustand/middleware";
import { shallow } from "zustand/shallow";

interface IAvatar {
  url: string;
  setUrl: (url: string | undefined | null) => void;
}

const useAvatar = createWithEqualityFn<IAvatar>()(
  devtools((set) => ({
    url: DEFAULT_AVATAR,
    setUrl: (url: string | undefined | null) =>
      set((state) => {
        return { ...state, url: !url ? DEFAULT_AVATAR : url };
      }),
  })),
  shallow,
);

export default useAvatar;
