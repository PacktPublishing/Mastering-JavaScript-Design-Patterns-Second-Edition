var Westeros;
(function (Westeros) {
    var Meta;
    (function (Meta) {
        var CastleDesign;
        (function (CastleDesign) {
            class Model {
                constructor(name, description, outerWallThickness, numberOfTowers, moat) {
                    this.name = name;
                    this.description = description;
                    this.outerWallThickness = outerWallThickness;
                    this.numberOfTowers = numberOfTowers;
                    this.moat = moat;
                }
            }
            CastleDesign.Model = Model;
            class ValidationResult {
                constructor() {
                    this.Errors = new Array();
                }
            }
            CastleDesign.ValidationResult = ValidationResult;
            class CreateCastleView {
                constructor(document, controller, model, validationResult) {
                    this.document = document;
                    this.controller = controller;
                    this.model = model;
                    this.validationResult = validationResult;
                    this.document.getElementById("saveButton").addEventListener("click", () => this.saveCastle());
                    this.document.getElementById("castleName").value = model.name;
                    this.document.getElementById("description").value = model.description;
                    this.document.getElementById("outerWallThickness").value = model.outerWallThickness;
                    this.document.getElementById("numberOfTowers").value = model.numberOfTowers;
                    this.document.getElementById("moat").value = model.moat;
                }
                saveCastle() {
                    var data = {
                        name: this.document.getElementById("castleName").value,
                        description: this.document.getElementById("description").value,
                        outerWallThickness: this.document.getElementById("outerWallThickness").value,
                        numberOfTowers: this.document.getElementById("numberOfTowers").value,
                        moat: this.document.getElementById("moat").value
                    };
                    this.controller.saveCastle(data);
                }
            }
            CastleDesign.CreateCastleView = CreateCastleView;
            class CreateCastleSuccess {
                constructor(document, controller, model) {
                    this.document = document;
                    this.controller = controller;
                    this.model = model;
                }
            }
            CastleDesign.CreateCastleSuccess = CreateCastleSuccess;
            class Controller {
                constructor(document) {
                    this.document = document;
                }
                createCastle() {
                    this.setView(new CreateCastleView(this.document, this));
                }
                saveCastle(data) {
                    var validationResult = this.validate(data);
                    if (validationResult.IsValid) {
                        //save castle to storage
                        this.saveCastleSuccess(data);
                    }
                    else {
                        this.setView(new CreateCastleView(this.document, this, data, validationResult));
                    }
                }
                saveCastleSuccess(data) {
                    this.setView(new CreateCastleSuccess(this.document, this, data));
                }
                setView(view) {
                    //send the view to the browser
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
            CastleDesign.Controller = Controller;
        })(CastleDesign = Meta.CastleDesign || (Meta.CastleDesign = {}));
    })(Meta = Westeros.Meta || (Westeros.Meta = {}));
})(Westeros || (Westeros = {}));
