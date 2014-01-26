var _s = require('underscore');
var globals = {};

function makeBindFun(resolver) { 
  return function(k, v) {
    var stack = globals[k] || []; 
    globals[k] = resolver(stack, v); 
    return globals;
  }; 
}

var stackBinder = makeBindFun(function(stack, v) { 
  stack.push(v);
  return stack;
});
var stackUnbinder = makeBindFun(function(stack) {
        stack.pop();
        return stack;
})

var dynamicLookup = function(k) { 
  var slot = globals[k] || []; 
  return _s.last(slot);
};

stackBinder('a', function(){return 1;});

var target = {name: 'the right value',
  aux: function() { return this.name; },
  act: function() { return this.aux(); }};

target.act.call('wat');
         _.bindAll(target, 'aux', 'act');
             target.act.call('wat');
