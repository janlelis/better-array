'use strict';

if (typeof(betterArray) === 'undefined') {
	  var isNode = true;
    var a = require("../better-array");
} else {
	  var isNode = false;
		var a = betterArray;
}

describe('better-array', function() {
	describe('#minus', function() {
    it("is like Ruby's Array#-", function() {
      expect( a([2,3,4]).minus([3,4,5]) ).toEqual([2]);
    });
	});
});
