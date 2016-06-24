module Westeros.Food{

	export class BasicBeer{
		public Create(){
			this.AddIngredients();
			this.Stir();
			this.Ferment();
			this.Test();
			if(this.TestingPassed())
			{
				this.Distribute();
			}

		}

		AddIngredients(){
			throw "Add ingredients needs to be implemented";
		}

		Stir(){
			//stir 15 times with a wooden spoon
		}

		Ferment(){
			//let stand for 30 days
		}

		Test(){
			//draw off a cup of beer and taste it
		}

		TestingPassed(){
			throw "Conditions to pass a test must be implemented"
		}

		Distribute(){
			//place beer in 50L casks
		}
	}

	export class RaspberryBeer extends BasicBeer
	{
		AddIngredients()
		{
			//add ingredients, probably including raspberries
		}

		TestingPassed()
		{
			//beer must be reddish and taste of raspberries
		}
	}
}