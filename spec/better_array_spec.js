'use strict';

if (typeof(BetterArray) === 'undefined') {
    var isNode = true;
    var ba = require("../better-array");
} else {
    var isNode = false;
    var ba = BetterArray;
}

describe('BetterArray', function() {
  describe('#minus', function() {
    it("takes values from array without the ones from the other array", function() {
      expect( ba([2, 3, 4]).minus([3, 4, 5]) ).toEqual([2]);
    });
  });

  describe('#plus', function() {
    it("concatenates two arrays", function() {
      expect( ba([2, 3, 4]).plus([3, 4, 5]) ).toEqual([2, 3, 4, 3, 4, 5]);
    });
  });

  describe('#and', function() {
    it("returns the intersection", function() {
      expect( ba([2, 3, 4]).and([3, 4, 5]) ).toEqual([3, 4]);
    });
  });

  describe('#or', function() {
    it("returns a uniqe array out of all elements of both arrays", function() {
      expect( ba([2, 3, 4]).or([3, 4, 4, 5]) ).toEqual([2, 3, 4, 5]);
    });
  });

  describe('#unique', function() {
    it("returns array with no double entries", function() {
      expect( ba([2, 3, 3, 4]).unique() ).toEqual([2, 3, 4]);
    });
  });

  describe('#includes', function() {
    it("returns array with no double entries", function() {
      expect( ba([2, 3, 4]).includes(4) ).toEqual(true);
      expect( ba([2, 3, 4]).includes(5) ).toEqual(false);
    });
  });

  describe('#compact', function() {
    it("returns array with all null and undefined values removed", function() {
      expect( ba([2, null, 3, undefined, 4, false]).compact() ).toEqual([2, 3, 4, false]);
    });
  });

});
