(function(){

/*Test Data*/
var results = [
  {effort:4.0 , grade:50},
  {effort:5.0 , grade:73},
  {effort:1.0 , grade:38},
  {effort:2.0 , grade:30},
  {effort:3.0 , grade:62},
  {effort:1.7 , grade:42},
];

var failing_low = 0;
var failing_high = 40;
var failing_results = [{effort:1.0 , grade:38},{effort:2.0 , grade:30}];
var failing_average_effort = 1.5;

var first_class_low = 70;
var first_class_high = 100;
var first_class_results = [{effort:5.0 , grade:73}];
var first_class_average_effort = 5.0;

describe('Module effort calculations',function(){
  describe('get_grades_in_range',function(){
    it('Returns results in which grades are within a given range',function(){
      //Note: comparison of arrays. Use "expect(...).to.deep.equal(...)"
      var actual_failing_results = get_grades_in_range(results,failing_low,failing_high);
      expect(actual_failing_results).to.deep.equal(failing_results);

      var calculated_first_class_results = get_grades_in_range(results,first_class_low,first_class_high);
      expect(calculated_first_class_results).to.deep.equal(first_class_results);
    });
  });

  describe('get_average_effort',function(){
    it('Calculates average effort for a set of results',function(){
      //Note: comparison of numbers. Use "expect(...).to.equal(...)"
      var calculated_failing_average_effort = get_average_effort(failing_results);
      expect(calculated_failing_average_effort).to.equal(failing_average_effort);

      var calculated_first_class_average_effort = get_average_effort(first_class_results);
      expect(calculated_first_class_average_effort).to.equal(first_class_average_effort);
    });
  });

  describe('calculate_average_effort_in_grade_range',function(){
    it('Calculates average effort of results in which grades are within a given range',function(){
      var calculated_failing_average_effort =
        calculate_average_effort_in_grade_range(results,failing_low,failing_high);
      expect(calculated_failing_average_effort).to.equal(failing_average_effort);

      var calculated_first_class_average_effort =
        calculate_average_effort_in_grade_range(results,first_class_low,first_class_high);
      expect(calculated_first_class_average_effort).to.equal(first_class_average_effort);
    });
  });

  describe('calculate_effort_by_grade_range_trace',function(){
    it('Converts an array of individual results into a plotly trace to graph effort by grade range',function(){
      var expected_trace = {
        x:['fail','3rd','2:2','2:1','1st'],
        y:[1.5,1.7,4.0,3.0,5.0],
        type:'bar'
      };
    
      var calculated_trace = calculate_effort_by_grade_range_trace(results)
      //Note: comparison of objects. Use "expect(...).to.deep.equal(...)"
      expect(calculated_trace).to.deep.equal(expected_trace);
    });
  });
})
})();
