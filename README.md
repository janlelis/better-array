# BetterArray for JavaScript [![[npm]](https://img.shields.io/npm/v/better-array.svg)](https://www.npmjs.com/package/better-array)

Adds some Ruby-inspired features to arrays when you need it. It is like an underscore.js only for arrays.

## Setup

Use the script file directly, or install via npm:

    $ npm install better-array

## Usage (Node Style)

Transform an Array into a `BetterArray` object like this:

```javascript
var BetterArray = require('better-array')

console.log(
  BetterArray([1,2,3]).minus([2,3,4])
); // => [1]
```

The `BetterArray` object provides an alternative API to work with the Array:

## Methods

Method | Parameters | Result | Description
-------|------------|--------|------------
`.minus` | Array | Array | Returns an array with unique values and all elements of the other array removed
`.plus` | Array | Array | Returns a concatenated array
`.and` | Array | Array | Returns the intersection: Keep only values which can be found in both arrays
`.or` | Array | Array | Returns a uniqe array out of all elements of both arrays
`.unique` | | Array | Returns array with no double entries
`.includes` | Element | Boolean | Checks if the element is part of the array
`.compact` | Array | Array | Removes all `null` and `undefined` values from the array. Note that this is different from underscore's version, which removes all falsy values.

Please note that the result is a normal Array, not a BetterArray. You can use the `chain` method to do more calls in a row.

Please also note that all methods return a new array, the original array never gets mutated.

## MIT License

Copyright (C) 2015 Jan Lelis <http://janlelis.com>. Released under the MIT license.
