var board3 = JXG.JSXGraph.initBoard('jsxgraph-derivative-graphical', {boundingbox: [-5, 10, 7, -6], axis: true,showCopyright:false});

board3.suspendUpdate();

// Define the function (a polynomial with 4 control points). 
var p = [];
p[0] = board3.create('point', [-2,0], {face:'+',strokeColor:'#555555'});
p[1] = board3.create('point', [-1,1], {face:'+',strokeColor:'#555555'});
p[2] = board3.create('point', [2,0], {face:'+',strokeColor:'#555555'});
p[3] = board3.create('point', [4,5], {face:'+',strokeColor:'#555555'});
var polTan = JXG.Math.Numerics.lagrangePolynomial(p);
graph = board3.create('functiongraph', [polTan, -10, 10]);

// Create the slider for a
sTanA = board3.create('slider', [[.5,-3],[3.5,-3],[-5,1,5]], {name:'a'});

// Create the point a
qTan = board3.create('point',  [function(){ return sTanA.Value();},
		function(){ return polTan(sTanA.Value());}], {size:5});
board3.create('text',[function(){return qTan.X();},-0.5,"<b>a</b>"],{strokeColor:'#FF0000',fontSize:12});
board3.create('line',[
		[function(){ return qTan.X();},-.125], 
		[function(){ return qTan.X();},.125]
		],{straightFirst:false, straightLast:false,strokeColor:'#FF0000'});

// Create the point a+h for very small h 
qTan2 = board3.create('point', [function(){ return qTan.X()+.0001;},
		function(){ return polTan(qTan.X()+.0001);}], {face:'<>',size:5});
line = board3.create('line',[
		[function(){ return sTanA.Value();},function(){ return polTan(sTanA.Value());}], 
		[function(){ return qTan.X()+.0001;},function(){ return polTan(qTan.X()+.0001);}]
		],{strokeColor:'#000000',dash:2});



// Label the function.  
// Using trick from http://www.scientificpsychic.com/etc/square-root.html
board3.create('text',[-4.5,6,
function() { return '<i>f</i>\'(<i>x</i>) = lim<sub>h&rarr;0</sub><table style="display:inline-table;vertical-align:middle;"><tr><td style="text-align:center;"><i>f</i>(<i>x+h</i>)-<i>f</i>(<i>x</i>)</i></td></tr>	<tr><td style="text-align:center;"> <span style="text-decoration:overline;">&nbsp; &nbsp; &nbsp; &nbsp; <i>h</i> &nbsp; &nbsp; &nbsp; &nbsp;</span>    </td>  </tr></table>  '; }], {fontSize:14});


//compute the slope
currentslopeTan=function(){return (polTan(qTan.X()+.0001) - polTan(qTan.X()))/.0001 ;}

// Create the descriptive text.  
// Embed pretty LaTeX code using a function call 
//board3.create('text',[-4.5,6,
//  function() { 
//  return '\\(\\displaystyle f\'(a) = \\lim_{h\\rightarrow 0} \\frac{f(a+h)-f(a)}{h}\\) '  ;
//  }], {fontSize:12});
// Compute and output the slope of the secant
board3.create('text',[-3.5,4.5,
  function() { 
  return '= ' + currentslopeTan().toFixed(4);
  }], {fontSize:14});



board3.unsuspendUpdate();

