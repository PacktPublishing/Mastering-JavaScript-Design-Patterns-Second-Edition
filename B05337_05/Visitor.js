var Westeros;
(function (Westeros) {
    var Army;
    (function (Army) {
        class Knight {
            constructor() {
                this._type = "Westeros.Army.Knight";
            }
            printName() {
                console.log("Knight");
            }
            visit(visitor) {
                visitor.visit(this);
            }
        }
        Army.Knight = Knight;
        class FootSoldier {
            constructor() {
                this._type = "Westeros.Army.FootSoldier";
            }
            printName() {
                console.log("FootSoldier");
            }
            visit(visitor) {
                visitor.visit(this);
            }
        }
        Army.FootSoldier = FootSoldier;
        class Archer {
            constructor() {
                this._type = "Westeros.Army.Archer";
            }
            printName() {
                console.log("Archer");
            }
            visit(visitor) {
                visitor.visit(this);
            }
        }
        Army.Archer = Archer;
        class Lord {
            constructor() {
                this._type = "Westeros.Army.Lord";
            }
            printName() {
                console.log("Lord");
            }
            visit(visitor) {
                visitor.visit(this);
            }
        }
        Army.Lord = Lord;
        class InstanceOfExample {
            Execute() {
                var collection = [];
                collection.push(new Knight());
                collection.push(new FootSoldier());
                collection.push(new Lord());
                collection.push(new Archer());
                for (var i = 0; i < collection.length; i++) {
                    if (collection[i] instanceof Westeros.Army.Knight)
                        collection[i].printName();
                    else
                        console.log("No match");
                }
            }
        }
        Army.InstanceOfExample = InstanceOfExample;
        class IfExample {
            Execute() {
                var collection = [];
                collection.push(new Knight());
                collection.push(new FootSoldier());
                collection.push(new Lord());
                collection.push(new Archer());
                for (var i = 0; i < collection.length; i++) {
                    if (collection[i]._type == 'Westeros.Army.Knight')
                        collection[i].printName();
                    else
                        console.log("No match");
                }
            }
        }
        Army.IfExample = IfExample;
        class VisitorExample {
            Execute() {
                var collection = [];
                collection.push(new Knight());
                collection.push(new FootSoldier());
                collection.push(new Lord());
                collection.push(new Archer());
                var visitor = new SelectiveNamePrinterVisitor();
                for (var i = 0; i < collection.length; i++) {
                    collection[i].visit(visitor);
                }
            }
        }
        Army.VisitorExample = VisitorExample;
        class SelectiveNamePrinterVisitor {
            visit(memberOfArmy) {
                if (memberOfArmy instanceof Westeros.Army.Knight) {
                    this.VisitKnight(memberOfArmy);
                }
                else {
                    console.log("Not a knight");
                }
            }
            VisitKnight(memberOfArmy) {
                memberOfArmy.printName();
            }
        }
    })(Army = Westeros.Army || (Westeros.Army = {}));
})(Westeros || (Westeros = {}));
console.log("Instance of");
var a = new Westeros.Army.InstanceOfExample();
a.Execute();
console.log("Type of");
var b = new Westeros.Army.IfExample();
b.Execute();
console.log("Vistor example");
var c = new Westeros.Army.VisitorExample();
c.Execute();
