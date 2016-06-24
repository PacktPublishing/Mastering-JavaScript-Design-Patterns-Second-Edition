module Westeros.Tourism {
    export class HamiltonianTour{
    	constructor(public options: HamiltonianTourOptions) {
        }
	    public StartTour(){
	    	if(this.options.onTourStart && typeof(this.options.onTourStart) === "function")
	    		this.options.onTourStart();
            this.VisitAttraction("King's Landing");
            this.VisitAttraction("Winterfell");
            this.VisitAttraction("Mountains of Dorne");
            this.VisitAttraction("Eyrie");
            if(this.options.onTourCompletion && typeof(this.options.onTourCompletion) === "function")
                this.options.onTourCompletion();
	    }

	    VisitAttraction(AttractionName){
	    	if(this.options.onEntryToAttraction && typeof(this.options.onEntryToAttraction) === "function")
	    		this.options.onEntryToAttraction(AttractionName);
	    	//do whatever one does in a Attraction
	    	if(this.options.onExitFromAttraction && typeof(this.options.onExitFromAttraction) === "function")
                this.options.onExitFromAttraction(AttractionName);
	    }
    }

    export class HamiltonianTourOptions{
    	onTourStart: Function;
    	onEntryToAttraction: Function;
    	onExitFromAttraction: Function;
    	onTourCompletion: Function;
    }
}

var options = new Westeros.Tourism.HamiltonianTourOptions();
options.onTourStart = function() { console.log("I love touring!");};
var tour = new Westeros.Tourism.HamiltonianTour(options);
tour.StartTour();