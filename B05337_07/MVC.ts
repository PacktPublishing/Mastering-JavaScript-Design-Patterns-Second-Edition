

module Westeros.Meta.CastleDesign{
    export interface Document
    {
         getElementById(selector: string):any;
    }
	export class Model{
		constructor(public name, public description, public outerWallThickness, public numberOfTowers, public moat){}
		
	}

	export interface IView{

	}

	export class ValidationResult{
		public IsValid: boolean;
		public Errors: Array<String>;
		public constructor(){
			this.Errors = new Array<String>();
		}
	}

	export class CreateCastleView implements IView{
		constructor(public document: Document, public controller: Controller, public model?: Model, public validationResult?: ValidationResult){
			this.document.getElementById("saveButton").addEventListener("click", () => this.saveCastle());
			this.document.getElementById("castleName").value = model.name;
			this.document.getElementById("description").value = model.description;
			this.document.getElementById("outerWallThickness").value = model.outerWallThickness;
			this.document.getElementById("numberOfTowers").value = model.numberOfTowers;
			this.document.getElementById("moat").value = model.moat;
		}

		saveCastle(){
			var data = {
			 name : this.document.getElementById("castleName").value,
			 description : this.document.getElementById("description").value,
			 outerWallThickness : this.document.getElementById("outerWallThickness").value,
			 numberOfTowers : this.document.getElementById("numberOfTowers").value,
			 moat : this.document.getElementById("moat").value
			}
			this.controller.saveCastle(data);
		}
	}

	export class CreateCastleSuccess implements IView{
		constructor(public document: Document, public controller: Controller, public model?)
		{

		}
	}

	export class Controller{
		model: Model;
		constructor(public document: Document){
			
		}

		public createCastle(){
			this.setView(new CreateCastleView(this.document, this));
		}

		public saveCastle(data: Model){
			var validationResult = this.validate(data);
			if(validationResult.IsValid)
			{
				//save castle to storage
				this.saveCastleSuccess(data);
			} else {
				this.setView(new CreateCastleView(this.document, this, data, validationResult));
			}
		}

		public saveCastleSuccess(data: Model){
			this.setView(new CreateCastleSuccess(this.document, this, data));
		}

		private setView(view: IView)
		{
			//send the view to the browser
		}

		private validate(model: Model):ValidationResult{
			var validationResult = new validationResult();
			if(!model.name || model.name === "")
			{
				validationResult.IsValid = false;
				validationResult.Errors.push("Name is required");
			}
			return 
		}

		
	}
}
