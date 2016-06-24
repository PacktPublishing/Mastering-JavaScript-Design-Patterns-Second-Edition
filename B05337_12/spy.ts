declare var require: any;
declare var Exception: any;

var sinon = require("sinon")

 class ToSpyUpon{
  public AddNumbers(number1: number, number2: number): number{
    throw new Exception("oops");
    return number1 +  number2;
  }
}


var thing = new ToSpyUpon();
var spy = sinon.spy(thing, "AddNumbers");
thing.AddNumbers(1,2);
console.log(spy.called);
console.log(spy.args[0][1]);
console.dir(spy);
