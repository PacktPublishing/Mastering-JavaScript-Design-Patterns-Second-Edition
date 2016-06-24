

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
		constructor(public document: Document, public viewModel: CreateCastleViewModel){
			this.document.getElementById("saveButton").addEventListener("click", () => this.saveCastle());
			this.document.getElementById("name").addEventListener("change", this.nameChangedInView);
			this.document.getElementById("description").addEventListener("change", this.descriptionChangedInView);
			this.document.getElementById("outerWallThickness").addEventListener("change", this.outerWallThicknessChangedInView);
			this.document.getElementById("numberOfTowers").addEventListener("change", this.numberOfTowersChangedInView);
			this.document.getElementById("moat").addEventListener("change", this.moatChangedInView);
		}

		public nameChangedInView(name: string){
			this.viewModel.nameChangedInView(name);
		}

		public nameChangedInViewModel(name: string){
			this.document.getElementById("name").value = name;
		}

		public descriptionChangedInView(description: string){
			this.viewModel.descriptionChangedInView(description);
		}

		public descriptionChangedInViewModel(description: string){
			this.document.getElementById("description").value = description;
		}

		public numberOfTowersChangedInView(numberOfTowers: string){
			this.viewModel.numberOfTowersChangedInView(numberOfTowers);
		}

		public numberOfTowersChangedInViewModel(numberOfTowers: string){
			this.document.getElementById("numberOfTowers").value = numberOfTowers;
		}

		public outerWallThicknessChangedInView(outerWallThickness: string){
			this.viewModel.outerWallThicknessChangedInView(outerWallThickness);
		}

		public outerWallThicknessChangedInViewModel(outerWallThickness: string){
			this.document.getElementById("outerWallThickness").value = outerWallThickness;
		}

		public moatChangedInView(moat: string){
			this.viewModel.moatChangedInView(moat);
		}

		public moatChangedInViewModel(moat: string){
			this.document.getElementById("moat").value = moat;
		}

		public isValidChangedInViewModel(validationResult){
			this.document.getElementById("validationWarning").innerHtml = validationResult.Errors;
			this.document.getElementById("validationWarning").className = "visible";

		}
		saveCastle(){
			this.viewModel.saveCastle();
		}
	}

	export class CreateCastleViewModel{
		model: CreateCastleModel;
		view: CreateCastleView;
		name: string;
		description: string;
		outerWallThickness:string;
		moat: string;
		numberOfTowers: string;
		constructor(public document: Document){
			this.model = new CreateCastleModel();
			this.view = new CreateCastleView(document, this);
		}


public nameChangedInView(name: string){
	this.name = name;
}

public nameChangedInViewModel(name: string){
	this.view.nameChangedInViewModel(name);

}

public descriptionChangedInView(description: string){
	this.description = description;
}

public descriptionChangedInViewModel(description: string){
	this.view.descriptionChangedInViewModel(description);
}

public outerWallThicknessChangedInView(outerWallThickness: string){
	this.outerWallThickness = outerWallThickness;
}

public outerWallThicknessChangedInViewModel(outerWallThickness: string){
	this.view.outerWallThicknessChangedInViewModel(outerWallThickness);
}

public numberOfTowersChangedInView(numberOfTowers: string){
	this.numberOfTowers = numberOfTowers;
}

public numberOfTowersChangedInViewModel(numberOfTowers: string){
	this.view.numberOfTowersChangedInViewModel(numberOfTowers);
}

public moatChangedInView(moat: string){
	this.moat = moat;
}

public moatChangedInViewModel(moat: string){
	this.view.moatChangedInViewModel(moat);
}

		public saveCastle(){
			var validationResult = this.validate();
			if(validationResult.IsValid)
			{
				//write to the model
				this.saveCastleSuccess();
			} else {
				this.view.isValidChangedInViewModel(validationResult);
			}
		}

		public saveCastleSuccess(){
			//do whatever is needed when save is successful.
			//Possibly update the view model
		}

		private validate():ValidationResult{
			var validationResult = new validationResult();
			if(!this.name || this.name === "")
			{
				validationResult.IsValid = false;
				validationResult.Errors.push("Name is required");
			}
			return
		}


	}
}
