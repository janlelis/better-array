'use strict';

(function(global, code){
  if(typeof exports === 'object'){
    module.exports = code();
  } else{
    global.BetterArray = code();
  }}(this, function(){

    var BetterArray = function BetterArray(array){
      var newBetterArray = Object.create(BetterArrayPrototype);
      newBetterArray.native = array;
      return newBetterArray;
    }

    var BetterArrayPrototype = {
      and: function and(other){
        return this.native.filter(function(e){
          return other.indexOf(e) >= 0;
        });
      },
      at: function at(index){
        if(arguments.length === 1){
          return this.native[index];
        } else {
          return Array.prototype.map.call(arguments, function(i){
            return this.native[i];
          }.bind(this));
        }
      },
      $clear: function $clear(){
        this.native.length = 0;
        return this.native;
      },
      clone: function clone(){
        return this.native.slice();
      },
      compact: function compact(){
        return this.native.filter(function(e){
          return e != null;
        });
      },
      count: function count(object){
        if(arguments.length === 0){
          return this.native.length;
        } else {
          return this.native.filter(function(e){ return e === object }).length;
        }
      },
      $delete: function $delete(indexes){
        var indexesToDelete = Array.prototype.slice.call(arguments).sort().reverse();
        for(var i = 0; i < indexesToDelete.length; i++){
          this.native.splice(indexesToDelete[i], 1);
        }
        return this.native;
      },
      doesEvery: function doesEvery(){
        return this.native.every.apply(this.native, arguments);
      },
      doesSome: function doesSome(){
        return this.native.some.apply(this.native, arguments);
      },
      doesNone: function doesNone(fn){
        return this.native.every.call(this.native, function(e){ return !fn(e); });
      },
      each: function each(){
        return this.native.forEach.apply(this.native, arguments);
      },
      filter: function filter(){ 
        return this.native.filter.apply(this.native, arguments);
      },
      first: function first(number){
        if(arguments.length === 0){
          return this.native[0];
        } else {
          return this.native.slice(0, number);
        }
      },
      grep: function grep(matcher){
        return this.native.filter(function(e){
          return matcher.test(e)
        });
      },
      contains: function contains(element){
        return this.native.indexOf(element) >= 0;
      },
      indexOf: function indexOf(){
        return this.native.indexOf.apply(this.native, arguments);
      },
      $insert: function $insert(index, element){
        this.native.splice(index, 0, element);
      },
      isEmpty: function isEmpty(){
        return this.native.length === 0;
      },
      last: function last(number){
        if(arguments.length === 0){
          return this.native[this.native.length - 1];
        } else {
          return this.native.slice(-number, this.native.length);
        }
      },
      lastIndexOf: function lastIndexOf(){
        return this.native.lastIndexOf.apply(this.native, arguments);
      },
      map: function map(){ 
        return this.native.map.apply(this.native, arguments);
      },
      minus: function minus(other){
        return BetterArray(
          this.native.filter(function(e){
            return other.indexOf(e) < 0;
          })
        ).unique();
      },
      or: function or(other){
        return BetterArray(this.native.concat(other)).unique();
      },
      plus: function plus(other){
        return this.native.concat(other);
      },
      $pop: function $pop(){
        return this.native.pop.apply(this.native, arguments);
      },
      $push: function $push(){
        return this.native.push.apply(this.native, arguments);
      },
      reduce: function reduce(){
        return this.native.reduce.apply(this.native, arguments);
      },
      reduceRight: function reduceRight(){
        return this.native.reduceRight.apply(this.native, arguments);
      },
      reverse: function reverse(){
        var clone = this.native.slice();
        return clone.reverse.apply(clone, arguments);
      },
      $reverse: function $reverse(){
        return this.native.reverse.apply(this.native, arguments);
      },
      rotate: function rotate(count){
        if(arguments.length === 0){ count = 1 }
        return this.native.slice(count, this.native.length).concat(this.native.slice(0, count));
      },
      $set: function $set(index, element){
        this.native[index] = element;
        return this.native;
      },
      size: function size(){
        return this.native.length;
      },
      $shift: function $shift(){
        return this.native.shift.apply(this.native, arguments);
      },
      slice: function slice(){
        return this.native.slice.apply(this.native, arguments);
      },
      sliceLength: function sliceLength(from, length){
        return this.native.slice(from, from + length);
      },
      sort: function sort(){
        var clone = this.native.slice();
        return clone.sort.apply(clone, arguments);
      },
      $sort: function $sort(){
        return this.native.sort.apply( this.native, arguments);
      },
      $splice: function $splice(){
        return this.native.splice.apply(this.native, arguments);
      },
      times: function times(integer){
        var res = []
        for(var i = 0; i < integer; i++){
          res = res.concat(this.native);
        }
        return res;
      },
      toArray: function toArray(){
        return this.native;
      },
      unique: function unique(){
        return this.native.filter(function(e){
          return e in this ? false : this[e] = true;
        }, {});
      },
      $unshift: function $unshift(){
        return this.native.unshift.apply(this.native, arguments);
      },
      withoutFirst: function withoutFirst(number){
        if(arguments.length === 0){ number = 1; }
        return this.native.slice(number, this.native.length);
      },
      withoutLast: function withoutLast(number){
        if(arguments.length === 0){ number = 1; }
        return this.native.slice(0, this.native.length - number);
      },
      zip: function zip(){
        var others = Array.prototype.slice.call(arguments);
        return this.native.map(function(e, i) {
          var row = others.map(function(f){ return f[i]; });
          row.unshift(e);
          return row;
        });
      }
    }

    // Allow some chaining

    var BetterArrayChainPrototype = {};

    for(var functionName in BetterArrayPrototype){
      (function(){
        var fn = BetterArrayPrototype[functionName];
        if(functionName === "toArray"){
          BetterArrayChainPrototype[functionName] = fn;
        } else {
          BetterArrayChainPrototype[functionName] = function chain(){
            return BetterArray.chain(fn.apply(this, arguments));
          }
        }
      })();
    }

    BetterArray.chain = function BetterArrayChain(array){
      var newBetterArrayChain = Object.create(BetterArrayChainPrototype);
      newBetterArrayChain.native = array;
      return newBetterArrayChain;
    }

    return BetterArray;
  })
);
