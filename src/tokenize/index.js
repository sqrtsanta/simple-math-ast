import {
  curry,
  map,
  pipe,
  split,
  match,
  reduce,
  flatten,
  reject,
  __
} from "ramda";

import config from "../config";

import { rules } from "./rules";
import { buildToken, isToken } from "./token";
import { isUnknown } from "./unknown";
import { zipConcat, compact, wrap } from "./utils";

const applyRuleOnTarget = curry(({ data, key }, target) => {
  if (isToken(target)) {
    return target;
  }

  return zipConcat(
    split(key, target),
    map(buildToken(data), match(key, target))
  );
});

const applyRuleOnTargets = (targets, rule) =>
  pipe(map(applyRuleOnTarget(rule)), flatten, compact)(targets);

const tokenize = pipe(
  wrap,
  reduce(applyRuleOnTargets, __, rules(config)),
  reject(isUnknown)
);

export default tokenize;
