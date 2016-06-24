module Westeros.Army{

	export interface IMemberOfArmy{
		visit(visitor: IVisitor);
		printName();
		_type: string;
	}

	export class Knight implements IMemberOfArmy{
		_type = "Westeros.Army.Knight";
		printName()
		{
			console.log("Knight");
		}
		visit(visitor:IVisitor)
		{
			visitor.visit(this);
		}
	}
	export class FootSoldier implements IMemberOfArmy{
		_type = "Westeros.Army.FootSoldier";
		printName()
		{
			console.log("FootSoldier");
		}
		visit(visitor:IVisitor)
		{
			visitor.visit(this);
		}
	}
	export class Archer implements IMemberOfArmy{
		_type = "Westeros.Army.Archer";
		printName()
		{
			console.log("Archer");
		}
		visit(visitor:IVisitor)
		{
			visitor.visit(this);
		}
	}
	export class Lord implements IMemberOfArmy{
		_type = "Westeros.Army.Lord";
		printName()
		{
			console.log("Lord");
		}
		visit(visitor:IVisitor)
		{
			visitor.visit(this);
		}
	}

	export class InstanceOfExample{
		Execute()
		{
			var collection = [];
			collection.push(new Knight());
			collection.push(new FootSoldier());
			collection.push(new Lord());
			collection.push(new Archer());

			for(var i = 0; i< collection.length; i++)
			{
				if(collection[i] instanceof Westeros.Army.Knight)
					collection[i].printName();
				else 
					console.log("No match");
			}
		}
	}

	export class IfExample{
		Execute()
		{
			var collection = [];
			collection.push(new Knight());
			collection.push(new FootSoldier());
			collection.push(new Lord());
			collection.push(new Archer());

			for(var i = 0; i< collection.length; i++)
			{
				if(collection[i]._type == 'Westeros.Army.Knight')
					collection[i].printName();
				else 
					console.log("No match");
			}
		}
	}

	export interface IVisitor{
		visit(memberOfArmy: IMemberOfArmy);
	}

	export class VisitorExample{
		Execute(){
			var collection = [];
			collection.push(new Knight());
			collection.push(new FootSoldier());
			collection.push(new Lord());
			collection.push(new Archer());
			var visitor = new SelectiveNamePrinterVisitor();
			for(var i = 0; i< collection.length; i++)
			{
				collection[i].visit(visitor);
			}
		}
	}

	class SelectiveNamePrinterVisitor implements IVisitor{
		public visit(memberOfArmy: IMemberOfArmy)
		{
			if(memberOfArmy instanceof Westeros.Army.Knight)
			{
				this.VisitKnight(memberOfArmy);
			}
			else{
				console.log("Not a knight");
			}
		}

		VisitKnight(memberOfArmy: IMemberOfArmy)
		{
			memberOfArmy.printName();
		}
	}
}

console.log("Instance of");
var a = new Westeros.Army.InstanceOfExample();
a.Execute();
console.log("Type of");
var b = new Westeros.Army.IfExample();
b.Execute();
console.log("Vistor example");
var c = new Westeros.Army.VisitorExample();
c.Execute();
