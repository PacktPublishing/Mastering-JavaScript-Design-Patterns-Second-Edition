var Westeros;
(function (Westeros) {
    var Food;
    (function (Food) {
        class SimpleIngredient {
            constructor(name, calories, ironContent, vitaminCContent) {
                this.name = name;
                this.calories = calories;
                this.ironContent = ironContent;
                this.vitaminCContent = vitaminCContent;
            }
            GetName() {
                return this.name;
            }
            GetCalories() {
                return this.calories;
            }
            GetIronContent() {
                return this.ironContent;
            }
            GetVitaminCContent() {
                return this.vitaminCContent;
            }
        }
        Food.SimpleIngredient = SimpleIngredient;
        class CompoundIngredient {
            constructor(name) {
                this.name = name;
                this.ingredients = new Array();
            }
            AddIngredient(ingredient) {
                this.ingredients.push(ingredient);
            }
            GetName() {
                return this.name;
            }
            GetCalories() {
                let total = 0;
                for (let i = 0; i < this.ingredients.length; i++) {
                    total += this.ingredients[i].GetCalories();
                }
                return total;
            }
            GetIronContent() {
                let total = 0;
                for (let i = 0; i < this.ingredients.length; i++) {
                    total += this.ingredients[i].GetIronContent();
                }
                return total;
            }
            GetVitaminCContent() {
                let total = 0;
                for (let i = 0; i < this.ingredients.length; i++) {
                    total += this.ingredients[i].GetVitaminCContent();
                }
                return total;
            }
        }
        Food.CompoundIngredient = CompoundIngredient;
    })(Food = Westeros.Food || (Westeros.Food = {}));
})(Westeros || (Westeros = {}));
let egg = new Westeros.Food.SimpleIngredient("Egg", 155, 6, 0);
let milk = new Westeros.Food.SimpleIngredient("Milk", 42, 0, 0);
let sugar = new Westeros.Food.SimpleIngredient("Sugar", 387, 0, 0);
let rice = new Westeros.Food.SimpleIngredient("Rice", 370, 8, 0);
let ricePudding = new Westeros.Food.CompoundIngredient("Rice Pudding");
ricePudding.AddIngredient(egg);
ricePudding.AddIngredient(rice);
ricePudding.AddIngredient(milk);
ricePudding.AddIngredient(sugar);
console.log("A serving of rice pudding contains:");
console.log(ricePudding.GetCalories() + " calories");
