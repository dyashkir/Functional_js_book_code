var _s = require('underscore');

var lyricSegmentBeer = function(n) { 
  return _s.chain([])
  .push(n + " bottles of beer on the wall") 
  .push(n + " bottles of beer")
  .push("Take one down, pass it around") 
  .tap(function(lyrics) {
    if (n > 1){
      lyrics.push((n- 1) + " bottles of beer on the wall.");
    }else{
      lyrics.push("No more bottles of beer on the wall!");
    }
  }).value(); 
}


function song(start, end, lyricGen) { 
  return _s.reduce(_s.range(start,end,-1),
    function(acc,n) {
      return acc.concat(lyricGen(n));
    }, []); }

var beer = song(100, 1, lyricSegmentBeer);

console.log(beer);
