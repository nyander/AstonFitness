/* global Plotly */

(function (){
  var smartphone_penetration = [
    {country:"Argentina", penetration:48},
    {country:"China", penetration:58},
    {country:"South Africa", penetration:37},
    {country:"South Korea", penetration:88},
    {country:"United Kingdom", penetration:68},
  ];

  document.body.insertAdjacentHTML(
    'beforeend',
    '<div class="visualisation-example">' +
    '<div id="smartphone-penetration" class="graph"></div>' +
    '</div>'
  );

  var data = [
      {
      x : smartphone_penetration.map(function(d){return d.country;}),
      y : smartphone_penetration.map(function(d){return d.penetration;}),
      type : 'bar',
    },
  ];

  var layout = {
    title: 'Smartphone Penetration',
    xaxis: {
      title : 'Country'
    },
    yaxis: {
      title : '% of Population Owning a Smartphone'
    }
  };

  Plotly.plot('smartphone-penetration',data,layout);

  window.addEventListener(
    'resize',
    function(){
      Plotly.Plots.resize(document.getElementById('smartphone-penetration'));
    }
  );
})();
