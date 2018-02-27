import { curry, isNil } from "ramda";

export const buildToken = curry((type, value, options = {}) => ({
  type,
  value,
  ...options
}));

export const isToken = ({ type, value }) => !isNil(type) && !isNil(value);
