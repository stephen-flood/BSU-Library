 var board2 = JXG.JSXGraph.initBoard('jsxgraph-algebra-general-exponential', {boundingbox: [-10, 10, 10, -10], axis:true,showCopyright:false});
board2.suspendUpdate();

// Create slider
s1 = board2.create('slider', [[1,-3],[5,-3],[-3,2,3]], {name:'a'});
s2 = board2.create('slider', [[1,-4],[5,-4],[-3,1.15,3]], {name:'b'});

// Graph the function
f= board2.create('functiongraph', [function(x){return s1.Value()*Math.exp(x*Math.log(s2.Value()));}]);

// Label the function.  
//textFunctionname=board2.create('text',[2,3, 'y = a\cdot b^x'], {fontSize:12});
board2.create('text',[2,3,
  function() { 
    return 'y = '+ s1.Value().toFixed(2) +'(' + s2.Value().toFixed(2) + ') <SUP>x<\/SUP>';
   }], {fontSize:14});


board2.unsuspendUpdate();


