var Westeros;
(function (Westeros) {
    var Army;
    (function (Army) {
        class Soldier {
            constructor() {
                this.Health = 10;
                this.FightingAbility = 5;
                this.Hunger = 0;
            }
        }
        Army.Soldier = Soldier;
    })(Army = Westeros.Army || (Westeros.Army = {}));
})(Westeros || (Westeros = {}));
