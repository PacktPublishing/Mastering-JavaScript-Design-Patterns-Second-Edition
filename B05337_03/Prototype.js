var Westeros;
(function (Westeros) {
    (function (Families) {
        var Lannister = (function () {
            function Lannister() {
            }
            Lannister.prototype.clone = function () {
                var clone = new Lannister();
                for (var attr in this) {
                    clone[attr] = this[attr];
                }
                return clone;
            };
            return Lannister;
        })();
        Families.Lannister = Lannister;
    })(Westeros.Families || (Westeros.Families = {}));
    var Families = Westeros.Families;
})(Westeros || (Westeros = {}));

var jamie = new Westeros.Families.Lannister();
jamie.swordSkills = 9;
jamie.charm = 6;
jamie.wealth = 10;

var tyrion = jamie.clone();
tyrion.charm = 10;

console.log(tyrion.wealth);
console.log(tyrion.swordSkills);
