/* global Plotly */
/*eslint no-magic-numbers: 0*/

(function (){
  var company_1_profits = [
    {date:'2016-01-01', amount:9000 },
    {date:'2016-02-01', amount:10500 },
    {date:'2016-04-01', amount:7000 },
    {date:'2016-09-01', amount:6000 },
    {date:'2016-10-01', amount:4800 },
    {date:'2016-12-01', amount:5000 },
  ];

  var company_2_profits = [
    {date:'2016-01-01', amount:2900 },
    {date:'2016-03-01', amount:3100 },
    {date:'2016-06-01', amount:4000 },
    {date:'2016-09-01', amount:4600 },
    {date:'2016-11-01', amount:5200 },
    {date:'2016-12-01', amount:4900 },
  ];

  document.body.insertAdjacentHTML(
    'beforeend',
    '<div class="visualisation-example">' +
    '<div id="profit-time-series" class="graph"></div>' +
    '</div>'
  );
  var data = [
    {
      x : company_1_profits.map(function(d){return d.date;}),
      y : company_1_profits.map(function(d){return d.amount;}),
      type : 'scatter',
      name : 'company 1'
    },
    {
      x : company_2_profits.map(function(d){return d.date;}),
      y : company_2_profits.map(function(d){return d.amount;}),
      type : 'scatter',
      name : 'company 2'
    },
  ];

  var layout = {
    title: 'Profit for year 2016',
    xaxis: {
      title : 'Date'
    },
    yaxis: {
      title : 'Monthly Profit (£)'
    }
  };

  Plotly.plot('profit-time-series',data,layout);

  window.addEventListener(
    'resize',
    function(){
      Plotly.Plots.resize(document.getElementById('profit-time-series'));
    }
  );
})();
