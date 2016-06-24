var Westeros;
(function (Westeros) {
    var Transportation;
    (function (Transportation) {
        class SailConfiguration {
        }
        Transportation.SailConfiguration = SailConfiguration;
        class Ship {
            SetRudderAngleTo(angle) { }
            SetSailConfiguration(configuration) { }
            SetSailAngle(sailId, sailAngle) { }
            GetCurrentBearing() {
                return 7;
            }
            GetCurrentSpeedEstimate() {
                return 7;
            }
            ShiftCrewWeightTo(weightToShift, locationId) { }
        }
        Transportation.Ship = Ship;
        class ShipAdapter {
            constructor() {
                this._ship = new Ship();
            }
            TurnLeft() {
                this._ship.SetRudderAngleTo(-30);
                this._ship.SetSailAngle(3, 12);
            }
            TurnRight() {
                this._ship.SetRudderAngleTo(30);
                this._ship.SetSailAngle(5, -9);
            }
            GoForward() {
                //do something else to the _ship
            }
        }
        Transportation.ShipAdapter = ShipAdapter;
    })(Transportation = Westeros.Transportation || (Westeros.Transportation = {}));
})(Westeros || (Westeros = {}));
var ship = new Westeros.Transportation.ShipAdapter();
ship.GoForward();
ship.TurnLeft();
