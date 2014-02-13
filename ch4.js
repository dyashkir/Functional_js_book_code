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
__
function finder(bestFunction, valueFunction, stuff){
__.reduce(stuff, function(element, best_val){
  var best = valueFunction(best_val);
  var cur = valueFunction(element);
  return (bestFunction(best, curr) === best)?best_val:cur;
  })
return _;
}
finder(function(a,b){return a}, function(a){return a}, [1,2,3])
function finder(bestFunction, valueFunction, stuff){
return __.reduce(stuff, function(element, best_val){
  var best = valueFunction(best_val);
  var curr = valueFunction(element);
  return (bestFunction(best, curr) === best)?best_val:curr;
  });
}
finder(function(a,b){return a}, function(a){return a}, [1,2,3])
finder(__.indentity, Math.max, [1,2,3,4,5])
__.indentity
__.identity
finder(__.identity, Math.max, [1,2,3,4,5])
finder(__.identity, Math.min, [1,2,3,4,5])
finder(Math.min, __.indentity, [1,2,3,4,5])
finder(Math.min, __.identity, [1,2,3,4,5])
function plucker(FIELD) { return function(obj) {
return (obj && obj[FIELD]); };
}
finder(Math.max, plucker('age'), people)
var people = [{name: "Fred", age: 65}, {name: "Lucy", age: 36}];
finder(Math.max, plucker('age'), people)
function finder(valueFunction, bestFunction, stuff){
return __.reduce(stuff, function(element, best_val){
  var best = valueFunction(best_val);
  var curr = valueFunction(element);
  return (bestFunction(best, curr) === best)?best_val:element;
  });
}
finder(plucker('age'), Math.max, people)
function best(fun, coll) {
return _.reduce(coll, function(x, y) {
  return fun(x, y) ? x : y });
}
function repeatedly(times, fun) { return _.map(_.range(times), fun);
}
repeatedly(10, function(){return Math.random()*10})
function repeatedly(times, fun) { return __.map(__.range(times), fun);

function repeatedly(times, fun) { return __.map(__.range(times), fun);}
repeatedly(10, function(){return Math.random()*10})
repeatedly(10, function(){return Math.floor(Math.random()*10)})
repeatedly(10, __.identity)
function iterateUntil(fun, check, init) { var ret = [];
var result = fun(init);
while (check(result)) { ret.push(result); result = fun(result);
  }
return ret; };
iterateUntil(function(n) { return n+n }, function(n) { return n <= 1024 },
1);
function k(){
function k(a){
  return function(){ return a;};
  }
k(111);
k(111)()
repeatedly(5,k('Dima'))
