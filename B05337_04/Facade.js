var Westeros;
(function (Westeros) {
    var Transportation;
    (function (Transportation) {
        class Fleet {
            setDestination(destination) {
                //pass commands to a series of ships, admirals and whoever else needs it
            }
            resupply() {
            }
            attack(destination) {
                //attack a city
            }
        }
        Transportation.Fleet = Fleet;
        class Ship {
            TurnLeft() { }
            TurnRight() { }
            GoForward() { }
        }
        Transportation.Ship = Ship;
        class Admiral {
        }
        Transportation.Admiral = Admiral;
        class SupplyCoordinator {
        }
        Transportation.SupplyCoordinator = SupplyCoordinator;
    })(Transportation = Westeros.Transportation || (Westeros.Transportation = {}));
})(Westeros || (Westeros = {}));
