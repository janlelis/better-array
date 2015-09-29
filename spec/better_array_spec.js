'use strict';

if (typeof(BetterArray) === 'undefined') {
	  var isNode = true;
    var ba = require("../better-array");
} else {
	  var isNode = false;
		var ba = BetterArray;
}

describe('better-array', function() {
	describe('#minus', function() {
    it("is like Ruby's Array#-", function() {
      expect( ba([2,3,4]).minus([3,4,5]) ).toEqual([2]);
    });
	});
});
