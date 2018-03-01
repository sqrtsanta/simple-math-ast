import { forEach, last } from "ramda";

import {
  isNumber,
  isConstant,
  isVariable,
  isOperator,
  isNamedFunction,
  isLeftParenthesis,
  isRightParenthesis
} from "../queries";

import ASTNode from "./node";

const addOperandNode = (nodes, token) => {
  const node = new ASTNode(token);

  nodes.push(node);
};

const addOperatorNode = (nodes, token) => {
  const node = new ASTNode(token);

  if (token.args > 1) {
    node.setRight(nodes.pop());
  }
  node.setLeft(nodes.pop());

  nodes.push(node);
};

const parse = tokens => {
  const ops = [];
  const nodes = [];

  forEach(token => {
    if (isNumber(token) || isVariable(token) || isConstant(token)) {
      addOperandNode(nodes, token);
    }

    if (isLeftParenthesis(token)) {
      ops.push(token);
    }

    if (isRightParenthesis(token)) {
      while (last(ops) && !isLeftParenthesis(last(ops))) {
        addOperatorNode(nodes, ops.pop());
      }

      ops.pop();
    }

    if (isOperator(token) || isNamedFunction(token)) {
      while (
        last(ops) &&
        last(ops).precedence >= token.precedence &&
        !isLeftParenthesis(token)
      ) {
        addOperatorNode(nodes, ops.pop());
      }

      ops.push(token);
    }
  }, tokens);

  while (ops.length > 0) {
    addOperatorNode(nodes, ops.pop());
  }

  return nodes.pop();
};

export default parse;
