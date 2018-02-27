import { filter, identity } from "ramda";

export const zipConcat = (source1, source2) => {
  const result = [];

  for (let i = 0; i < Math.max(source1.length, source2.length); i += 1) {
    if (i < source1.length) {
      result.push(source1[i]);
    }

    if (i < source2.length) {
      result.push(source2[i]);
    }
  }

  return result;
};

export const compact = filter(identity);
