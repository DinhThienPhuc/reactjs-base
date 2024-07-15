import type { ReactElement, ReactNode } from "react";

import {
  BROWSER_STORAGE,
  SIZE,
  SIZE_UNIT,
  VARIANT,
} from "@phantomthief-react/utils.constants";

/**
 * Override any type for bypass linter
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TAny = any;

/**
 * Common Functional Component type
 */
export type TComponent = (...args: TAny) => ReactNode;

/**
 * High Order Component type
 */
export type THighOrderComponent = (
  component: ReactElement | ReactNode,
) => ReactNode;

/**
 * Function Iterator type used in map, filter, reduce method, etc
 */
export type TIterator = <T>(value: T, index?: number, array?: T[]) => unknown;

/**
 * Function type with specific return type
 */
export type TFunction<RT> = <T>(item?: T) => RT;

/**
 * Abstract try/catch wrapper
 */
export type TAsyncBoundary<T> = {
  error: unknown | null;
  result: T | null;
};

/**
 * Common variants
 */
export type TVariant = (typeof VARIANT)[keyof typeof VARIANT];

/**
 * Common size
 */
export type TSize = (typeof SIZE)[keyof typeof SIZE];

/**
 * Browser storage
 */
export type TBrowserStorage =
  (typeof BROWSER_STORAGE)[keyof typeof BROWSER_STORAGE];

/**
 * Unit of element size type
 */
export type TSizeUnit = (typeof SIZE_UNIT)[keyof typeof SIZE_UNIT];
