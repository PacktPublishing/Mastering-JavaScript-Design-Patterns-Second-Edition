var Westeros;
(function (Westeros) {
    var Foretelling;
    (function (Foretelling) {
        class SquareCommand {
            constructor(numberToSquare) {
                this.numberToSquare = numberToSquare;
            }
            Execute() {
                this.numberToSquare *= this.numberToSquare;
            }
        }
        Foretelling.SquareCommand = SquareCommand;
        class WorldState {
            constructor(numberOfKings, currentKingInKingsLanding, season) {
                this.numberOfKings = numberOfKings;
                this.currentKingInKingsLanding = currentKingInKingsLanding;
                this.season = season;
            }
        }
        Foretelling.WorldState = WorldState;
        class Soothsayer {
            constructor() {
                this.startingPoints = [];
                this.currentState = new WorldStateProvider();
            }
            setInitialConditions(numberOfKings, currentKingInKingsLanding, season) {
                this.currentState.numberOfKings = numberOfKings;
                this.currentState.currentKingInKingsLanding = currentKingInKingsLanding;
                this.currentState.season = season;
            }
            alterNumberOfKingsAndForetell(numberOfKings) {
                this.startingPoints.push(this.currentState.saveMemento());
                this.currentState.numberOfKings = numberOfKings;
            }
            alterSeasonAndForetell(season) {
                this.startingPoints.push(this.currentState.saveMemento());
                this.currentState.season = season;
            }
            alterCurrentKingInKingsLandingAndForetell(currentKingInKingsLanding) {
                this.startingPoints.push(this.currentState.saveMemento());
                this.currentState.currentKingInKingsLanding = currentKingInKingsLanding;
            }
            tryADifferentChange() {
                this.currentState.restoreMemento(this.startingPoints.pop());
            }
        }
        Foretelling.Soothsayer = Soothsayer;
        class WorldStateProvider {
            saveMemento() {
                return new WorldState(this.numberOfKings, this.currentKingInKingsLanding, this.season);
            }
            restoreMemento(memento) {
                this.numberOfKings = memento.numberOfKings;
                this.currentKingInKingsLanding = memento.currentKingInKingsLanding;
                this.season = memento.season;
            }
        }
        Foretelling.WorldStateProvider = WorldStateProvider;
    })(Foretelling = Westeros.Foretelling || (Westeros.Foretelling = {}));
})(Westeros || (Westeros = {}));
