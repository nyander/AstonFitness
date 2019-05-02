/* global extract_run_time_by_date */
/* eslint no-unused-vars: 0 */

function filter_complete_runs(runs){
  return runs.filter(function(run){
    return !run.injured;
  });
}

function extract_key(arr,key){
  return arr.map(function(x){return x[key];});
}

function extract_run_time_by_date(runs){
  var complete_runs = filter_complete_runs(runs);
  return {
    x : extract_key(complete_runs,'date'),
    y : extract_key(complete_runs,'time')
  };
}

function extract_run_time_by_bmi(runs){
  var complete_runs = filter_complete_runs(runs);
  return {
    x : extract_key(complete_runs,'bmi'),
    y : extract_key(complete_runs,'time')
  };
}

function count_runs_per_month(runs){
  var get_month_index = function(date_string){
    return new Date(date_string).getMonth();
  };

  var data = {
    x:['January', 'February', 'March', 'April', 'May', 'June', 'July',
       'August', 'September', 'October', 'November', 'December' ]
  };

  data.y = runs.reduce(function(acc,run){
      acc[get_month_index(run.date)]++;
      return acc;
    },
    Array(data.x.length).fill(0)
  );

  return data;
}

function count_recent_runs(runs){
  var run_dates = runs.map(function(run){return new Date(run.date);});
  var RECENT_DAYS = 28;
  return run_dates.map(function(run_date,run_idx){
    var earliest_recent_date = new Date(run_date);
    earliest_recent_date.setDate(earliest_recent_date.getDate()-RECENT_DAYS);
    var i = run_idx - 1;
    while(i >= 0 && run_dates[i] >= earliest_recent_date) i--;
    i++;
    return run_idx - i;
  });
}

function calculate_injury_probability_by_recent_run_number(runs){
  //For each run, calculate how many recent runs the user took
  var recent_run_counts = count_recent_runs(runs);
  //Calculate the range of recent runs
  var max_recent_runs = recent_run_counts.reduce(function(acc,run_count){
      return Math.max(acc,run_count);
    },0
  );
  var recent_run_range = [];
  var recent_run_count_and_injury_frequency = [];
  for(var i = 0;i<=max_recent_runs;i++){
    recent_run_range.push(i);
    recent_run_count_and_injury_frequency.push({count:0,injuries:0});
  }
  //For each possible recent run value, calculate the observed injury
  //probability
  var injury_probs = runs.reduce(function(acc,run,run_idx){
    acc[recent_run_counts[run_idx]].count++;
      if(run.injured) acc[recent_run_counts[run_idx]].injuries++;
      return acc;
    },
    recent_run_count_and_injury_frequency
  ).map(function(d){return d.injuries/d.count;});

  return {
    x : recent_run_range,
    y : injury_probs
  };
}
