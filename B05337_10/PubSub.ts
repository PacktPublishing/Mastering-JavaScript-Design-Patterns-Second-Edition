declare var process: any;

module Westeros.Communication{

  export class Message{
    __messageDate: Date;
    __from: string;
    __corrolationId: number;
    __messageName: string;
    body: string;
  }

  export class CrowMailRequestor{

    constructor(public bus: CrowMailBus){}

    public Request(){
      var message = { __messageDate : new Date(),
                      __from : "requestor",
                      __corrolationId : Math.random(),
                      __messageName:"FindSquareRoot",
                      body: "Hello there. What is the square root of 9?"};
      this.bus.Subscribe("SquareRootFound", this);
      this.bus.Send(message);
      console.log("message sent!");
    }

    public processMessage(message: Message){
      console.log("I got");
      console.dir(message);
    }
  }

  export class CrowMailResponder{
    constructor(public bus: CrowMailBus){}
    processMessage(message:Message){
      var response = { __messageDate : new Date(),
                      __from : "responder",
                      __corrolationId : message.__corrolationId,
                      __messageName: "SquareRootFound",
                      body: "Pretty sure it is 3."};
      this.bus.Publish(response);
      console.log("Reply published");
    }
  }

  export interface IMessageResponder{
    processMessage(message: Message);
  }

  export class CrowMailBus{
    responder: CrowMailResponder;
    responders: Array<any>;
    constructor(){
      this.responder = new CrowMailResponder(this);
      this.responders = [];
    }

    public Send(message:Message){
      if(message.__from == "requestor")
      {
        process.nextTick(() => this.responder.processMessage(message));
      }
    }

    public Publish(message: Message){
      for(var i = 0; i < this.responders.length; i++)
      {
        if(this.responders[i].messageName == message.__messageName)
        {
          (function(b){
            process.nextTick(() => b.subscriber.processMessage(message));
            })(this.responders[i]);
        }
      }
    }

    public Subscribe(messageName: string, subscriber: IMessageResponder){
      this.responders.push({messageName: messageName, subscriber: subscriber});
    }
  }

  export class TestResponder1 implements IMessageResponder{
    processMessage(message: Message){
      console.log("Test responder 1: got a message");
    }
  }
  export class TestResponder2 implements IMessageResponder{
    processMessage(message: Message){
      console.log("Test responder 2: got a message");
    }
  }
}

var bus = new Westeros.Communication.CrowMailBus();
bus.Subscribe("SquareRootFound", new Westeros.Communication.TestResponder1());
bus.Subscribe("SquareRootFound", new Westeros.Communication.TestResponder2());
var requestor = new Westeros.Communication.CrowMailRequestor(bus);
requestor.Request();
