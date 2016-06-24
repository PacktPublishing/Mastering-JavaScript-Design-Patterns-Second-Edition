var Westeros;
(function (Westeros) {
    var Tourism;
    (function (Tourism) {
        class HamiltonianTour {
            constructor(options) {
                this.options = options;
            }
            StartTour() {
                if (this.options.onTourStart && typeof (this.options.onTourStart) === "function")
                    this.options.onTourStart();
                this.VisitAttraction("King's Landing");
                this.VisitAttraction("Winterfell");
                this.VisitAttraction("Mountains of Dorne");
                this.VisitAttraction("Eyrie");
                if (this.options.onTourCompletion && typeof (this.options.onTourCompletion) === "function")
                    this.options.onTourCompletion();
            }
            VisitAttraction(AttractionName) {
                if (this.options.onEntryToAttraction && typeof (this.options.onEntryToAttraction) === "function")
                    this.options.onEntryToAttraction(AttractionName);
                //do whatever one does in a Attraction
                if (this.options.onExitFromAttraction && typeof (this.options.onExitFromAttraction) === "function")
                    this.options.onExitFromAttraction(AttractionName);
            }
        }
        Tourism.HamiltonianTour = HamiltonianTour;
        class HamiltonianTourOptions {
        }
        Tourism.HamiltonianTourOptions = HamiltonianTourOptions;
    })(Tourism = Westeros.Tourism || (Westeros.Tourism = {}));
})(Westeros || (Westeros = {}));
var options = new Westeros.Tourism.HamiltonianTourOptions();
options.onTourStart = function () { console.log("I love touring!"); };
var tour = new Westeros.Tourism.HamiltonianTour(options);
tour.StartTour();
