var Westeros;
(function (Westeros) {
    var Travel;
    (function (Travel) {
        class TravelResult {
            constructor(durationInDays, probabilityOfDeath, cost) {
                this.durationInDays = durationInDays;
                this.probabilityOfDeath = probabilityOfDeath;
                this.cost = cost;
            }
        }
        Travel.TravelResult = TravelResult;
        class SeaGoingVessel {
            Travel(source, destination) {
                return new TravelResult(15, .25, 500);
            }
        }
        Travel.SeaGoingVessel = SeaGoingVessel;
        class Horse {
            Travel(source, destination) {
                return new TravelResult(30, .25, 50);
            }
        }
        Travel.Horse = Horse;
        class Walk {
            Travel(source, destination) {
                return new TravelResult(150, .55, 0);
            }
        }
        Travel.Walk = Walk;
    })(Travel = Westeros.Travel || (Westeros.Travel = {}));
})(Westeros || (Westeros = {}));
var currentMoney = 70;
var strat;
if (currentMoney > 500)
    strat = new Westeros.Travel.SeaGoingVessel();
else if (currentMoney > 50)
    strat = new Westeros.Travel.Horse();
else
    strat = new Westeros.Travel.Walk();
