# simple-math-ast

## Introduction

Simple Math AST serves two purposes:

1. Splitting math expression into the array of smallest units (tokens).
2. Constructing math AST using tokens

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
import { tokenize } from "simple-math-ast";

/**
 * Provide math expression
 */

const tokens = tokenize("2x + siny - (x^2 + 2xy + y^2)");

console.log(tokens);

/**
 * [
 *   { type: 'NUMBER', value: '2' },
 *   { type: 'VARIABLE', value: 'x' },
 *   { type: 'OPERATION', value: '+' },
 *   { type: 'NAMED_FUNCTION', value: 'sin' },
 *   { type: 'VARIABLE', value: 'y' },
 *   { type: 'OPERATION', value: '-' },
 *   { type: 'LEFT_PARENTHESIS', value: '(' },
 *   { type: 'VARIABLE', value: 'x' },
 *   { type: 'OPERATION', value: '^' },
 *   { type: 'NUMBER', value: '2' },
 *   { type: 'OPERATION', value: '+' },
 *   { type: 'NUMBER', value: '2' },
 *   { type: 'VARIABLE', value: 'x' },
 *   { type: 'VARIABLE', value: 'y' },
 *   { type: 'OPERATION', value: '+' },
 *   { type: 'VARIABLE', value: 'y' },
 *   { type: 'OPERATION', value: '^' },
 *   { type: 'NUMBER', value: '2' },
 *   { type: 'RIGHT_PARENTHESIS', value: ')' }
 * ]
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
