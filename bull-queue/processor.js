var bull = require('bull');
var q = bull('queue1', 6379, '127.0.0.1')

q.process(function(job, done) {
  console.log("=======================================")	
  console.log("process:", job.data);
 // done()
  // setInterval(function() {
       
  //  },2000)


})
q.on('ready', function(job) {
  // Queue ready for job
  // All Redis connections are done
 //  console.log("ready:", job.data);
})
.on('error', function(error) {
  console.log("error:", job.data);
})
.on('active', function(job, jobPromise){
	 console.log("active:", job.data);
  // Job started
  // You can use jobPromise.cancel() to abort this job.
})
.on('stalled', function(job){
	 console.log("stalled:", job.data);
  // Job that was considered stalled. Useful for debugging job workers that crash or pause the event loop.
})
.on('progress', function(job, progress){
	 console.log("progress:", job.data);
  // Job progress updated!
})
.on('completed', function(job, result){
	 console.log("completed:", job.data);
  // Job completed with output result!
})
.on('failed', function(job, err){
	 console.log("failed:", job.data);
  // Job failed with reason err!
})
.on('paused', function(){
	 console.log("paused:", job.data);
  // The queue has been paused
})
.on('resumed', function(job){
	 console.log("resumed:", job.data);
  // The queue has been resumed
})
.on('cleaned', function(jobs, type) {
	 console.log("cleaned:", job.data);
  //jobs is an array of cleaned jobs
  //type is the type of job cleaned
  //see clean for details
});
