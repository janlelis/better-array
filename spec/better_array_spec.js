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
    it("is like Ruby's Array#-", function() {
      expect( ba([2, 3, 4]).minus([3, 4, 5]) ).toEqual([2]);
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

});
