
module Westeros.Meta.CastleDesign{
    export interface Document
    {
         getElementById(selector: string):any;
    }
    
	export class CreateCastleModel{
		constructor(public name?, public description?, public outerWallThickness?, public numberOfTowers?, public moat?){}

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
		constructor(public document: Document, public presenter: CreateCastlePresenter){
			this.document.getElementById("saveButton").addEventListener("click", this.saveCastle);
		}

		public setCastleName(name: string)
		{
			this.document.getElementById("castleName").value = name;
		}

		public getCastleName():string
		{
			return this.document.getElementById("castleName").value;
		}

		public setDescription(description: string)
		{
			this.document.getElementById("description").value = description;
		}

		public getDescription():string
		{
			return this.document.getElementById("description").value;
		}

		public setOuterWallThickness(outerWallThickness:string){
			this.document.getElementById("outerWallThickness").value = outerWallThickness;
		}

		public getOuterWallThickness() : string{
			return this.document.getElementById("outerWallThickness").value;
		}


		public setNumberOfTowers(numberOfTowers:number){
			this.document.getElementById("numberOfTowers").value = numberOfTowers;
		}

		public getNumberOfTowers():number{
			return parseInt(this.document.getElementById("numberOfTowers").value);
		}

		public setMoat(moat: boolean){
			this.document.getElementById("moat").value = moat;
		}

		public getMoat()
		{
			return this.document.getElementById("moat").value;
		}

		public setValid(validationResult: ValidationResult){

		}

		saveCastle(){
			this.presenter.saveCastle();
		}
	}

	export class CreateCastlePresenter{
		model: CreateCastleModel;
		view: CreateCastleView;
		constructor(public document: Document){
			this.model = new CreateCastleModel();
			this.view = new CreateCastleView(document, this);
		}

		public saveCastle(){
			var data : CreateCastleModel= {
			 name : this.view.getCastleName(),
			 description : this.view.getDescription(),
			 outerWallThickness : this.view.getOuterWallThickness(),
			 numberOfTowers : this.view.getNumberOfTowers(),
			 moat : this.view.getMoat()
			}

			var validationResult = this.validate(data);
			if(validationResult.IsValid)
			{
				//write to the model
				this.saveCastleSuccess(data);
			} else {
				this.view.setValid(validationResult);
			}
		}

		public saveCastleSuccess(data: CreateCastleModel){
			//redirect to different presenter
		}

		private validate(model: CreateCastleModel):ValidationResult{
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
