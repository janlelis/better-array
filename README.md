# better-array for JavaScript [![[npm]](https://img.shields.io/npm/v/better-array.svg)](https://www.npmjs.com/package/better-array)

Adds some Ruby-inspired features to Arrays when you need it.

Use the script file directly, or install via npm:

    $ npm install better-array

## Usage (Node Style)

Transform an Array into a "BetterArray" object like this:

```javascript
var BetterArray = require('better-array')

console.log(
  BetterArray([1,2,3]).minus([2,3,4])
); // => [1]
```

The resulting object provides an alternative API to work with the Array:

## Methods

Method | Parameters | Result | Description
-------|------------|--------|------------
`.minus` | Array | Array | Returns an array with unique values and all elements of the other array removed
`.plus` | Array | Array | Returns a concatenated array
`.and` | Array | Array | Returns the intersection: Keep only values which can be found in both arrays

Please note that the result is a normal Array, not a BetterArray.

## MIT License

Copyright (C) 2015 Jan Lelis <http://janlelis.com>. Released under the MIT license.
