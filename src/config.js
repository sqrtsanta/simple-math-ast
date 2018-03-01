import types from "./types";

const config = {
  rules: [
    {
      key: "sin|cos|tg|ctg|log|sqrt",
      data: {
        type: types.NAMED_FUNCTION,
        args: 1,
        precedence: 4
      }
    },
    {
      key: "PI|E|pi|e",
      data: {
        type: types.CONSTANT
      }
    },
    {
      key: "[\\^]",
      data: {
        type: types.OPERATOR,
        args: 2,
        precedence: 3
      }
    },
    {
      key: "[\\*\\/]",
      data: {
        type: types.OPERATOR,
        args: 2,
        precedence: 2
      }
    },
    {
      key: "[\\+\\-]",
      data: {
        type: types.OPERATOR,
        args: 2,
        precedence: 1
      }
    },
    { key: "[(\\[]", data: { type: types.LEFT_PARENTHESIS } },
    { key: "[)\\]]", data: { type: types.RIGHT_PARENTHESIS } },
    { key: "[0-9.,]+", data: { type: types.NUMBER } },
    { key: "[a-zA-Z]", data: { type: types.VARIABLE } }
  ]
};

export default config;
