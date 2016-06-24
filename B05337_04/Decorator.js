var Westeros;
(function (Westeros) {
    var Armor;
    (function (Armor) {
        class BasicArmor {
            CalculateDamageFromHit(hit) {
                return hit.Strength * .2;
            }
            GetArmorIntegrity() {
                return 1;
            }
        }
        Armor.BasicArmor = BasicArmor;
        class ChainMail {
            constructor(decoratedArmor) {
                this.decoratedArmor = decoratedArmor;
            }
            CalculateDamageFromHit(hit) {
                hit.Strength = hit.Strength * .8;
                return this.decoratedArmor.CalculateDamageFromHit(hit);
            }
            GetArmorIntegrity() {
                return .9 * this.decoratedArmor.GetArmorIntegrity();
            }
        }
        Armor.ChainMail = ChainMail;
        class Hit {
        }
        Armor.Hit = Hit;
    })(Armor = Westeros.Armor || (Westeros.Armor = {}));
})(Westeros || (Westeros = {}));
let armor = new Westeros.Armor.ChainMail(new Westeros.Armor.BasicArmor());
console.log(armor.CalculateDamageFromHit({ Location: "head", Weapon: "Sock filled with pennies", Strength: 12 }));
