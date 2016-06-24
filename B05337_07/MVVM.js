var Westeros;
(function (Westeros) {
    var Meta;
    (function (Meta) {
        var CastleDesign;
        (function (CastleDesign) {
            class CreateCastleModel {
                constructor(name, description, outerWallThickness, numberOfTowers, moat) {
                    this.name = name;
                    this.description = description;
                    this.outerWallThickness = outerWallThickness;
                    this.numberOfTowers = numberOfTowers;
                    this.moat = moat;
                }
            }
            CastleDesign.CreateCastleModel = CreateCastleModel;
            class ValidationResult {
                constructor() {
                    this.Errors = new Array();
                }
            }
            CastleDesign.ValidationResult = ValidationResult;
            class CreateCastleView {
                constructor(document, viewModel) {
                    this.document = document;
                    this.viewModel = viewModel;
                    this.document.getElementById("saveButton").addEventListener("click", () => this.saveCastle());
                    this.document.getElementById("name").addEventListener("change", this.nameChangedInView);
                    this.document.getElementById("description").addEventListener("change", this.descriptionChangedInView);
                    this.document.getElementById("outerWallThickness").addEventListener("change", this.outerWallThicknessChangedInView);
                    this.document.getElementById("numberOfTowers").addEventListener("change", this.numberOfTowersChangedInView);
                    this.document.getElementById("moat").addEventListener("change", this.moatChangedInView);
                }
                nameChangedInView(name) {
                    this.viewModel.nameChangedInView(name);
                }
                nameChangedInViewModel(name) {
                    this.document.getElementById("name").value = name;
                }
                descriptionChangedInView(description) {
                    this.viewModel.descriptionChangedInView(description);
                }
                descriptionChangedInViewModel(description) {
                    this.document.getElementById("description").value = description;
                }
                numberOfTowersChangedInView(numberOfTowers) {
                    this.viewModel.numberOfTowersChangedInView(numberOfTowers);
                }
                numberOfTowersChangedInViewModel(numberOfTowers) {
                    this.document.getElementById("numberOfTowers").value = numberOfTowers;
                }
                outerWallThicknessChangedInView(outerWallThickness) {
                    this.viewModel.outerWallThicknessChangedInView(outerWallThickness);
                }
                outerWallThicknessChangedInViewModel(outerWallThickness) {
                    this.document.getElementById("outerWallThickness").value = outerWallThickness;
                }
                moatChangedInView(moat) {
                    this.viewModel.moatChangedInView(moat);
                }
                moatChangedInViewModel(moat) {
                    this.document.getElementById("moat").value = moat;
                }
                isValidChangedInViewModel(validationResult) {
                    this.document.getElementById("validationWarning").innerHtml = validationResult.Errors;
                    this.document.getElementById("validationWarning").className = "visible";
                }
                saveCastle() {
                    this.viewModel.saveCastle();
                }
            }
            CastleDesign.CreateCastleView = CreateCastleView;
            class CreateCastleViewModel {
                constructor(document) {
                    this.document = document;
                    this.model = new CreateCastleModel();
                    this.view = new CreateCastleView(document, this);
                }
                nameChangedInView(name) {
                    this.name = name;
                }
                nameChangedInViewModel(name) {
                    this.view.nameChangedInViewModel(name);
                }
                descriptionChangedInView(description) {
                    this.description = description;
                }
                descriptionChangedInViewModel(description) {
                    this.view.descriptionChangedInViewModel(description);
                }
                outerWallThicknessChangedInView(outerWallThickness) {
                    this.outerWallThickness = outerWallThickness;
                }
                outerWallThicknessChangedInViewModel(outerWallThickness) {
                    this.view.outerWallThicknessChangedInViewModel(outerWallThickness);
                }
                numberOfTowersChangedInView(numberOfTowers) {
                    this.numberOfTowers = numberOfTowers;
                }
                numberOfTowersChangedInViewModel(numberOfTowers) {
                    this.view.numberOfTowersChangedInViewModel(numberOfTowers);
                }
                moatChangedInView(moat) {
                    this.moat = moat;
                }
                moatChangedInViewModel(moat) {
                    this.view.moatChangedInViewModel(moat);
                }
                saveCastle() {
                    var validationResult = this.validate();
                    if (validationResult.IsValid) {
                        //write to the model
                        this.saveCastleSuccess();
                    }
                    else {
                        this.view.isValidChangedInViewModel(validationResult);
                    }
                }
                saveCastleSuccess() {
                    //do whatever is needed when save is successful.
                    //Possibly update the view model
                }
                validate() {
                    var validationResult = new validationResult();
                    if (!this.name || this.name === "") {
                        validationResult.IsValid = false;
                        validationResult.Errors.push("Name is required");
                    }
                    return;
                }
            }
            CastleDesign.CreateCastleViewModel = CreateCastleViewModel;
        })(CastleDesign = Meta.CastleDesign || (Meta.CastleDesign = {}));
    })(Meta = Westeros.Meta || (Westeros.Meta = {}));
})(Westeros || (Westeros = {}));
