import { pipe, prop, equals } from "ramda";

import types from "./types";

const isType = type => pipe(prop("type"), equals(type));

export const isNumber = isType(types.NUMBER);
export const isConstant = isType(types.CONSTANT);
export const isVariable = isType(types.VARIABLE);
export const isOperator = isType(types.OPERATOR);
export const isNamedFunction = isType(types.NAMED_FUNCTION);
export const isLeftParenthesis = isType(types.LEFT_PARENTHESIS);
export const isRightParenthesis = isType(types.RIGHT_PARENTHESIS);
