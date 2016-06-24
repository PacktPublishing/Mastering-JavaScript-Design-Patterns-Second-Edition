module Westeros.FoodSuppliers{

	export class Bakery{
		breads: Bread[];
		requiredBreads: string[];
		constructor() {
		    this.requiredBreads = [];
		}

		public orderBreadType(breadType: string){
			this.requiredBreads.push(breadType);
		}

		public pickUpBread(breadType: string):Bread{
			console.log("Picup of bread " + breadType + " requested")
			if(!this.breads)
			{
				this.createBreads();
			}
			for(var i=0; i<this.breads.length; i++){
				if(this.breads[i].breadType == breadType)
					return this.breads[i];
			}
		}

		createBreads(){
			this.breads = [];
			for(var i =0; i<this.requiredBreads.length; i++)
			{
				this.breads.push(new Bread(this.requiredBreads[i]));
			}
		}
	}

	export class Bread{
		constructor(public breadType: string){
			//some complex, time consuming operation
			console.log("Bread " + breadType + " created.");
		}
	}
}

var bakery = new Westeros.FoodSuppliers.Bakery();
bakery.orderBreadType("Brioche");
bakery.orderBreadType("Anadama bread");
bakery.orderBreadType("Chapati");
bakery.orderBreadType("Focaccia");

console.log(bakery.pickUpBread("Brioche").breadType);
