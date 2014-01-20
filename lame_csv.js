var _s = require('underscore');

function lameCSV(str) {
  return _s.reduce(str.split("\n"), function(table, row) {
    table.push(_s.map(row.split(","), function(c) { return c.trim()}));
    return table; 
  }, []);
};
var peopleTable = lameCSV("name,age,hair\nMerble,35,red\nBob,64,blonde");

console.dir(peopleTable);

function selectNames(table) {
  return _s.rest(_s.map(table, _s.first));
}

function second(ar){
  return ar[1];
}

function selectAges(table) {
  return _s.rest(_s.map(table, second));
}

function nth(ar, index){
  return ar[index];
}
function selectHairColor(table) {
  return _s.rest(_s.map(table, function(row) {
    return nth(row, 2); }));
}
