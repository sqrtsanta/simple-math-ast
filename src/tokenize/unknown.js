import { pipe, prop, equals } from "ramda";

export const UNKNOWN = "UNKNOWN";

export const UNKNOWN_RULE = {
  key: ".+",
  data: {
    type: UNKNOWN
  }
};

export const isUnknown = pipe(prop("type"), equals(UNKNOWN));
