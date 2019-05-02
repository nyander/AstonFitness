/* global Plotly */
/*eslint no-magic-numbers: 0*/

(function (){
  var internet_computing_results = [
    {effort:4.76 , grade:50},
    {effort:4.45 , grade:73},
    {effort:0.09 , grade:38},
    {effort:1.12 , grade:30},
    {effort:2.86 , grade:77},
    {effort:2.18 , grade:53},
    {effort:4.41 , grade:80},
    {effort:4.1 , grade:45},
    {effort:4.56 , grade:86},
    {effort:1.36 , grade:62},
    {effort:4.92 , grade:75},
    {effort:4.24 , grade:46},
    {effort:2.34 , grade:44},
    {effort:4.97 , grade:50},
    {effort:4.95 , grade:81},
    {effort:3.55 , grade:44},
    {effort:4.63 , grade:65},
    {effort:4.63 , grade:54},
    {effort:2.52 , grade:32},
    {effort:1.76 , grade:59},
    {effort:2.6 , grade:66},
    {effort:2.43 , grade:48},
    {effort:0.12 , grade:51},
    {effort:0.54 , grade:7},
    {effort:3.01 , grade:34},
    {effort:4.83 , grade:49},
    {effort:2.08 , grade:42},
    {effort:4.73 , grade:76},
    {effort:4.16 , grade:82},
    {effort:1.29 , grade:38},
    {effort:4.76 , grade:80},
    {effort:4.99 , grade:70},
    {effort:4.4 , grade:78},
    {effort:1.86 , grade:73},
    {effort:2.33 , grade:33},
    {effort:0.61 , grade:29},
    {effort:2.22 , grade:51},
    {effort:3.91 , grade:62},
    {effort:0.64 , grade:24},
    {effort:3.41 , grade:47},
    {effort:3.27 , grade:35},
    {effort:2.96 , grade:67},
    {effort:0.36 , grade:38},
    {effort:0.73 , grade:47},
    {effort:4.55 , grade:58},
    {effort:4.22 , grade:44},
    {effort:3.74 , grade:68},
    {effort:4.18 , grade:67},
    {effort:1.29 , grade:33},
    {effort:4.42 , grade:70},
    {effort:1.2 , grade:26},
    {effort:0.51 , grade:44},
    {effort:4.39 , grade:44},
    {effort:0.12 , grade:54},
    {effort:4.96 , grade:72},
    {effort:0.12 , grade:17},
    {effort:4.93 , grade:82},
    {effort:1.01 , grade:33},
    {effort:3.87 , grade:66},
    {effort:3.83 , grade:56},
    {effort:1.44 , grade:20},
    {effort:3.68 , grade:68},
    {effort:4.32 , grade:44},
    {effort:3.09 , grade:59},
    {effort:0.32 , grade:64},
    {effort:2.14 , grade:32},
    {effort:0.73 , grade:66},
    {effort:3.29 , grade:54},
    {effort:2.84 , grade:37},
    {effort:4.97 , grade:90},
    {effort:3.38 , grade:71},
    {effort:2.64 , grade:37},
    {effort:2.4 , grade:30},
    {effort:1.26 , grade:34},
    {effort:4.75 , grade:59},
    {effort:0.1 , grade:8},
    {effort:0.56 , grade:14},
    {effort:4.84 , grade:67},
    {effort:3.01 , grade:59},
    {effort:1.62 , grade:42},
    {effort:3.1 , grade:56},
    {effort:0.3 , grade:5},
    {effort:2.63 , grade:82},
    {effort:3.77 , grade:78},
    {effort:4.15 , grade:50},
    {effort:3.89 , grade:65},
    {effort:1.85 , grade:63},
    {effort:1.12 , grade:71},
    {effort:1.33 , grade:43},
    {effort:4.82 , grade:55},
    {effort:1.55 , grade:31},
    {effort:2.61 , grade:66},
    {effort:4.68 , grade:89},
    {effort:4.87 , grade:61},
    {effort:3.22 , grade:35},
    {effort:4.88 , grade:74},
    {effort:2.41 , grade:59},
    {effort:2.7 , grade:44},
    {effort:2.61 , grade:28},
  ];

  document.body.insertAdjacentHTML(
    'beforeend',
    '<div class="visualisation-example">' +
    '<div id="internet-computing-individual-results" class="graph"></div>' +
    '</div>'
  );

  var data = [
    {
      x : internet_computing_results.map(function(d){return d.effort;}),
      y : internet_computing_results.map(function(d){return d.grade;}),
      mode: 'markers',
      type : 'scatter'
    }
  ];

  var layout = {
    title: 'Mark vs Effort for Internet Computing',
    xaxis: {
      title : 'Effort Expended (/5)'
    },
    yaxis: {
      title : 'Mark (%)'
    }
  };

  Plotly.plot('internet-computing-individual-results',data,layout);

  window.addEventListener(
    'resize',
    function(){
      Plotly.Plots.resize(document.getElementById('internet-computing-individual-results'));
    }
  );
})();
