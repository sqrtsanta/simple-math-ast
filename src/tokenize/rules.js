import { pipe, prop, append, map } from "ramda";

import { UNKNOWN_RULE } from "./unknown";

const transformKeyToRegExp = ({ key, ...rest }) => ({
  key: new RegExp(key, "g"),
  ...rest
});

export const rules = pipe(
  prop("rules"),
  append(UNKNOWN_RULE),
  map(transformKeyToRegExp)
);
