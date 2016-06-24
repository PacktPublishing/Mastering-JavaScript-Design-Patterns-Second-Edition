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
    })(Potion = Westeros.Potion || (Westeros.Potion = {}));
})(Westeros || (Westeros = {}));
var combinedIngredient;
self.addEventListener('message', function (e) {
    var data = e.data;
    var ingredients = data.ingredients;
    combinedIngredient = new Westeros.Potion.CombinedIngredient();
    for (var i = 0; i < ingredients.length; i++) {
        combinedIngredient.Add(ingredients[i]);
    }
    console.log("calculating combination");
    setTimeout(combinationComplete, 2000);
}, false);
function combinationComplete() {
    console.log("combination complete");
    self.postMessage({ event: 'combinationComplete', result: combinedIngredient });
}
