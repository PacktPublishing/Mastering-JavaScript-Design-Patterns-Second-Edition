var Westros;
(function (Westros) {
    var Buildings;
    (function (Buildings) {
        class BaseStructure {
            constructor() {
                console.log("Structure built");
            }
        }
        Buildings.BaseStructure = BaseStructure;
        class Castle extends BaseStructure {
            constructor(name) {
                super();
                this.name = name;
            }
            Build() {
                console.log("Castle built: " + this.name);
            }
        }
        Buildings.Castle = Castle;
    })(Buildings = Westros.Buildings || (Westros.Buildings = {}));
})(Westros || (Westros = {}));
