 var board5 = JXG.JSXGraph.initBoard('jsxgraph-algebra-function-transformation-root', {boundingbox: [-10, 10, 10, -10], axis:true,showCopyright:false});
board5.suspendUpdate();

// Create slider
s5a = board5.create('slider', [[1,-3],[5,-3],[-3,1,3]], {name:'a'});
s5b = board5.create('slider', [[1,-4],[5,-4],[-5,0,5]], {name:'b'});
s5c = board5.create('slider', [[1,-5],[5,-5],[-5,0,5]], {name:'c'});

// Define the function
f5=function(x){return s5a.Value()*Math.sqrt(x+s5b.Value())+s5c.Value();}
// Graph the function
board5.create('functiongraph', [f5]);
// Graph where the origin moves
board5.create('point', [function(){return -s5b.Value();},function(){return f5(-s5b.Value());}], {size:2});

// Label the function.  
// Using trick from http://www.scientificpsychic.com/etc/square-root.html
board5.create('text',[-9.5,6,
  function() { 
  return 'f(x) = <span style=\"white-space: nowrap; font-size:larger\">' + s5a.Value().toFixed(2) + ' &radic;<span style=\"text-decoration:overline;\">&nbsp;<i>x</i> + ' + s5b.Value().toFixed(2) + '&nbsp;</span> + ' + s5c.Value().toFixed(2) + '</span>'  ;
  }], {fontSize:14});


board5.unsuspendUpdate();
