self.addEventListener('message', function(e) {
  var data = e.data;
  if(data.cmd == 'requestComputation'){
    self.postMessage({event: 'calculationStarted'});
    var result = fib(data.parameters.number);
     self.postMessage({event: 'calculationComplete', result: result});
  };
}, false);

function fib(number){
	if(number<=2)
		return 1;
	return fib(number-1) + fib(number-2);
}