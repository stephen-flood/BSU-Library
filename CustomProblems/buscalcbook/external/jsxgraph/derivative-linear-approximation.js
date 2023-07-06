var board4 = JXG.JSXGraph.initBoard('jsxgraph-derivative-linear-approximation', {boundingbox: [-5, 10, 7, -6], axis: true,showCopyright:false});

board4.suspendUpdate();

// Define the function (a polynomial with 4 control points). 
var p = [];
p[0] = board4.create('point', [-3,0], {face:'+',strokeColor:'#555555'});
p[1] = board4.create('point', [-2,1], {face:'+',strokeColor:'#555555'});
p[2] = board4.create('point', [1,0], {face:'+',strokeColor:'#555555'});
p[3] = board4.create('point', [3,5], {face:'+',strokeColor:'#555555'});
var polLin = JXG.Math.Numerics.lagrangePolynomial(p);
graph = board4.create('functiongraph', [polLin, -10, 10]);

// Create slider for x
approxPt = board4.create('slider', [[.5,-1.5],[2.5,-1.5],[-1,2.5,3.75]], {name:'x'});
  board4.create('text',[4,-1.5, ' (where we are approximating f)'], {fontSize:12});


// Create the slider for a
approxLoc = board4.create('slider', [[.5,-3],[2.5,-3],[-1,2,3]], {name:'a'});
  board4.create('text',[4,-3, ' (location of tangent)'], {fontSize:12});

deltaX = function(){return approxPt.Value() - approxLoc.Value();}

// Create the point a
qLin = board4.create('point',  [function(){ return approxLoc.Value();},
		function(){ return polLin(approxLoc.Value());}], {size:1});

// Label the point a
board4.create('text',[function(){return qLin.X();},-0.5,"<b>a</b>"],{strokeColor:'#FF0000',fontSize:12});
board4.create('line',[
		[function(){ return qLin.X();},-.125], 
		[function(){ return qLin.X();},.125]
		],{straightFirst:false, straightLast:false,strokeColor:'#FF0000'});

// Label the point x
board4.create('text',[function(){return qLin.X()+deltaX();},-0.5,"<b>x</b>"],{strokeColor:'#FF0000',fontSize:12});
board4.create('line',[
		[function(){ return qLin.X()+deltaX();},-.125], 
		[function(){ return qLin.X()+deltaX();},.125]
		],{straightFirst:false, straightLast:false,strokeColor:'#FF0000'});

// Create the point a+h for very small h 
qLin2 = board4.create('point', [function(){ return qLin.X()+.0001;},
		function(){ return polLin(qLin.X()+.0001);}], {face:'<>',size:5});
board4.create('line',[
		[function(){ return approxLoc.Value();},function(){ return polLin(approxLoc.Value());}], 
		[function(){ return qLin.X()+.0001;},function(){ return polLin(qLin.X()+.0001);}]
		],{strokeColor:'green',dash:2});


//compute the slope, true value, and approximate values
currentslopeLin=function(){return (polLin(qLin.X()+.0001) - polLin(qLin.X()))/.0001 ;}

trueValue = board4.create('point', [function(){ return approxLoc.Value()+deltaX();},
		function(){ return polLin(approxLoc.Value()+deltaX());}], {color:'blue',size:5});

approxValue = board4.create('point', [function(){ return approxLoc.Value()+deltaX();},
		function(){ return currentslopeLin()*deltaX()+polLin(approxLoc.Value());}], {size:5,color:'green'});



// Create the descriptive text.  
// 	use .toFixed(n) to round to n digits

// Embed pretty LaTeX code using a function call 
//board4.create('text',[-4.5,6,
//  function() { 
//  return '\\(\\displaystyle f\'(a) = \\lim_{h\\rightarrow 0} \\frac{f(a+h)-f(a)}{h}\\) '  ;
//  }], {fontSize:12});
// Compute and output the slope of the secant
// 	use .toFixed(n) to round to n digits
board4.create('text',[-4.75,6.5,
  function() { 
  return '<font color="blue"> actual value = f(' + trueValue.X().toFixed(2) + ') = ' + trueValue.Y().toFixed(2) + '</font>';
  }], {fontSize:14});

board4.create('text',[-4.75,5.5,
  function() { 
  return '<font color="green"> approximation = L(' + trueValue.X().toFixed(2) + ') = ' + approxValue.Y().toFixed(2) + '</font>';
  }], {fontSize:14});

approxError = function(){return  trueValue.Y() - approxValue.Y() ;}

board4.create('text',[-4.75,3.5,
  function() { 
  return 'approximation error = ' + approxError().toFixed(3);
  }], {fontSize:14});

percentError = function(){ return approxError()/trueValue.Y()*100;}

board4.create('text',[-4.75,2.5,
  function() { 
  return 'percent error = ' + percentError().toFixed(0) + '\%';
  }], {fontSize:14});

board4.unsuspendUpdate();
