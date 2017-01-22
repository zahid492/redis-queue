var bull = require('bull');
var q = bull('queue1', 6379, '127.0.0.1')

var idx = 0;
setInterval(function() {




  q.add({idx:idx},{timeout:10000}).then(function(job){
console.log('Job ID: ' + job.jobId + ' Data: ' + JSON.stringify(job.data));
}), function(err){
  console.log(err);
};

  idx++
},2000)
