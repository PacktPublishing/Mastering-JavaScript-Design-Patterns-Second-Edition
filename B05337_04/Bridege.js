var Westeros;
(function (Westeros) {
    var Religion;
    (function (Religion) {
        class OldGods {
            prayTo(sacrifice) {
                console.log("We Old Gods hear your prayer");
            }
        }
        Religion.OldGods = OldGods;
        class DrownedGod {
            prayTo(humanSacrifice) {
                console.log("*BUBBLE* GURGLE");
            }
        }
        Religion.DrownedGod = DrownedGod;
        class SevenGods {
            prayTo(prayerPurpose) {
                console.log("Sorry there are a lot of us, it gets confusing here.  Did you pray for something?");
            }
        }
        Religion.SevenGods = SevenGods;
        class OldGodsAdapter {
            constructor() {
                this._oldGods = new OldGods();
            }
            prayTo() {
                let sacrifice = new Sacrifice();
                this._oldGods.prayTo(sacrifice);
            }
        }
        Religion.OldGodsAdapter = OldGodsAdapter;
        class DrownedGodAdapter {
            constructor() {
                this._drownedGod = new DrownedGod();
            }
            prayTo() {
                let sacrifice = new HumanSacrifice();
                this._drownedGod.prayTo(sacrifice);
            }
        }
        Religion.DrownedGodAdapter = DrownedGodAdapter;
        class SevenGodsAdapter {
            constructor() {
                this.prayerPurposeProvider = new PrayerPurposeProvider();
                this._sevenGods = new SevenGods();
            }
            prayTo() {
                this._sevenGods.prayTo(this.prayerPurposeProvider.GetPurpose());
            }
        }
        Religion.SevenGodsAdapter = SevenGodsAdapter;
        class PrayerPurposeProvider {
            GetPurpose() { }
        }
        Religion.PrayerPurposeProvider = PrayerPurposeProvider;
        class Sacrifice {
        }
        Religion.Sacrifice = Sacrifice;
        class HumanSacrifice {
        }
        Religion.HumanSacrifice = HumanSacrifice;
    })(Religion = Westeros.Religion || (Westeros.Religion = {}));
})(Westeros || (Westeros = {}));
let god1 = new Westeros.Religion.SevenGodsAdapter();
let god2 = new Westeros.Religion.DrownedGodAdapter();
let god3 = new Westeros.Religion.OldGodsAdapter();
let gods = [god1, god2, god3];
for (let i = 0; i < gods.length; i++) {
    gods[i].prayTo();
}
