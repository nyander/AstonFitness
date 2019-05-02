/* global d3, word_counts, Plotly */

d3.shuffle(word_counts);

var word_counts_2 = [
  {count:12, word:"karp"},
  {count:34, word:"that"},
  {count:60, word:"with"},
  {count:45, word:"glue"},
  {count:112, word:"would"},
  {count:53, word:"from"},
  {count:89, word:"this"},
  {count:12, word:"said"},
  {count:10, word:"which"},
  {count:1, word:"surgical"},
  {count:32, word:"told"},
  {count:12, word:"tissue"},
  {count:6, word:"they"},
  {count:23, word:"when"},
  {count:31, word:"more"},
  {count:9, word:"could"},
  {count:15, word:"blood"},
  {count:45, word:"pereira"},
  {count:12, word:"nature"},
  {count:7, word:"like"},
  {count:12, word:"inside"}
];

var data = [
  {
    x : word_counts.map(function(d){return d.word;}),
    y : word_counts.map(function(d){return d.count;}),
    type : 'bar',
    name: 'Text 1'
  },
  {
    x : word_counts_2.map(function(d){return d.word;}),
    y : word_counts_2.map(function(d){return d.count;}),
    type : 'bar',
    name: 'Text 2'
  }
];

Plotly.plot('word-graph',data);
