import { curry, isNil } from "ramda";

export const buildToken = curry((data, value) => ({
  value,
  ...data
}));

export const isToken = ({ type, value }) => !isNil(type) && !isNil(value);
