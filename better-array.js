'use strict';

(function(global, code){
  if(typeof exports === 'object'){
    module.exports = code();
  } else{
    global.BetterArray = code();
  }}(this, function(){

    var BetterArray = function BetterArray(array){
      return Object.create(BetterArrayPrototype).init(array);
    }

    var BetterArrayPrototype = {
      init: function(array){
        if(!Array.isArray(array)){
          throw "BetterArrays can only be initialized with Arrays";
        }
        this.native = array;
        return this;
      },
      chain: function(method){
        return Object.create(BetterArrayPrototype).init(this[method].apply(this, Array.prototype.slice.call(arguments, 1)));
      },

      minus: function(other){
        return BetterArray(
          this.native.filter(function(e){
            return other.indexOf(e) < 0;
          })
        ).unique();
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
        return BetterArray(this.native.concat(other)).unique();
      },

      includes: function(element){
        return this.native.indexOf(element) >= 0;
      },

      unique: function(){
        return this.native.filter(function(e){
          return e in this ? false : this[e] = true;
        }, {});
      },

      compact: function(){
        return this.native.filter(function(e){
          return e != null;
        });
      },

      times: function(integer){
        var res = []
        for(var i = 0; i < integer; i++){
          res = res.concat(this.native);
        }
        return res;
      },

      count: function(object){
        if(arguments.length === 0){
          return this.native.length;
        } else {
          return this.native.filter(function(e){ return e === object }).length;
        }
      }
    }

    return BetterArray;
  })
);
