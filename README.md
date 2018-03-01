# simple-math-ast

## Introduction

Simple Math AST serves two purposes:

1. Splitting math expression into the array of smallest units (tokens).
2. Building Math AST using tokens via Shunting-Yard Algorithm

Read my blog posts about

**[Math AST: Tokenizer](https://esimovmiras.com/articles/math-ast-tokenizer)**

**[Math AST: Parser](https://esimovmiras.com/articles/math-ast-parser)**

## Install

```shell
npm install simple-math-ast
```

## Use

### Code example

```js
import build from "simple-math-ast";

/**
 * Provide math expression, pass to function & receive Math AST
 */

const tree = build("2.5 * x + (sin(pi / 2) / cosx) ^ 3 - 4 * 2");

console.log(tree);

/**
 * ASTNode {
 *  token: { value: '-', type: 'OPERATOR', args: 2, precedence: 1 },
 *  left:
 *   ASTNode {
 *     token: { value: '+', type: 'OPERATOR', args: 2, precedence: 1 },
 *     left: ASTNode { token: [Object], left: [Object], right: [Object] },
 *     right: ASTNode { token: [Object], left: [Object], right: [Object] } },
 *  right:
 *   ASTNode {
 *     token: { value: ' *', type: 'OPERATOR', args: 2, precedence: 2 },
 *     left: ASTNode { token: [Object], left: null, right: null },
 *     right: ASTNode { token: [Object], left: null, right: null } } }
 */
```

```js
import { tokenize } from "simple-math-ast";

/**
 * Provide math expression, pass to function and receive array of tokens
 */

const tokens = tokenize("2.5 * x + (sin(pi / 2) / cosx) ^ 3 - 4 * 2");

console.log(tokens);

/**
 * [
 *  { value: "2.5", type: "NUMBER" },
 *  { value: "*", type: "OPERATOR", args: 2, precedence: 2 },
 *  { value: "x", type: "VARIABLE" },
 *  { value: "+", type: "OPERATOR", args: 2, precedence: 1 },
 *  { value: "(", type: "LEFT_PARENTHESIS" },
 *  { value: "sin", type: "NAMED_FUNCTION", args: 1, precedence: 4 },
 *  { value: "(", type: "LEFT_PARENTHESIS" },
 *  { value: "pi", type: "CONSTANT" },
 *  { value: "/", type: "OPERATOR", args: 2, precedence: 2 },
 *  { value: "2", type: "NUMBER" },
 *  { value: ")", type: "RIGHT_PARENTHESIS" },
 *  { value: "/", type: "OPERATOR", args: 2, precedence: 2 },
 *  { value: "cos", type: "NAMED_FUNCTION", args: 1, precedence: 4 },
 *  { value: "x", type: "VARIABLE" },
 *  { value: ")", type: "RIGHT_PARENTHESIS" },
 *  { value: "^", type: "OPERATOR", args: 2, precedence: 3 },
 *  { value: "3", type: "NUMBER" },
 *  { value: "-", type: "OPERATOR", args: 2, precedence: 1 },
 *  { value: "4", type: "NUMBER" },
 *  { value: "*", type: "OPERATOR", args: 2, precedence: 2 },
 *  { value: "2", type: "NUMBER" }
 * ];
 */
```

## Contributers

#### Install

```shell
git clone https://github.com/Flyr1Q/simple-math-ast.git
cd simple-math-ast
npm i
```

#### Build

* One shot
  * all formats: `npm run build`
  * commonjs (output in `lib` dir): `npm run build:commonjs`
  * ecmascript module (ouput in `es` dir): `npm run build:es`
  * umd (output as `dist/simple-math-ast.js`) : `npm run build:umd`
  * umd - minified (output as `dist/simple-math-ast.min.js`) : `npm run build:umd:min`
* Watch mode:
  * commonjs: `npm run build:watch` or `npm run build:commonjs:watch`
  * umd: `npm run build:umd:watch`
  * es: `npm run build:es:watch`

Copyright 2018 © Esimov Miras
