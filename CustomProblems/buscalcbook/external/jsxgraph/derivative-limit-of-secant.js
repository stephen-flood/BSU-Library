var board1 = JXG.JSXGraph.initBoard('jsxgraph-derivative-limit-of-secant', {boundingbox: [-5, 10, 7, -6], axis: true,showCopyright:false});

board1.suspendUpdate();

// Define the function (a polynomial with 4 control points). 
var p = [];
p[0] = board1.create('point', [-2,-1], {face:'+',strokeColor:'#555555'});
p[1] = board1.create('point', [-1,0], {face:'+',strokeColor:'#555555'});
p[2] = board1.create('point', [2,1], {face:'+',strokeColor:'#555555'});
p[3] = board1.create('point', [4,5], {face:'+',strokeColor:'#555555'});
var pol = JXG.Math.Numerics.lagrangePolynomial(p);
graph = board1.create('functiongraph', [pol, -10, 10]);

// Create the slider for h
//s1 = board1.create('slider', [[1,-2],[4,-2],[0.01,2,3]]);
s1 = board1.create('slider', [[1,-2],[4,-2],[-2,1,2]], {name:'h'});

// Create the slider for a
slidera = board1.create('slider', [[1,-5],[4,-5],[-3,1,3]], {name:'a'});

// Define the point "a"
q = board1.create('point',  [function(){ return slidera.Value();},
		function(){ return pol(slidera.Value());}], {size:5});
// Label "a" and mark with line on x-axis
board1.create('text',[function(){return q.X();},-0.5,"<b>a</b>"],{strokeColor:'#FF0000',fontSize:12});
board1.create('line',[
		[function(){ return q.X();},-.125], 
		[function(){ return q.X();},.125]
		],{straightFirst:false, straightLast:false,strokeColor:'#FF0000'});


// Define the point "a+h" 
q2 = board1.create('point', [function(){ return q.X()+s1.Value();},
		function(){ return pol(q.X()+s1.Value());}], {face:'<>',size:5});
// Label "a+h" and mark with line on x-axis
board1.create('text',[function(){return q2.X();},-0.75,"<b>a+h</b>"],{strokeColor:'#FF0000',fontSize:12});
board1.create('line',[
		[function(){ return q2.X();},-.125], 
		[function(){ return q2.X();},.125]
		],{straightFirst:false, straightLast:false,strokeColor:'#FF0000'});

// Graph the Secant line
line = board1.create('line',[
		[function(){ return slidera.Value();},function(){ return pol(slidera.Value());}], 
		[function(){ return q.X()+s1.Value();},function(){ return pol(q.X()+s1.Value());}]
		],{strokeColor:'#000000',dash:2});


//compute the slope of the secant and of the tangent
currentslope=function(){return (q2.Y()-q.Y())/(q2.X()-q.X())};
tangentslope=function(){return (pol(q.X()+.0001)-pol(q.X()))/.0001};


// Label the function.  
// Using trick from http://www.scientificpsychic.com/etc/square-root.html
board1.create('text',[-4.85,6,
function() { return 'slope of secant = <table style="display:inline-table;vertical-align:middle;"><tr><td style="text-align:center;"><i>f</i>(<i>a+h</i>)-<i>f</i>(<i>a</i>)</i></td></tr>	<tr><td style="text-align:center;"> <span style="text-decoration:overline;">&nbsp; &nbsp; &nbsp; &nbsp; <i>h</i> &nbsp; &nbsp; &nbsp; &nbsp;</span>    </td>  </tr></table>  '; }], {fontSize:14});

board1.create('text',[-2.45,4.5,
function() { return '= <table style="display:inline-table;vertical-align:middle;"><tr><td style="text-align:center;">' + q2.Y().toFixed(2) + ' - ' + q.Y().toFixed(2) + '</td></tr>	<tr><td style="text-align:center;"> <span style="text-decoration:overline;">&nbsp; &nbsp; &nbsp; &nbsp; ' + s1.Value().toFixed(2) + ' &nbsp; &nbsp; &nbsp; &nbsp;</span>    </td>  </tr></table>  '; }], {fontSize:14});

// BOTTOM IS "change in x" rather than "h"
//board1.create('text',[-2.45,4.5,
//function() { return '= <table style="display:inline-table;vertical-align:middle;"><tr><td style="text-align:center;">' + q2.Y().toFixed(2) + ' - ' + q.Y().toFixed(2) + '</td></tr>	<tr><td style="text-align:center;"> <span style="text-decoration:overline;">&nbsp; &nbsp; ' + q2.X().toFixed(2) + ' - ' + q.X().toFixed(2) + ' &nbsp; &nbsp; </span>    </td>  </tr></table>  '; }], {fontSize:14});


board1.create('text',[-2.45,3,
function() { return '= ' + currentslope().toFixed(2); }], {fontSize:14});

board1.create('text',[-4.85,1.5,
function() { return 'slope of tangent = ' + tangentslope().toFixed(2); }], {fontSize:14});




// Create the descriptive text.  
// Embed pretty LaTeX code using a function call 
/*board1.create('text',[-4.5,6,
  function() { 
  return 'slope of secant = \\( \\frac{f(a+h)-f(a)}{h}\\) '  ;
  }], {fontSize:12});
// Compute and output the slope of the secant
board1.create('text',[-2.4,3,
  function() { 
  return '= ' + currentslope().toFixed(4);
  }], {fontSize:12});
// Compute and output the slope of the tangent
board1.create('text',[-4.6,2,
  function() { 
  return 'slope of tangent = ' + tangentslope().toFixed(4);
  }], {fontSize:12});
*/



board1.unsuspendUpdate();
