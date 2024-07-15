import { TAsyncBoundary } from "@phantomthief-react/utils.definations";

/**
 * Beautiful version of try/catch block
 * @param promise Async task
 * @returns Object contains result and error of async task call
 */
export const tryDo = async <T>(
  promise: Promise<T>,
): Promise<TAsyncBoundary<T>> => {
  try {
    const result = await promise;
    return {
      error: null,
      result: result as T,
    };
  } catch (error) {
    return {
      error,
      result: null,
    };
  }
};

/**
 * Safety parse JSON function
 * @param jsonString JSON data in string format
 * @returns JSON object
 */
export const parseJSON = <T>(jsonString: string | null): T | null => {
  try {
    return jsonString === "undefined" ? null : JSON.parse(jsonString ?? "");
  } catch (error) {
    return null;
  }
};

/**
 * A function do nothing
 * @returns Safety value
 */
export const doNothing = () => {
  // console.log('Do nothing')
};

/**
 * Capitalize the first character of string
 * @param str String to be modify
 * @returns
 */
export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

/**
 * Converts a string to CamelCase, capitalizes the first letter, and allows for dynamic splitting based on a regex pattern.
 * @param str The string to convert.
 * @param divider The regex pattern used to split the string.
 * @returns The CamelCase string.
 */
export const toCamelCase = (str: string, divider: RegExp = /-/): string => {
  return str.split(divider).map(capitalize).join("");
};

/**
 * Checks if `value` is `null` or `undefined`.
 * @param value The value to check.
 * @returns Returns `true` if `value` is nullish, else `false`.
 */
export const isNil = (value: unknown) => value == null;

/**
 * Shallow compare a field in objects, used in React.memo. Return false to re-render and true to skip re-render.
 * @param keys fields to be deep compare
 * @param callback callback to compare the fields
 * @returns boolean
 */
export const arePropsShallowEqual =
  (
    keys: string[],
    callback: (
      key: string,
      prevProps: Record<string, unknown>,
      nextProps: Record<string, unknown>,
    ) => boolean | undefined,
  ) =>
  (prevProps: Record<string, unknown>, nextProps: Record<string, unknown>) => {
    const areSpecificPropsEqual = keys.every(
      (k: string) => callback(k, prevProps, nextProps) ?? true,
    );

    const areOtherPropsEqual = Object.keys(prevProps).every((k: string) => {
      if (keys.includes(k)) return true;
      return prevProps[k] === nextProps[k];
    });

    return areSpecificPropsEqual && areOtherPropsEqual;
  };
