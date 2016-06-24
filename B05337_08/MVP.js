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
                constructor(document, presenter) {
                    this.document = document;
                    this.presenter = presenter;
                    this.document.getElementById("saveButton").addEventListener("click", this.saveCastle);
                }
                setCastleName(name) {
                    this.document.getElementById("castleName").value = name;
                }
                getCastleName() {
                    return this.document.getElementById("castleName").value;
                }
                setDescription(description) {
                    this.document.getElementById("description").value = description;
                }
                getDescription() {
                    return this.document.getElementById("description").value;
                }
                setOuterWallThickness(outerWallThickness) {
                    this.document.getElementById("outerWallThickness").value = outerWallThickness;
                }
                getOuterWallThickness() {
                    return this.document.getElementById("outerWallThickness").value;
                }
                setNumberOfTowers(numberOfTowers) {
                    this.document.getElementById("numberOfTowers").value = numberOfTowers;
                }
                getNumberOfTowers() {
                    return parseInt(this.document.getElementById("numberOfTowers").value);
                }
                setMoat(moat) {
                    this.document.getElementById("moat").value = moat;
                }
                getMoat() {
                    return this.document.getElementById("moat").value;
                }
                setValid(validationResult) {
                }
                saveCastle() {
                    this.presenter.saveCastle();
                }
            }
            CastleDesign.CreateCastleView = CreateCastleView;
            class CreateCastlePresenter {
                constructor(document) {
                    this.document = document;
                    this.model = new CreateCastleModel();
                    this.view = new CreateCastleView(document, this);
                }
                saveCastle() {
                    var data = {
                        name: this.view.getCastleName(),
                        description: this.view.getDescription(),
                        outerWallThickness: this.view.getOuterWallThickness(),
                        numberOfTowers: this.view.getNumberOfTowers(),
                        moat: this.view.getMoat()
                    };
                    var validationResult = this.validate(data);
                    if (validationResult.IsValid) {
                        //write to the model
                        this.saveCastleSuccess(data);
                    }
                    else {
                        this.view.setValid(validationResult);
                    }
                }
                saveCastleSuccess(data) {
                    //redirect to different presenter
                }
                validate(model) {
                    var validationResult = new validationResult();
                    if (!model.name || model.name === "") {
                        validationResult.IsValid = false;
                        validationResult.Errors.push("Name is required");
                    }
                    return;
                }
            }
            CastleDesign.CreateCastlePresenter = CreateCastlePresenter;
        })(CastleDesign = Meta.CastleDesign || (Meta.CastleDesign = {}));
    })(Meta = Westeros.Meta || (Westeros.Meta = {}));
})(Westeros || (Westeros = {}));
