# BetterArray for JavaScript

A better API for arrays that you can activate whenever you like. It is a little like an underscore.js, but only for arrays. Inspired by Ruby's core library, but closer to JavaScript's.

**Discontinued:**: This project was great to learn more about arrays in JavaScript coming from Ruby. You are encouraged to check [the source](https://github.com/janlelis/better-array/blob/master/better-array.js) to learn about the implementation of each method.

## How it Works

```javascript
var BetterArray = require('better-array'); // if node/commonjs
```

You feed your arrays into the `BetterArray()` function:

```javascript
var a = BetterArray([3, "b", 4, null, 5, "b", 0]);
```

Now, `a` is a BetterArray object and has access to all the wonderful methods below. For example, `compact`, which removes all `null` and `undefined` elements:

```javascript
a.compact(); // => [3, 'b', 4, 5, "b", 0]
```

Please note that the resulting objects are always vanilla JS objects, not BetterArray wrapper objects. This is intentional; the main goal of this library is not the ability to chain, but to be very unobtrusive.

## Design Goals

* Good API over performance
* Delegate to native functions whenever possible
* Don't extend `Array.prototype`

## Install

Use the script file directly (via the `BetterArray` browser global), or get it from npm:

    $ npm install better-array

## Examples

```javascript
$ node
> ba = require('better-array')
> array = ba([2, 3, 4, 4, 5])
> array.first()
2
> array.last()
5
> array.last(3)
[ 4, 4, 5 ]
> array.minus([3, 4])
[ 2, 5 ]
> array.or([4, 5, 6])
[ 2, 3, 4, 5, 6 ]
> array.unique()
[ 2, 3, 4, 5 ]
> array.count(4)
2
> array.contains(9)
false
> array.isEmpty()
false
> array.doesSome(function(e){ return e % 2 == 0 })
true
> array.doesEvery(function(e){ return e % 2 == 0 })
false
> array.doesNone(function(e){ return e % 2 == 0 })
false
> array.$insert(2, "new element");
// array is now [2, 3, 'new element',  4,  4, 5 ]
```

See [better_array_spec](https://github.com/janlelis/better-array/blob/master/spec/better_array_spec.js) for more examples!

## API

All methods that begin with `$` mutate the original array, the others don't.

Method | Description
-------|------------
`.and(array)` | Returns the intersection: Keep only values which can be found in both arrays
`.at(index)` | Returns value at this index. Returns an array with the values when given multiple arguments
`.$clear()` | Deletes all content from the array and returns the emptied array
`.clone()` | Returns a new array object referencing the same values
`.compact()` | Returns array with all `null` and `undefined` values removed. Note that this is different from underscore's version, which removes all *falsy* values.
`.contains()` | Returns boolean that indicates if the element is part of the array
`.count()` | Returns number of elements. If argument given, returns how often this object appears(using `===`)
`.$delete(index)` | Remove the element at the given index. Can take multiple arguments.
`.doesEvery()` | [Array.prototype.every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
`.doesSome()` | [Array.prototype.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
`.doesNone()` | Returns true if none of the elements returns a true value for the test function
`.each()` | [Array.prototype.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
`.filter()` | [Array.prototype.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
`.first()` | Returns the first element
`.grep()` | Returns an array of elements matching the (regex) test 
`.first(integer)` | Returns an array of the first N elements
`.grep(matcher)` | Returns a filtered array by calling `matcher.test()` on every element, so you can use it to filter an array of strings using a regex
`.indexOf()` | [Array.prototype.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
`.$insert(index, value)` | Inserts an new element at this position
`.isEmpty()` | Returns `true` if the array is empty
`.last()` | Returns the last element. Returns an array of the last N elements if an integer argument given
`.lastIndexOf()` | [Array.prototype.lastIndexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)
`.map()` | [Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
`.minus(array)` | Returns an array with unique values and all elements of the other array removed
`.or(array)` | Returns a unique array out of all elements of both arrays
`.plus(array)` | Returns a concatenated array
`.$pop()` | [Array.prototype.pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
`.$push()` | [Array.prototype.push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
`.reduce()` | [Array.prototype.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
`.reduceRight()` | [Array.prototype.reduceRight](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight)
`.reverse()` | Returns the reversed array
`.$reverse()` | [Array.prototype.reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
`.rotate()` | Returns an array with the first element(s) put at the end
`.$set(index, value)` | Sets the value at the given index
`.size()` | Returns the array length
`.$shift()` | [Array.prototype.shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
`.slice()` | [Array.prototype.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
`.sliceLength(index, length)` | Returns an array slice, but second parameter determines length instead of end position
`.sort()` | Returns the array with all elements sorted
`.$sort()` | [Array.prototype.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
`.$splice()` | [Array.prototype.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
`.times(integer)` | Repeats the array N times
`.toArray()` | Returns the underlying array
`.unique()` | Returns array with no double entries
`.$unshift()` | [Array.prototype.unshift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
`.withoutFirst(number)` | Returns an array without the first N elements
`.withoutLast(number)` | Returns an array without the last N elements
`.zip(*arrays)` | Returns the transposed array

## Chaining

You have two options to chain together multiple better array functions:

### Using `BetterArray.chain` (more magic)

```javascript
BetterArray.chain([2, null, 3, 4]).withoutLast().compact().toArray() // => [2, 3]
```

### Extending the `Array.prototype` yourself (more explicit)

```javascript
Array.prototype.betterArray = function betterArray(){
  return BetterArray(this);
}
```

Use it like this:

```javascript
BetterArray([2, null, 3, 4]).withoutLast().betterArray().compact() // => [2, 3]
```

## Wish List

Not implemented, yet:

* xor
* eachRight
* mapRight
* $deleteValue
* isEqual
* find
* findIndex
* $fill
* fetch
* flatten
* reject
* sample
* shuffle
* $shuffle
* groupBy
* eachWindow (each_slice)
* eachGroupOf (each_cons)
* eachWithObject
* cycle
* min
* max
* minmax

## MIT License

Copyright (C) 2015 Jan Lelis. Released under the MIT license.
