import {
  INodePosition,
  TBrowserStorage,
  TFunction,
} from "@phantomthief/react.utils.definations";

import { MutableRefObject } from "react";
import { parseJSON } from "./_base";

/**
 * Manually reload browser
 */
export const reload: TFunction<void> = () => {
  window.location.reload();
};

/**
 * Get value by key from storage, default is local storage
 * @param key map with value stored in storage
 * @returns value of the stored key
 */
export const getFromSessionStorage = <T>(
  key: string,
  storage: TBrowserStorage = "localStorage",
): T | null => {
  const value = window[storage].getItem(key);

  if (value) {
    return parseJSON(value);
  }
  return null;
};

/**
 * Get position of DOM node
 * @param ref Reference of DOM node
 * @param withScrollable Dynamic position when scrollable
 * @returns Potion object
 */
export const getPositionOfNode = (
  ref: MutableRefObject<HTMLElement | null>,
  withScrollable = true,
): INodePosition => {
  const bounds = ref.current?.getBoundingClientRect();
  return {
    left: bounds?.x || 0,
    top: (bounds?.y || 0) + (withScrollable ? window?.scrollY || 0 : 0),
    width: bounds?.width || 0,
    height: bounds?.height || 0,
  };
};
