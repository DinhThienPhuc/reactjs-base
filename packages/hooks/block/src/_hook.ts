import { TAny, TFunction } from "@phantomthief-react/utils";

/**
 * Alternative for `useMemo` without memorize anything.
 * @param callback Function callback to be called to get the value.
 * @returns Value of the block.
 */
const useBlock = (callback: TFunction<TAny>) => callback();

export default useBlock;
