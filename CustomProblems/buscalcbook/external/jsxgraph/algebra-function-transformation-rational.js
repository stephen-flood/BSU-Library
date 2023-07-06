 var board8 = JXG.JSXGraph.initBoard('jsxgraph-algebra-function-transformation-rational', {boundingbox: [-10, 10, 10, -10], axis:true,showCopyright:false});
board8.suspendUpdate();

// Create slider
s8a = board8.create('slider', [[1,-3],[5,-3],[-3,1,3]], {name:'a'});
s8b = board8.create('slider', [[1,-4],[5,-4],[-5,0,5]], {name:'b'});
s8c = board8.create('slider', [[1,-5],[5,-5],[-5,0,5]], {name:'c'});

// Define the function
f8=function(x){return s8a.Value()/(x+s8b.Value()) + s8c.Value();}
// Graph the function
board8.create('functiongraph', [f8]);
// Graph where (1,1) moves
board8.create('point',[function(){return 1-s8b.Value();}, function(){return f8(1-s8b.Value());} ],{size:2});

// Label the function.  
// Using trick from http://www.scientificpsychic.com/etc/square-root.html
board8.create('text',[-8.5,5,
		function() { return 'f(x) = <table style="display:inline-table;vertical-align:middle;"><tr><td style="text-align:center;">' + s8a.Value().toFixed(2) + '</td></tr>	<tr><td style="text-align:center;"> <span style="text-decoration:overline;">&nbsp; &nbsp; <i>x</i> + ' + s8b.Value().toFixed(2) +  '  &nbsp; &nbsp;</span>    </td>  </tr></table>  +  ' + s8c.Value().toFixed(2) 
	; }], {fontSize:14});


board8.unsuspendUpdate();