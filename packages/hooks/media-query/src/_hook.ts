import { useState } from "react";

import useIsomorphicLayoutEffect from "@phantomthief-react/hooks.isomorphic-layout-effect";

export interface IMediaQuery {
  defaultValue?: boolean;
  initializeWithValue?: boolean;
}

const IS_SERVER = typeof window === "undefined";

const useMediaQuery = (
  query: string,
  { defaultValue = false, initializeWithValue = true }: IMediaQuery = {},
): boolean => {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue;
    }
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query);
    }
    return defaultValue;
  });

  // Handles the change event of the media query.
  const handleChange = () => {
    setMatches(getMatches(query));
  };

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load and if query changes
    handleChange();

    // Use deprecated `addListener` and `removeListener` to support Safari < 14 (#135)
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener("change", handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener("change", handleChange);
      }
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
