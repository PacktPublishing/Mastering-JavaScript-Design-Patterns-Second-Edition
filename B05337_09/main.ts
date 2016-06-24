var worker;

function startThread(){
	worker =  new Worker("worker.js");
	worker.addEventListener('message', (message)=> {
		logEvent(message.data.event);
		if(message.data.event == "calculationComplete"){
			writeResult(message.data.result);
		}
		if(message.data.event == "calculationStarted"){
			document.getElementById("result").innerHTML = "working";
		}
	});
};

function startCalculation(){
	worker.postMessage({cmd: 'startCalculation', 
						parameters: { number: 40}});
};

function foregroundProcess(){
	logEvent("Heart beat from foreground process");
	window.setTimeout(foregroundProcess, 1000);
}

function writeResult(result){
	document.getElementById("result").innerHTML = result;
}

function logEvent(event){
	document.getElementById("messages").innerHTML += "<li>" + new Date() + " - " + event + "</li>";
}

window.onload = startThread;
window.setTimeout(foregroundProcess, 2000);