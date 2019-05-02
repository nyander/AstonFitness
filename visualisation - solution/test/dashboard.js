/* global expect filter_complete_runs extract_run_time_by_date
   extract_run_time_by_bmi count_runs_per_month count_recent_runs
   calculate_injury_probability_by_recent_run_number */
/* eslint no-magic-numbers: 0 */

describe('Dashboard',function(){
  const test_data = [
    {bmi:28.71,date:'2010-01-01',injured:false,time:1544.66},
    {bmi:28.71,date:'2010-01-01',injured:false,time:1544.66},
    {bmi:27.86,date:'2010-01-24',injured:true},
    {bmi:27.95,date:'2010-01-25',injured:false,time:1455.82},
    {bmi:27.71,date:'2010-01-31',injured:false,time:1419.09},
    {bmi:27.51,date:'2010-02-07',injured:false,time:1466.51},
    {bmi:27.24,date:'2010-04-08',injured:true}
  ];

  describe('filter_complete_runs',function(){
    it('removes incomplete runs from its input',function(){
      var complete_runs = filter_complete_runs(test_data);
      expect(complete_runs).to.deep.equal([
        {bmi:28.71,date:'2010-01-01',injured:false,time:1544.66},
        {bmi:28.71,date:'2010-01-01',injured:false,time:1544.66},
        {bmi:27.95,date:'2010-01-25',injured:false,time:1455.82},
        {bmi:27.71,date:'2010-01-31',injured:false,time:1419.09},
        {bmi:27.51,date:'2010-02-07',injured:false,time:1466.51}
      ]);
    });
  });

  describe('extract_run_time_by_date',function(){
    it('returns plot data from its input, with x being the dates of complete ' +
    'runs and y being their corresponding times',function(){
      var run_time_by_date = extract_run_time_by_date(test_data);
      expect(run_time_by_date).to.deep.equal({
        x:[
          '2010-01-01',
          '2010-01-01',
          '2010-01-25',
          '2010-01-31',
          '2010-02-07'
        ],
        y:[
          1544.66,
          1544.66,
          1455.82,
          1419.09,
          1466.51
        ]
      });
    });
  });

  describe('extract_run_time_by_bmi',function(){
    it('returns plot data from its input, with x being the bmis at the time ' +
    'of complete runs and y being their corresponding times',function(){
      var bmi_vs_run_time = extract_run_time_by_bmi(test_data);
      expect(bmi_vs_run_time).to.deep.equal({
        x:[
          28.71,
          28.71,
          27.95,
          27.71,
          27.51
        ],
        y:[
          1544.66,
          1544.66,
          1455.82,
          1419.09,
          1466.51
        ]
      });
    });
  });

  describe('count_runs_per_month',function(){
    it('returns plot data from its input, with x being the months and y ' +
    'being the number of runs in each month',function(){
      var run_time_by_month = count_runs_per_month(test_data);
      expect(run_time_by_month).to.deep.equal({
        x:['January', 'February', 'March', 'April', 'May', 'June', 'July',
           'August', 'September', 'October', 'November', 'December' ],
        y:[5,1,0,1,0,0,0,0,0,0,0,0]
      });
    });
  });

  describe('Injuries by Recent Runs',function(){
    describe('count_recent_runs',function(){
      it('counts the number of runs in the 28 days before each of the runs ' +
      ' in its input array',function(){
        var recent_run_count = count_recent_runs(test_data);
        expect(recent_run_count).to.deep.equal([0,1,2,3,2,3,0]);
      });
    });

    describe('calculate_injury_probability_by_recent_run_number',function(){
      it('returns plot data from its input, with x being a number of recent ' +
      'runs and y being the observer probability with which the runner is ' +
      'injured when attempting to run while having that number of recent runs.',
      function(){
        var injury_probability_by_effort =
          calculate_injury_probability_by_recent_run_number(test_data);
        expect(injury_probability_by_effort).to.deep.equal({
          x: [0,1,2,3],
          y: [0.5,0,0.5,0]
        });
      });
    });
  });
});
