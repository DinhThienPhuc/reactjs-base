/**
 * Extendable interface, can be inherited
 */
export interface IExtendable {
  [key: string]: unknown;
}

/**
 * Node Position interface
 */
export interface INodePosition {
  left: number;
  top: number;
  width: number;
  height: number;
}
