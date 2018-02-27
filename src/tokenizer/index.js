import { curry, map, pipe, split, match, reduce, flatten, reject } from "ramda";

import { rules } from "./config";
import { buildToken, isToken } from "./token";
import { isUnknown } from "./unknown";
import { zipConcat, compact } from "./utils";

const applyRuleOnTarget = curry(({ type, key }, target) => {
  if (isToken(target)) {
    return target;
  }

  return zipConcat(
    split(key, target),
    map(
      buildToken(type),
      match(key, target)
    )
  );
});

const applyRuleOnTargets = (targets, rule) =>
  pipe(
    map(applyRuleOnTarget(rule)),
    flatten,
    compact
  )(targets);

const tokenizer = curry((config, target) =>
  pipe(
    rules,
    reduce(applyRuleOnTargets, [target]),
    reject(isUnknown)
  )(config)
);

export default tokenizer;
