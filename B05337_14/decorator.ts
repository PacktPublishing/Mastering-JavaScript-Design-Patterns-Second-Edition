function spy(target: any, key: string, descriptor?: any) {
  
  // save a reference to the original method
  // this way we keep the values currently in the 
  // descriptor and don't overwrite what another 
  // decorator might have done to the descriptor.
  if(descriptor === undefined) {
      descriptor = Object.getOwnPropertyDescriptor(target, key);
  }
  var originalMethod = descriptor.value; 

  //editing the descriptor/value parameter
  descriptor.value =  function (...args: any[]) {
      var a = args.map(a => JSON.stringify(a)).join();
      // note usage of originalMethod here
      var result = originalMethod.apply(this, args);
      var r = JSON.stringify(result);
      console.log(`Message sent was: ${a}`);
      return result;
  }

  // return edited descriptor as opposed to overwriting 
  // the descriptor by returning a new descriptor
  return descriptor;
}

class CrowMessenger {
    constructor(){
        console.log("built");
    }
    @spy
    public SendMessage(message: string) {
        console.log(`Send message is ${message}`);
    }
}
//new MethodDecoratorExample().method("hi");
var c = new CrowMessenger();
var r = c.SendMessage("Attack at dawn"); 
console.log(r);