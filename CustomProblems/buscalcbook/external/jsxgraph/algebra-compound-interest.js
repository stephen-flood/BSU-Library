var board2interest = JXG.JSXGraph.initBoard('jsxgraph-algebra-compound-interest', {boundingbox: [-10, 20, 20, -10], axis:true,showCopyright:false});

// Interest slider
    sInt = board2interest.create('slider', [[1,-3],[5,-3],[0.01,.1,.30]], {name:'r'});
   board2interest.create('text',[-7,-3, ' Interest as decimal:'], {fontSize:12});
// Frequency of Compunding slider
sFreq = board2interest.create('slider', [[1,-4.5],[5,-4.5],[1,12,365]], {name:'m',snapWidth:1});
   board2interest.create('text',[-9.5,-4.5, '# of compountings per year:'], {fontSize:12});
// Principal Balance slider
sPr = board2interest.create('slider', [[1,-6],[5,-6],[.5,2,5]], {name:'P'});
   board2interest.create('text',[-6.5,-6, ' Principal Balance:'], {fontSize:12});


// Graph the function
//board2interest.create('functiongraph', [function(x){return Math.exp(x*Math.log(slideInterest.Value()));}]);
board2interest.create('functiongraph', [function(x){return sPr.Value()*Math.exp(x*sFreq.Value()*Math.log(1+sInt.Value()/sFreq.Value()));}]);

// Label the function.  
//textFunctionname=board2.create('text',[2,3, 'y = a^x'], {fontSize:12});
//board2interest.create('text',[-9.5,6,
board2interest.create('text',[5,13,
  function() { 
  return 'value after t years <br> &nbsp;&nbsp;&nbsp;= &nbsp; ' + sPr.Value().toFixed(2)+ '(1 + ' + sInt.Value().toFixed(2) + '/' + sFreq.Value().toFixed(0) +' ) <SUP>' + sFreq.Value().toFixed(0) + 't<\/SUP>';
  }], {fontSize:14});



