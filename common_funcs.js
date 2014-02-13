var __ = require('underscore');

var existy = function(a){return a !=null};

var truthy = function(a){ return a != false && existy(a)};

var  doWhen = function(cond, action) { 
  if(truthy(cond))
    return action(); 
  else
    return undefined; 
}

function executeIfHasField(target, name) {
  return doWhen(existy(target[name]), function() {
    var result = __.result(target, name); 
    console.log(['The result is', result].join(' ')); 
    return result;
  }); 
}
