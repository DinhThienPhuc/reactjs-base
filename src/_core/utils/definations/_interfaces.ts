/**
 * Extendable interface, can be inherited
 */
export interface IExtendable {
  [key: string]: unknown;
}

// TODO: Rename to INodePosition
/**
 * Node Position interface
 */
export interface IPosition {
  left: number;
  top: number;
  width: number;
  height: number;
}
