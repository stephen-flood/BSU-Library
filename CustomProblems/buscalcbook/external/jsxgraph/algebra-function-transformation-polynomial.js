 var board6 = JXG.JSXGraph.initBoard('jsxgraph-algebra-function-transformation-polynomial', {boundingbox: [-10, 10, 10, -10], axis:true,showCopyright:false});

// Create slider
s6a = board6.create('slider', [[1,-3],[5,-3],[-3,1,3]], {name:'a'});
s6b = board6.create('slider', [[1,-4],[5,-4],[-5,0,5]], {name:'b'});
s6c = board6.create('slider', [[1,-5],[5,-5],[-5,0,5]], {name:'c'});

// Define the function
f6=function(x){return s6a.Value()*(x+s6b.Value())*(x+s6b.Value())+s6c.Value();}
// Graph the function
board6.create('functiongraph', [f6]);
// Graph where the origin moves
board6.create('point',[function(){return -s6b.Value();}, function(){return f6(-s6b.Value());} ],{size:2});

// Label the function.  
// Using trick from http://www.scientificpsychic.com/etc/square-root.html
board6.create('text',[-9.5,6,
  function() { 
  return 'f(x) = ' + s6a.Value().toFixed(2) + '(<i>x</i> + ' + s6b.Value().toFixed(2) + ')<sup>2</sup> + ' + s6c.Value().toFixed(2)  ;
  }], {fontSize:14});
board6.create('text',[-8.5,5,
  function() { 
  return ' = ' + s6a.Value().toFixed(2) + '<i>x</i><sup>2</sup> + ' + (s6a.Value()*2*s6b.Value()).toFixed(2) + '<i>x</i> + ' + (s6b.Value()*s6b.Value()+s6c.Value()).toFixed(2)  ;
  }], {fontSize:14});


board6.create('text',[2.5,6,
  function() { 
  return 'In <b>Vertex Form</b> <br> f(x) = ' + s6a.Value().toFixed(2) + '(<i>x</i> - ' + -s6b.Value().toFixed(2) + ')<sup>2</sup> + ' + s6c.Value().toFixed(2)  ;
  }], {fontSize:14});

