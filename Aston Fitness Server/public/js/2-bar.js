/* global Plotly */
/*eslint no-magic-numbers: 0*/

(function (){
  var alcohol_consumption_a = [
    2, 4, 0, 0, 0, 6, 2,
    0, 0, 4, 0, 2, 4, 4,
    0, 0, 2, 0, 2, 8, 0,
    0, 0, 4, 0, 4, 6, 0
  ];

  var alcohol_consumption_b = [
    0, 0, 0, 0, 0, 20, 0,
    0, 0, 0, 0, 14, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 22, 0
  ];

  document.body.insertAdjacentHTML(
    'beforeend',
    '<div class="visualisation-example">' +
    '<div id="alcohol-consumption" class="graph"></div>' +
    '</div>'
  );
  var data = [
    {
      y : alcohol_consumption_a,
      type : 'bar',
      name : 'Person A'
    },
    {
      y : alcohol_consumption_b,
      type : 'bar',
      name : 'Person B'
    }
  ];

  var layout = {
    title: 'Alcohol Consumption',
    xaxis: {
      title : 'Day'
    },
    yaxis: {
      title : 'Units Consumed'
    }
  };

  Plotly.plot('alcohol-consumption',data,layout);

  window.addEventListener(
    'resize',
    function(){
      Plotly.Plots.resize(document.getElementById('alcohol-consumption'));
    }
  );
})();
