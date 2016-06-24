module Westeros.Alliances{
	
	export class HouseStark{
		karstark: Karstark;
		bolton: Bolton;
		frey: Frey;
		umber: Umber;

		constructor(){
			this.karstark = new Karstark(this);
			this.bolton = new Bolton(this);
			this.frey = new Frey(this);
			this.umber = new Umber(this);
		}
		routeMessage(message){

		}
	}

	export class Karstark{
		constructor(public greatLord) {
		    
		}
		public receiveMessage(message: string){

		} 
		public sendMessage(message: string){
			this.greatLord.routeMessage(message)
		}

	}

	export class Bolton{
		constructor(public greatLord) {
		    
		}
		public receiveMessage(message: string){

		} 
		public sendMessage(message: string){
			this.greatLord.routeMessage(message)
		}
	}

	export class Frey{
		constructor(public greatLord) {
		    
		}
		public receiveMessage(message: string){

		} 
		public sendMessage(message: string){
			this.greatLord.routeMessage(message)
		}
	}

	export class Umber{
		constructor(public greatLord) {
		    
		}
		public receiveMessage(message: string){

		} 
		public sendMessage(message: string){
			this.greatLord.routeMessage(message)
		}
	}
}