'use strict';

if (typeof(BetterArray) === 'undefined') {
    var isNode = true;
    var ba = require("../better-array");
} else {
    var isNode = false;
    var ba = BetterArray;
}

describe('BetterArray', function() {
  describe('.and', function() {
    it("returns the intersection", function() {
      expect( ba([2, 3, 4]).and([3, 4, 5]) ).toEqual([3, 4]);
    });
  });

  describe('.at', function() {
    it("returns value at that index for one argument", function() {
      expect( ba([2, 3, 4]).at(1) ).toEqual(3);
    });

    it("returns values at that indexes for multiple argument", function() {
      expect( ba([2, 3, 4]).at(0, 2) ).toEqual([2, 4]);
    });
  });

  describe('.$clear', function() {
    it("deletes all content from the array", function() {
      var array = [2, 3, 4];
      ba(array).$clear();
      expect( array ).toEqual([]);
    });
  });

  describe('.clone', function() {
    it("returns a shallow copy of the array", function() {
      var object = [2, 3, 4];
      expect( ba(object).clone() ).toEqual(object);
    });

    it("returns a different object", function() {
      var object = [2, 3, 4];
      expect( ba(object).clone() ).not.toBe(object);
    });
  });

  describe('.compact', function() {
    it("returns array with all null and undefined values removed", function() {
      expect( ba([2, null, 3, undefined, 4, false]).compact() ).toEqual([2, 3, 4, false]);
    });
  });

  describe('.contains', function() {
    it("returns array with no double entries", function() {
      expect( ba([2, 3, 4]).contains(4) ).toEqual(true);
      expect( ba([2, 3, 4]).contains(5) ).toEqual(false);
    });
  });

  describe('.count', function() {
    it("returns array size for no argument", function() {
      expect( ba([2, 3, 4]).count() ).toEqual(3);
    });

    it("returns number of === matches for one argument", function() {
      expect( ba([2, 3, 3, 4]).count(3) ).toEqual(2);
    });
  });

  describe('.$delete', function() {
    it("deletes the element at the given index", function() {
      var array = [2, 3, 4];
      ba(array).$delete(1);
      expect( array ).toEqual([2, 4]);
    });

    it("can delete multiple elements at once", function() {
      var array = [2, 3, 4];
      ba(array).$delete(0, 2);
      expect( array ).toEqual([3]);
    });

    it("returns the array", function(){
      var array = [2, 3, 4];
      expect( ba(array).$delete(0, 2) ).toEqual([3]);
    });
  });

  describe('.doesEvery', function() {
    it("delegates to native .every", function() {
      expect( ba([2, 3, 4]).doesEvery(function(e){ return e % 2 == 0; }) ).toEqual(false);
      expect( ba([2, 3, 4]).doesEvery(function(e){ return e % 1 == 0; }) ).toEqual(true);
    });
  });

  describe('.doesNone', function() {
    it("returns true if none of the elements returns a true value for the test function", function() {
      expect( ba([2, 3, 4]).doesNone(function(e){ return e % 5 == 0; }) ).toEqual(true);
    });

    it("returns false if at least one of the elements returns a true value for the test function", function() {
      expect( ba([2, 3, 4]).doesNone(function(e){ return e % 4 == 0; }) ).toEqual(false);
    });
  });

  describe('.doesSome', function() {
    it("delegates to native .some", function() {
      expect( ba([2, 3, 4]).doesSome(function(e){ return e % 5 == 0; }) ).toEqual(false);
      expect( ba([2, 3, 4]).doesSome(function(e){ return e % 4 == 0; }) ).toEqual(true);
    });
  });

  describe('.each', function() {
    it("delegates to native .forEach", function() {
      var res = [];
      ba([2, 3, 4]).each(function(e, i){ res[i] = e + 1; })
      expect( res ).toEqual([3, 4, 5]);
    });
  });

  describe('.filter', function() {
    it("delegates to native .filter", function() {
      expect(
        ba([2, 3, 4]).filter(function(e){ return e % 2 === 0; })
      ).toEqual([2, 4]);
    });
  });

  describe('.first', function() {
    it("returns the first value for no argument", function() {
      expect( ba([2, 3, 4]).first() ).toEqual(2);
    });

    it("returns the first N values for integer argument", function() {
      expect( ba([2, 3, 4]).first(2) ).toEqual([2, 3]);
    });
  });

  describe('.grep', function() {
    it("returns an array of elements matching the (regex) test ", function() {
      expect( ba(["More", "Micro", "Modules"]).grep(/r/) ).toEqual(["More", "Micro"]);
    });
  });

  describe('.indexOf', function() {
    it("delegates to native .indexOf", function() {
      expect( ba([2, 3, 3, 4]).indexOf(3) ).toEqual(1);
    });
  });

  describe('.$insert', function() {
    it("inserts a new element into the array", function() {
      var array = [2, 3, 4];
      ba(array).$insert(1, 2.5);
      expect( array ).toEqual([2, 2.5, 3, 4]);
    });
  });

  describe('.isEmpty', function() {
    it("returns false for non-empty arrays ", function() {
      expect( ba([2, 3, 4]).isEmpty() ).toEqual(false);
    });

    it("returns true for empty arrays ", function() {
      expect( ba([]).isEmpty() ).toEqual(true);
    });
  });

  describe('.last', function() {
    it("returns the last value for no argument", function() {
      expect( ba([2, 3, 4]).last() ).toEqual(4);
    });

    it("returns the last N values for integer argument", function() {
      expect( ba([2, 3, 4]).last(2) ).toEqual([3, 4]);
    });
  });

  describe('.lastIndexOf', function() {
    it("delegates to native .lastIndexOf", function() {
      expect( ba([2, 3, 3, 4]).indexOf(3) ).toEqual(1);
    });
  });

  describe('.map', function() {
    it("delegates to native .map", function() {
      expect(
        ba([2, 3, 4]).map(function(e){ return e + 1; })
      ).toEqual([3, 4, 5]);
    });
  });

  describe('.minus', function() {
    it("takes values from array without the ones from the other array", function() {
      expect( ba([2, 3, 4]).minus([3, 4, 5]) ).toEqual([2]);
    });
  });

  describe('.or', function() {
    it("returns a uniqe array out of all elements of both arrays", function() {
      expect( ba([2, 3, 4]).or([3, 4, 4, 5]) ).toEqual([2, 3, 4, 5]);
    });
  });

  describe('.plus', function() {
    it("concatenates two arrays", function() {
      expect( ba([2, 3, 4]).plus([3, 4, 5]) ).toEqual([2, 3, 4, 3, 4, 5]);
    });
  });

  describe('.$pop', function(){
    it("removes an element from the end of the array", function(){
      var array = [2, 3, 4];
      ba(array).$pop();
      expect( array ).toEqual([2, 3]);
    });

    it("returns the removed element", function(){
      var array = [2, 3, 4];
      expect( ba(array).$pop() ).toEqual(4);
    });
  });

  describe('.$push', function(){
    it("appends an element to the end of the array", function(){
      var array = [2, 3, 4];
      ba(array).$push(5);
      expect( array ).toEqual([2, 3, 4, 5]);
    });

    it("returns the new array length", function(){
      var array = [2, 3, 4];
      expect( ba(array).$push(5) ).toEqual(4);
    });
  });

  describe('.reduce', function() {
    it("delegates to native .reduce", function() {
      expect(
        ba([2, 3, 4]).reduce(function(acc, cur){ return acc - cur; })
      ).toEqual(-5);
    });
  });

  describe('.reduceRight', function() {
    it("delegates to native .reduceRight", function() {
      expect(
        ba([2, 3, 4]).reduceRight(function(acc, cur){ return acc - cur; })
      ).toEqual(-1);
    });
  });

  describe('.reverse', function() {
    it("delegates to native .reverse", function() {
      expect( ba([2, 3, 4]).reverse() ).toEqual([4, 3, 2])
    });

    it("does not mutate the original array", function() {
      var object = [2, 3, 4];
      ba(object).reverse();
      expect(object).toEqual([2, 3, 4]);
    });
  });

  describe('.$reverse', function() {
    it("delegates to native .reverse", function() {
      expect( ba([2, 3, 4]).$reverse() ).toEqual([4, 3, 2])
    });

    it("does mutate the original array", function() {
      var object = [2, 3, 4];
      ba(object).$reverse();
      expect(object).toEqual([4, 3, 2]);
    });
  });

  describe('.rotate', function() {
    it("rotates by N", function() {
      expect( ba([2, 3, 4, 5, 6]).rotate(2) ).toEqual([4, 5, 6, 2, 3]);
    });

    it("rotates by negative N", function() {
      expect( ba([2, 3, 4, 5, 6]).rotate(-2) ).toEqual([5, 6, 2, 3, 4]);
    });

    it("rotates by 1 without argument", function() {
      expect( ba([2, 3, 4, 5, 6]).rotate(1) ).toEqual([3, 4, 5, 6, 2]);
    });
  });

  describe('.$set', function() {
    it("sets the element at this index and returns array", function() {
      expect( ba([2, 3, 4]).$set(1, "three") ).toEqual([2, "three", 4]);
    });

    it("returns values at that indexes for multiple argument", function() {
      expect( ba([2, 3, 4]).at(0, 2) ).toEqual([2, 4]);
    });
  });

  describe('.size', function() {
    it("returns array size ", function() {
      expect( ba([2, 3, 4]).size() ).toEqual(3);
    });
  });

  describe('.$shift', function(){
    it("removes an element from the beginning of the array", function(){
      var array = [2, 3, 4];
      ba(array).$shift();
      expect( array ).toEqual([3, 4]);
    });

    it("returns the removed element", function(){
      var array = [2, 3, 4];
      expect( ba(array).$shift() ).toEqual(2);
    });
  });

  describe('.slice', function() {
    it("returns a the slice, 2nd params defines end index", function() {
      expect( ba([2, 3, 4]).slice(1,2) ).toEqual([3]);
    });
  });

  describe('.sliceLength', function() {
    it("returns a the slice, but 2nd params defines length of slice", function() {
      expect( ba([2, 3, 4]).sliceLength(1,2) ).toEqual([3, 4]);
    });
  });

  describe('.sort', function() {
    it("delegates to native .sort", function() {
      expect( ba([4, 3, 2]).sort() ).toEqual([2, 3, 4])
    });

    it("does not mutate the original array", function() {
      var object = [4, 3, 2];
      ba(object).sort();
      expect(object).toEqual([4, 3, 2]);
    });
  });

  describe('.$sort', function() {
    it("delegates to native .sort", function() {
      expect( ba([4, 3, 2]).$sort() ).toEqual([2, 3, 4])
    });

    it("does mutate the original array", function() {
      var object = [4, 3, 2];
      ba(object).$sort();
      expect(object).toEqual([2, 3, 4]);
    });
  });

  describe('.$splice', function() {
    it("returns a the slice", function() {
      expect( ba([2, 3, 4]).$splice(1, 2) ).toEqual([3, 4]);
    });

    it("removes slice from original array", function() {
      var array = [2, 3, 4];
      ba(array).$splice(1, 2);
      expect( array ).toEqual([2]);
    });

    it("can be used to add new content to the array", function(){
      var array = [2, 3, 4];
      ba(array).$splice(1, 2, 0);
      expect( array ).toEqual([2, 0]);
    });
  });

  describe('.times', function() {
    it("returns an array N times repeated", function() {
      expect( ba([2, 3, 4]).times(3) ).toEqual([2, 3, 4, 2, 3, 4, 2, 3, 4]);
    });
  });

  describe('.toArray', function() {
    it("returns native array", function() {
      var object = [2, 3, 4];
      expect( ba(object).toArray() ).toBe(object);
    });
  });

  describe('.unique', function() {
    it("returns array with no double entries", function() {
      expect( ba([2, 3, 3, 4]).unique() ).toEqual([2, 3, 4]);
    });
  });

  describe('.$unshift', function(){
    it("appends an element to the beginning of the array", function(){
      var array = [2, 3, 4];
      ba(array).$unshift(5);
      expect( array ).toEqual([5, 2, 3, 4]);
    });

    it("returns the new array length", function(){
      var array = [2, 3, 4];
      expect( ba(array).$unshift(5) ).toEqual(4);
    });
  });

  describe('.withoutFirst', function(number) {
    it("returns the all of the arrays values, except the first N", function() {
      expect( ba([2, 3, 4]).withoutFirst(2) ).toEqual([4]);
    });

    it("assumes count of 1 when no argument given", function() {
      expect( ba([2, 3, 4]).withoutFirst() ).toEqual([3, 4]);
    });
  });

  describe('.withoutLast', function(number) {
    it("returns the all of the arrays values, except the last N", function() {
      expect( ba([2, 3, 4]).withoutLast(2) ).toEqual([2]);
    });

    it("assumes count of 1 when no argument given", function() {
      expect( ba([2, 3, 4]).withoutLast() ).toEqual([2, 3]);
    });
  });

  describe('.zip', function() {
    it("zips together multilpe arrays", function() {
      expect(
        ba([2, 3, 4]).zip([9, 8, 7], ["a", "b", "c"])
      ).toEqual(
        [
          [2, 9, "a"],
          [3, 8, "b"],
          [4, 7, "c"]
        ]
      );
    });
  });

  describe('[chaining]', function(){
    it("works", function(){
      expect(
        ba.chain([2, 3, null, 4]).reverse().compact().toArray()
      ).toEqual([4, 3, 2]);
    });

    it("returns an Array for .toArray()", function(){
      expect(
        Array.isArray( ba.chain([2, 3, 4]).reverse().toArray() )
      ).toEqual(true);
    });
  });

});
