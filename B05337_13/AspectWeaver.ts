class ToWeaveIn{
  BeforeCall(){
    console.log("Before!");
  }
  AfterCall(){
    console.log("After!");
  }
}

class GoldTransfer{

  SendPaymentOfGold(amountOfGold, destination){
    /* @aspect(Security)*/
    //send actual payment
    console.log("Payment sent");
  }
}

function weave(toWeave, toWeaveIn, toWeaveInName){
  for (var property in toWeave.prototype) {
    var stringRepresentation = toWeave.prototype[property].toString();

    console.log(stringRepresentation);
    if(stringRepresentation.indexOf("@aspect(" + toWeaveInName + ")") >= 0)
    {
      toWeave.prototype[property + "_wrapped"] = toWeave.prototype[property];
      toWeave.prototype[property] = function(){ toWeaveIn.BeforeCall();
                                                toWeave.prototype[property + "_wrapped"]();
                                                toWeaveIn.AfterCall();
      }
    }
  }
}

weave(GoldTransfer, new ToWeaveIn(), "Security");
var transfer = new GoldTransfer();
transfer.SendPaymentOfGold(50, "Starks");
