# BetterArray for JavaScript [![[npm]](https://img.shields.io/npm/v/better-array.svg)](https://www.npmjs.com/package/better-array)

A better API for arrays that you can activate whenever you like. It is a little like an underscore.js, but only for arrays. Inspired by Ruby's core library, but closer to JavaScript's.

## How it Works

```javascript
var BetterArray = require('better-array'); // if node/commonjs
```

You feed your arrays that you want to do more fancy stuff with into the `BetterArray` function:

```javascript
var a = BetterArray([3, 'b', 4, null, 5, "b", 0]);
```

Now, `a` is a BetterArray object and has access to all the wonderful methods below. For example, `compact`, which removes all `null` and `undefined` elements:

```javascript
a.compact(); // => [3, 'b', 4, 5, "b", 0]
```

Or the `count` method:

```javascript
a.count('b'); // => 2
```

See below for more examples. Please note that the resulting objects are always vanilla JS objects, not BetterArray wrapper objects. This is intentional, the library is not designed for chaining.

## Setup

Use the script file directly (via browser global), or get it from npm:

    $ npm install better-array

## Methods

Method | Description
-------|------------
`.and(array)` | Returns the intersection: Keep only values which can be found in both arrays
`.at(index)` | Returns value at this index
`.at(*indexes)` | Returns an array with the values at these indexes
`.clone()` | Returns a new array object referencing the same values
`.compact()` | Returns array with all `null` and `undefined` values removed. Note that this is different from underscore's version, which removes all *falsy* values.
`.count()` | Returns number of elements. If parameter given, returns how often this object appears(using `===`)
`.count(object)` | Returns how often this object appears in the array (using `===`)
`.drop(number)` | Returns an array without the first N elements
`.first()` | Returns the first element
`.first(integer)` | Returns an array of the first N elements
`.grep(matcher)` | Returns a filtered array by calling `matcher.test()` on every element, so you can use it to filter an array of strings using a regex
`.contains()` | Returns boolean that indicates if the element is part of the array
`.isEmpty()` | Returns `true` if the array is empty
`.last()` | Returns the last element
`.last(integer)` | Returns an array of the last N elements
`.minus(array)` | Returns an array with unique values and all elements of the other array removed
`.or(array)` | Returns a unique array out of all elements of both arrays
`.plus(array)` | Returns a concatenated array
`.size()` | Returns the array length
`.sliceLength(index, length)` | Returns an array slice, but second parameter determines length instead of end position
`.take(number)` | Returns an array of the first N elements
`.times(integer)` | Repeats the array N times
`.toArray()` | Returns the underlying array
`.unique()` | Returns array with no double entries
`.zip(*arrays)` | Returns the transposed array

Please also note that all methods return a new array, the original array never gets mutated.


## MIT License

Copyright (C) 2015 Jan Lelis <http://janlelis.com>. Released under the MIT license.
