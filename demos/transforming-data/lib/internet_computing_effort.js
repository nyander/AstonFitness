/*
  var grade_boundaries = [
    {low:0, high:40, name:'fail'},
    {low:40, high:50, name:'3rd'},
    {low:50, high:60, name:'2:2'},
    {low:60, high:70, name:'2:1'},
    {low:70, high:100, name:'1st'}
  ];
*/

function get_grades_in_range(results,low,high){
  return results.filter(function(d){
    return d.grade >= low && d.grade < high
  });
}

function get_average_effort(results){
  var total = results.reduce(function(acc,d){
      return acc + d.effort
    },0
  );
  return total/results.length;
}

function calculate_average_effort_in_grade_range(results,low,high){
  var results_in_range = get_grades_in_range(results,low,high);
  return get_average_effort(results_in_range)
}

function calculate_effort_by_grade_range_trace(results){
  var grade_boundaries = [
    {low:0, high:40, name:'fail'},
    {low:40, high:50, name:'3rd'},
    {low:50, high:60, name:'2:2'},
    {low:60, high:70, name:'2:1'},
    {low:70, high:100, name:'1st'}
  ];

  var trace = {type:'bar'};

  trace.x = grade_boundaries.map(function(boundary){
    return boundary.name;
  });

  trace.y = grade_boundaries.map(function(boundary){
    return calculate_average_effort_in_grade_range(
      results,
      boundary.low,
      boundary.high
    );
  });

  return trace;
}
