var Westeros;
(function (Westeros) {
    var Communication;
    (function (Communication) {
        class Message {
        }
        Communication.Message = Message;
        class CrowMailRequestor {
            constructor(bus) {
                this.bus = bus;
            }
            Request() {
                var message = { __messageDate: new Date(),
                    __from: "requestor",
                    __corrolationId: Math.random(),
                    __messageName: "FindSquareRoot",
                    body: "Hello there. What is the square root of 9?" };
                this.bus.Subscribe("SquareRootFound", this);
                this.bus.Send(message);
                console.log("message sent!");
            }
            processMessage(message) {
                console.log("I got");
                console.dir(message);
            }
        }
        Communication.CrowMailRequestor = CrowMailRequestor;
        class CrowMailResponder {
            constructor(bus) {
                this.bus = bus;
            }
            processMessage(message) {
                var response = { __messageDate: new Date(),
                    __from: "responder",
                    __corrolationId: message.__corrolationId,
                    __messageName: "SquareRootFound",
                    body: "Pretty sure it is 3." };
                this.bus.Publish(response);
                console.log("Reply published");
            }
        }
        Communication.CrowMailResponder = CrowMailResponder;
        class CrowMailBus {
            constructor() {
                this.responder = new CrowMailResponder(this);
                this.responders = [];
            }
            Send(message) {
                if (message.__from == "requestor") {
                    process.nextTick(() => this.responder.processMessage(message));
                }
            }
            Publish(message) {
                for (var i = 0; i < this.responders.length; i++) {
                    if (this.responders[i].messageName == message.__messageName) {
                        (function (b) {
                            process.nextTick(() => b.subscriber.processMessage(message));
                        })(this.responders[i]);
                    }
                }
            }
            Subscribe(messageName, subscriber) {
                this.responders.push({ messageName: messageName, subscriber: subscriber });
            }
        }
        Communication.CrowMailBus = CrowMailBus;
        class TestResponder1 {
            processMessage(message) {
                console.log("Test responder 1: got a message");
            }
        }
        Communication.TestResponder1 = TestResponder1;
        class TestResponder2 {
            processMessage(message) {
                console.log("Test responder 2: got a message");
            }
        }
        Communication.TestResponder2 = TestResponder2;
    })(Communication = Westeros.Communication || (Westeros.Communication = {}));
})(Westeros || (Westeros = {}));
var bus = new Westeros.Communication.CrowMailBus();
bus.Subscribe("SquareRootFound", new Westeros.Communication.TestResponder1());
bus.Subscribe("SquareRootFound", new Westeros.Communication.TestResponder2());
var requestor = new Westeros.Communication.CrowMailRequestor(bus);
requestor.Request();
