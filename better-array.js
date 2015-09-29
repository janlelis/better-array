'use strict';

(function(global, code){
  if(typeof exports === 'object'){
    module.exports = code();
  } else{
    global.BetterArray = code();
  }}(this, function(){

    var BetterArrayPrototype = {
      init: function(array){
        this.native = array;
        return this;
      },
      chain: function(method){
        return Object.create(BetterArrayPrototype).init(this[method].apply(this, Array.prototype.slice.call(arguments, 1)));
      },

      minus: function(other){
        // should this return uniq result?
        return this.native.filter(function(e){
          return other.indexOf(e) < 0;
        });
      },
      plus: function(other){
        return this.native.concat(other);
      },
      and: function(other){
        return this.native.filter(function(e){
          return other.indexOf(e) >= 0;
        });
      },
      or: function(other){
        // TODO
      },

      // non array operations?
      includes: function(element){
        return this.native.indexOf(element) >= 0;
      },

      // delegators?

      reduce: function(cur, acc){ return this.native.reduce(cur, acc); },
      reduceRight: function(cur, acc){ return this.native.reduceRight(cur, acc); },
      every: function(fn){ return this.native.every(fn); }
      // ...
    }

    return function BetterArray(array){ return Object.create(BetterArrayPrototype).init(array); }
  })
);
