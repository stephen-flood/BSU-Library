var board9 = JXG.JSXGraph.initBoard('jsxgraph-algebra-function-notation', {boundingbox: [-5, 10, 7, -6], axis: true,showCopyright:false});

board9.suspendUpdate();

// Define the function (a polynomial with 4 control points). 
var p9 = [];
p9[0] = board9.create('point', [-3,0], {face:'+',strokeColor:'#555555'});
p9[1] = board9.create('point', [-1,5], {face:'+',strokeColor:'#555555'});
p9[2] = board9.create('point', [0,2], {face:'+',strokeColor:'#555555'});
p9[3] = board9.create('point', [3,5], {face:'+',strokeColor:'#555555'});
p9[4] = board9.create('point', [4,0], {face:'+',strokeColor:'#555555'});
var polFn9 = JXG.Math.Numerics.lagrangePolynomial(p9);
graph = board9.create('functiongraph', [polFn9, -10, 10]);

// Create slider for x
x9 = board9.create('slider', [[.5,-1.5],[2.5,-1.5],[-5,2,7]], {name:'x'});

// Label the point x
board9.create('text',[function(){return x9.Value();},-0.75,"<b>x</b>"],{strokeColor:'#FF0000',fontSize:12});
board9.create('text',[-.5,function(){return polFn9(x9.Value())+.25;},"<b>f(x)</b>"],{strokeColor:'#FF0000',fontSize:12});
board9.create('line',[
		[function(){ return x9.Value();},-.125], 
		[function(){ return x9.Value();},.125]
		],{straightFirst:false, straightLast:false,strokeColor:'#000000'});
board9.create('line',[
		[-.125,function(){ return polFn9(x9.Value());}], 
		[.125,function(){ return polFn9(x9.Value());}]
		],{straightFirst:false, straightLast:false,strokeColor:'#000000'});

board9.create('line',[
		[function(){ return x9.Value();},0], 
		[function(){ return x9.Value();},function(){ return polFn9(x9.Value());}]
		],{straightFirst:false, straightLast:false,dash:2,strokeColor:'#FF0000'});

board9.create('line',[
		[0,function(){ return polFn9(x9.Value());}], 
		[function(){ return x9.Value();},function(){ return polFn9(x9.Value());}]
		],{straightFirst:false, straightLast:false,dash:2,strokeColor:'#FF0000'});




// Create the descriptive text.  
// 	use .toFixed(n) to round to n digits
board9.create('text',[-4.75,6.5,
  function() { 
  return '<font color="red"> f(' + x9.Value().toFixed(2) + ') = ' + polFn9(x9.Value()).toFixed(2) + '</font>';
  }], {fontSize:14});


board9.unsuspendUpdate();

