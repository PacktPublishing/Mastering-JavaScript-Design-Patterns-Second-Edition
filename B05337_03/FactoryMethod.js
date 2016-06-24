var Westeros;
(function (Westeros) {
    (function (Religion) {
        var Prayer = (function () {
            function Prayer() {
            }
            Prayer.prototype.pray = function (godName) {
                GodFactory.Build(godName).prayTo();
            };
            return Prayer;
        })();
        Religion.Prayer = Prayer;

        var GodDeterminant = (function () {
            function GodDeterminant(religionName, prayerPurpose) {
                this.religionName = religionName;
                this.prayerPurpose = prayerPurpose;
            }
            return GodDeterminant;
        })();

        var GodFactory = (function () {
            function GodFactory() {
            }
            GodFactory.Build = function (godName) {
                if (godName === "watery")
                    return new WateryGod();
                if (godName === "ancient")
                    return new AncientGods();
                return new DefaultGod();
            };
            return GodFactory;
        })();

        var WateryGod = (function () {
            function WateryGod() {
            }
            WateryGod.prototype.prayTo = function () {
            };
            return WateryGod;
        })();
        Religion.WateryGod = WateryGod;

        var AncientGods = (function () {
            function AncientGods() {
            }
            AncientGods.prototype.prayTo = function () {
            };
            return AncientGods;
        })();
        Religion.AncientGods = AncientGods;

        var DefaultGod = (function () {
            function DefaultGod() {
            }
            DefaultGod.prototype.prayTo = function () {
            };
            return DefaultGod;
        })();
        Religion.DefaultGod = DefaultGod;
    })(Westeros.Religion || (Westeros.Religion = {}));
    var Religion = Westeros.Religion;
})(Westeros || (Westeros = {}));
