module Westeros.Travel{
	export interface ITravelMethod{
		Travel(source: string, destination: string) : TravelResult;
	}

	export class TravelResult{
		constructor(public durationInDays:number, public probabilityOfDeath: number, public cost: number) {
		    
		}
	}

	export class SeaGoingVessel implements ITravelMethod{
		public Travel(source: string, destination: string){
			return new TravelResult(15, .25, 500);
		}
	}

	export class Horse implements ITravelMethod{
		public Travel(source: string, destination: string){
			return new TravelResult(30, .25, 50);
		}
	}

	export class Walk implements ITravelMethod{
		public Travel(source: string, destination: string){
			return new TravelResult(150, .55, 0);
		}
	}
}

var currentMoney = 70;
var strat;
if(currentMoney > 500)
	strat = new Westeros.Travel.SeaGoingVessel();
else if(currentMoney>50)
	strat = new Westeros.Travel.Horse();
else
	strat = new Westeros.Travel.Walk();