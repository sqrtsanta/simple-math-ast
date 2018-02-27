import tokenizer from "./tokenizer";

const types = {
  CONSTANT: "CONSTANT",
  NAMED_FUNCTION: "NAMED_FUNCTION",
  OPERATION: "OPERATION",
  VARIABLE: "VARIABLE",
  NUMBER: "NUMBER",
  LEFT_PARENTHESIS: "LEFT_PARENTHESIS",
  RIGHT_PARENTHESIS: "RIGHT_PARENTHESIS"
};

const config = {
  lexicon: [
    { key: "sin|cos|tg|ctg|log|sqrt", type: types.NAMED_FUNCTION },
    { key: "PI|E|pi|e", type: types.CONSTANT },
    { key: "[\\+\\-\\*\\^\\/]", type: types.OPERATION },
    { key: "[(\\[]", type: types.LEFT_PARENTHESIS },
    { key: "[)\\]]", type: types.RIGHT_PARENTHESIS },
    { key: "[0-9.,]+", type: types.NUMBER },
    { key: "[a-zA-Z]", type: types.VARIABLE }
  ]
};

export const tokenize = tokenizer(config);
