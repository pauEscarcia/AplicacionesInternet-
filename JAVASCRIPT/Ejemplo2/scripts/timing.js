function timeOperation(op, message) {
  var startTime = new Date().getTime();
  op();
  var endTime = new Date().getTime();
  var time = (endTime - startTime) / 1000;
  alert(message + " took " + time + " seconds.")
}

function sumRandomNumbers(size) {
  var nums = new Array(size);
  for(var i=0; i<size; i++) {
    nums[i] = Math.random();
  }
  var sum = sumArray(nums);
  return(sum);
}

function sumArray(nums) {
  var sum = 0;
  for(var i=0; i<nums.length; i++) {
    sum = sum + nums[i];
  }
  return(sum);
}

var size = 250000;

function arrayBenchmark() {
  size = size * 2;
  var message = "Summing array of " + size +
                " random numbers";
  var operation = function() { sumRandomNumbers(size); }
  timeOperation(operation, message);
}