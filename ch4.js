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
function k(a){
return function(){ return a;};
}
k(111);
k(111)()
repeatedly(5,k('Dima'))
function fail(thing) { throw new Error(thing);
}
fail('')
_
try{
fail('something');
}catch(e){console.dir(e)}
_
function invoker(NAME, METHOD){
return function(target){
  if (!target) fail('need target');
  var target_method = target[NAME];
  var args = __.rest(arguments);
  return doWhen(target_method && METHOD = target_method, function(){
    return target_method.apply(target, args);
    });
  }
}
invoker('range', __.range)
ff = invoker('range', __.range)
ff()
ff({})
function invoker(NAME, METHOD){
return function(target){
  if (!target) fail('need target');
  var target_method = target[NAME];
  var args = __.rest(arguments);
  return doWhen(target_method && METHOD === target_method, function(){
    return target_method.apply(target, args);
    });
  }
}
ff = invoker('range', __.range)
ff({})
people
function stupid(){
this.name = this.name + ' stupid';
}
ff = invoker('stupid', stupid);
ff = invoker('stupid1', stupid);
ff = invoker('stupid', stupid);
ff(people[0])
var rev = invoker('reverse', Array.prototype.reverse);
__.map([[1,2,3]], rev)
__.map([[1,2,3]], Array.prototype.reverse)
__.map([[1,2,3]], rev)
function makeAdder(a){
return function(b){
  return a+b;
  }
}
add100 = makeAdder(100)
add100(12)
function fnull(fun){
var defaults = __.rest(arguments);
return function(){
  var args = __.map(arguments, function(e,i){
    return existy(e)?e:defaults[i];
    });
  return fun.apply(null, args);
  }
}
existy
var safeMult = fnull(function(total, n) { return total * n }, 1, 1);
__.reduce(nums, safeMult);
var nums = [1,2,3,null,5];
__.reduce(nums, safeMult);
function checker(/* validators */) {
var validators = __.toArray(arguments);
return function(obj) {
  return __.reduce(validators, function(errs, check) {
    if (check(obj)) return errs
    else
    return __.chain(errs).push(check.message).value();
    }, []); };
}
function validator(message, fun) { var f = function(/* args */) {
return fun.apply(fun, arguments); };
f['message'] = message;
return f; }
always
function always(a){ return function(){ return a}}
var gonnaFail = checker(validator("ZOMG!", always(false)));
gonnaFail(100);
gonnaFail(__.range(1,10));
__.range(1,10)
function hasKeys(){
var keys = __.toArray(arguments);
var fun = function(obj){
  return __.every(keys, function(k){
    return __.has(obj,k);
    });
  };
fun.message = cat(['must have values for keys '], keys).join(" ");
return fun;
}
hasKeys('a','b')
function cat(ar){
return ar.concat(__.rest(arguments));
}
hasKeys('a','b')
ch = hasKeys('a','b')
ch({a:1,c:2})
ch({a:1,b:2})
var checkCommand = checker(validator("must be a map", aMap),
hasKeys('msg', 'type'));
function aMap(a){ return __.isObject(a)}
var checkCommand = checker(validator("must be a map", aMap),
hasKeys('msg', 'type'));
checkCommand({msg: "blah", type: "display"});
checkCommand(32);
