(function(){

  document.querySelector('body').insertAdjacentHTML(
    'beforeend',
    '<div id="internet-computing-average-results"></div>'
  );

  var trace = calculate_effort_by_grade_range_trace(internet_computing_results);

  var layout = {
    title : 'Average Effort to Reach Classification',
    xaxis : {
      title : 'Classification'
    },
    yaxis : {
      title : 'Average Effort (/5)'
    }
  };

  Plotly.plot('internet-computing-average-results',[trace],layout);

  window.addEventListener(
    'resize',
    function(){
      Plotly.Plots.resize(document.getElementById('internet-computing-average-results'));
    }
  );

})();
