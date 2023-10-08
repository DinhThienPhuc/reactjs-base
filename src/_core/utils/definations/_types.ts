import type { ReactElement, ReactNode } from "react";

import type { AppProps } from "next/app";
import type { NextPage } from "next";

// TODO: Rename to TComponent
/**
 * Common Functional Component type
 */
export type TFunctionComponent = () => ReactNode;

// TODO: Rename to THighOrderComponent
/**
 * High Order Component type
 */
export type TFunctionHighOrderComponent = (
  component: ReactElement | ReactNode,
) => ReactNode;

// TODO: Rename to TIterator
/**
 * Function Iterator type used in map, filter, reduce method, etc
 */
export type TFunctionIterator = <T>(
  value: T,
  index?: number,
  array?: T[],
) => unknown;

/**
 * Function type with specific return type
 */
export type TFunction<RT> = <T>(item?: T) => RT;

// TODO: Rename to TNextPage
/**
 * Custom Next.js page props
 */
export type TNextPageCustomized = NextPage & {
  getLayout?: TFunctionHighOrderComponent;
  getHead?: TFunctionComponent;
};

// TODO: Rename to TAppProps
/**
 * Custom Next.js App props
 */
export type TAppPropsCustomized = AppProps & {
  Component: TNextPageCustomized;
};

// TODO: Rename to TAsyncBoundary<T>
/**
 * Abstract try/catch wrapper
 */
export type TTryCatchResult<T> = {
  error: unknown | null;
  result: T | null;
};

/**
 * Common variants
 */
export type TVariant =
  | "filled"
  | "outlined"
  | "standard"
  | "contained"
  | "text";

/**
 * Common size
 */
export type TSize = "tiny" | "small" | "medium" | "large";

/**
 * Browser storage
 */
export type TBrowserStorage = "localStorage" | "sessionStorage";

/**
 * Override any type for bypass linter
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TAny = any;
