module Westeros.Communication{
  var simpleCommand = new Array();
  simpleCommand.push(new LordInstructions().BringTroops);
  simpleCommand.push("King's Landing");
  simpleCommand.push(500);
  simpleCommand.push(new Date());

  simpleCommand[0](simpleCommand[1], simpleCommand[2], simpleCommand[3], simpleCommand[4], simpleCommand[5], simpleCommand[6]);

  export class BringTroopsCommand{
    _location: string;
    _numberOfTroops: number;
    _when: Date;
    constructor(location: string, numberOfTroops: number, when: Date)
    {
      this._location = location;
      this._numberOfTroops = numberOfTroops;
      this._when = when;
    }

    public Execute()
    {
      var receiver = new LordInstructions();
      receiver.BringTroops(this._location, this._numberOfTroops, this._when);
    }
  }


  export class LordInstructions{
    public BringTroops(location: string, numberOfTroops: number, when: Date)
    {
      console.log("You have been instructed to bring " + numberOfTroops + " troops to " + location + " by " + when);
    }
  }
}
