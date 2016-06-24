var Westeros;
(function (Westeros) {
    var Measurement;
    (function (Measurement) {
        class BarrelCalculator {
            calculateNumberNeeded(volume) {
                return Math.ceil(volume / 157);
            }
        }
        Measurement.BarrelCalculator = BarrelCalculator;
        class DragonBarrelCalculator {
            calculateNumberNeeded(volume) {
                if (this._barrelCalculator == null)
                    this._barrelCalculator = new BarrelCalculator();
                return this._barrelCalculator.calculateNumberNeeded(volume * .77);
            }
        }
        Measurement.DragonBarrelCalculator = DragonBarrelCalculator;
    })(Measurement = Westeros.Measurement || (Westeros.Measurement = {}));
})(Westeros || (Westeros = {}));
