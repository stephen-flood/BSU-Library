 var board7 = JXG.JSXGraph.initBoard('jsxgraph-algebra-function-transformation-trig', {boundingbox: [-10, 10, 10, -10], axis:true,showCopyright:false});
board7.suspendUpdate();

// Create slider
s7a = board7.create('slider', [[1,-3],[5,-3],[-3,1,3]], {name:'a'});
s7b = board7.create('slider', [[1,-4],[5,-4],[-3,1,3]], {name:'b'});
s7c = board7.create('slider', [[1,-5],[5,-5],[-5,0,5]], {name:'c'});
s7d = board7.create('slider', [[1,-6],[5,-6],[-5,0,5]], {name:'d'});

// Define the function
f7=function(x){return s7a.Value()*Math.sin(x*s7b.Value()+s7c.Value())+s7d.Value();} ;
// Graph the function
board7.create('functiongraph', [f7]);
// Graph where the origin moves
board7.create('point',  [function(){ return -s7c.Value()/s7b.Value();},
		function(){ return f7(-s7c.Value()/s7b.Value()) ;}], {size:2});

// Label the function.  
// Using trick from http://www.scientificpsychic.com/etc/square-root.html
board7.create('text',[-9.5,6,
  function() { 
  return 'f(x) = ' + s7a.Value().toFixed(2) + 'sin( ' + s7b.Value().toFixed(2) +  ' <i>x</i> + ' + s7c.Value().toFixed(2) + ') + ' + s7d.Value().toFixed(2)  ;
  }], {fontSize:14});


board7.unsuspendUpdate();

