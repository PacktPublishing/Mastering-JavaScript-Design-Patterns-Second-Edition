module Westeros.Foretelling{

	export class SquareCommand{
		constructor(public numberToSquare){}
		public Execute(){
			this.numberToSquare *= this.numberToSquare;
		}
	}

	export class WorldState{
		constructor(public numberOfKings: number,public currentKingInKingsLanding: string, public season: string){}

	}

	export class Soothsayer{
		startingPoints: Array<WorldState>;
		currentState: WorldStateProvider;
		constructor(){
			this.startingPoints = [];
			this.currentState = new WorldStateProvider();
		}
		public setInitialConditions(numberOfKings, currentKingInKingsLanding, season)
		{
			this.currentState.numberOfKings = numberOfKings;
			this.currentState.currentKingInKingsLanding = currentKingInKingsLanding;
			this.currentState.season = season;
		}
		public alterNumberOfKingsAndForetell(numberOfKings: number)
		{
			this.startingPoints.push(this.currentState.saveMemento());
			this.currentState.numberOfKings = numberOfKings;
		}
		public alterSeasonAndForetell(season: string)
		{
			this.startingPoints.push(this.currentState.saveMemento());
			this.currentState.season = season;
		}
		public alterCurrentKingInKingsLandingAndForetell(currentKingInKingsLanding: string)
		{
			this.startingPoints.push(this.currentState.saveMemento());
			this.currentState.currentKingInKingsLanding = currentKingInKingsLanding;
		}
		public tryADifferentChange()
		{
			this.currentState.restoreMemento(this.startingPoints.pop());
		}
	}

	export class WorldStateProvider{
		numberOfKings: number; 
		currentKingInKingsLanding: string;
		season: string;
		saveMemento(): WorldState{
			return new WorldState(this.numberOfKings, this.currentKingInKingsLanding, this.season);
		}
		restoreMemento(memento: WorldState)
		{
			this.numberOfKings = memento.numberOfKings;
			this.currentKingInKingsLanding = memento.currentKingInKingsLanding;
			this.season = memento.season;
		}
	}
}