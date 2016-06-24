var Westeros;
(function (Westeros) {
    var Potion;
    (function (Potion) {
        class Ingredient {
        }
        Potion.Ingredient = Ingredient;
        class CombinedIngredient {
            Add(ingredient) {
            }
        }
        Potion.CombinedIngredient = CombinedIngredient;
        class Step {
        }
        class Combiner {
            constructor() {
                this.waitingForChunks = 0;
            }
            combine(ingredients) {
                console.log("Starting combination");
                if (ingredients.length > 10) {
                    for (var i = 0; i < Math.ceil(ingredients.length / 2); i++) {
                        this.waitingForChunks++;
                        console.log("Dispatched chunks count at: " + this.waitingForChunks);
                        var worker = new Worker("FanOutInWebWorker.js");
                        worker.addEventListener('message', (message) => this.complete(message));
                        worker.postMessage({ ingredients: ingredients.slice(i, i * 2) });
                    }
                }
            }
            complete(message) {
                this.waitingForChunks--;
                console.log("Outstanding chunks count at: " + this.waitingForChunks);
                if (this.waitingForChunks == 0)
                    console.log("All chunks received");
            }
        }
        Potion.Combiner = Combiner;
    })(Potion = Westeros.Potion || (Westeros.Potion = {}));
})(Westeros || (Westeros = {}));
