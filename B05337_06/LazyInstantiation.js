var Westeros;
(function (Westeros) {
    var FoodSuppliers;
    (function (FoodSuppliers) {
        class Bakery {
            constructor() {
                this.requiredBreads = [];
            }
            orderBreadType(breadType) {
                this.requiredBreads.push(breadType);
            }
            pickUpBread(breadType) {
                console.log("Picup of bread " + breadType + " requested");
                if (!this.breads) {
                    this.createBreads();
                }
                for (var i = 0; i < this.breads.length; i++) {
                    if (this.breads[i].breadType == breadType)
                        return this.breads[i];
                }
            }
            createBreads() {
                this.breads = [];
                for (var i = 0; i < this.requiredBreads.length; i++) {
                    this.breads.push(new Bread(this.requiredBreads[i]));
                }
            }
        }
        FoodSuppliers.Bakery = Bakery;
        class Bread {
            constructor(breadType) {
                this.breadType = breadType;
                //some complex, time consuming operation
                console.log("Bread " + breadType + " created.");
            }
        }
        FoodSuppliers.Bread = Bread;
    })(FoodSuppliers = Westeros.FoodSuppliers || (Westeros.FoodSuppliers = {}));
})(Westeros || (Westeros = {}));
var bakery = new Westeros.FoodSuppliers.Bakery();
bakery.orderBreadType("Brioche");
bakery.orderBreadType("Anadama bread");
bakery.orderBreadType("Chapati");
bakery.orderBreadType("Focaccia");
console.log(bakery.pickUpBread("Brioche").breadType);
