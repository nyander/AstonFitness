/* global running_data Plotly extract_run_time_by_date
   extract_run_time_by_bmi count_runs_per_month
   calculate_injury_probability_by_recent_run_number */
function plot_graph(id,data,layout){
  if(!layout.title)
    layout.margin = {
      l: 60,
      r: 0,
      b: 70,
      t: 20,
      pad: 4
    };

  Plotly.plot(id,data,layout);

  window.addEventListener(
    'resize',
    function(){
      Plotly.Plots.resize(document.getElementById(id));
    }
  );
}

(function(){
  var trace = extract_run_time_by_date(running_data);
  trace.type = 'scatter';
  trace.mode = 'markers';

  var layout = {
    xaxis: { title : 'Date' },
    yaxis: { title : 'Run Time' }
  };

  plot_graph('run-time-by-date',[trace],layout);
})();

(function(){
  var trace = extract_run_time_by_bmi(running_data);
  trace.type = 'scatter';
  trace.mode = 'markers';

  var layout = {
    xaxis: { title : 'BMI' },
    yaxis: { title : 'Run Time' }
  };

  plot_graph('run-time-by-bmi',[trace],layout);
})();

(function(){
  var trace = count_runs_per_month(running_data);
  trace.type = 'bar';

  var layout = {
    xaxis: { title : 'Month' },
    yaxis: { title : 'Number of Runs' }
  };

  plot_graph('runs-per-month',[trace],layout);
})();

(function(){
  var trace = calculate_injury_probability_by_recent_run_number(running_data);
  trace.type = 'bar';

  var layout = {
    xaxis: { title : 'Number of runs within a four week period' },
    yaxis: { title : 'Observerd injury probability' }
  };

  plot_graph('injury-probability-by-recent-run-number',[trace],layout);
})();
