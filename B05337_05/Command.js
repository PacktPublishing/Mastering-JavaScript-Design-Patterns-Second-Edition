var Westeros;
(function (Westeros) {
    var Communication;
    (function (Communication) {
        var simpleCommand = new Array();
        simpleCommand.push(new LordInstructions().BringTroops);
        simpleCommand.push("King's Landing");
        simpleCommand.push(500);
        simpleCommand.push(new Date());
        simpleCommand[0](simpleCommand[1], simpleCommand[2], simpleCommand[3], simpleCommand[4], simpleCommand[5], simpleCommand[6]);
        class BringTroopsCommand {
            constructor(location, numberOfTroops, when) {
                this._location = location;
                this._numberOfTroops = numberOfTroops;
                this._when = when;
            }
            Execute() {
                var receiver = new LordInstructions();
                receiver.BringTroops(this._location, this._numberOfTroops, this._when);
            }
        }
        Communication.BringTroopsCommand = BringTroopsCommand;
        class LordInstructions {
            BringTroops(location, numberOfTroops, when) {
                console.log("You have been instructed to bring " + numberOfTroops + " troops to " + location + " by " + when);
            }
        }
        Communication.LordInstructions = LordInstructions;
    })(Communication = Westeros.Communication || (Westeros.Communication = {}));
})(Westeros || (Westeros = {}));
