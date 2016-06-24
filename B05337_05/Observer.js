var Westeros;
(function (Westeros) {
    var Court;
    (function (Court) {
        class GetterSetter {
            GetProperty() {
                return this._property;
            }
            SetProperty(value) {
                var temp = this._property;
                this._property = value;
                this._listener.Event(value, temp);
            }
        }
        class Listener {
            Event(newValue, oldValue) {
                //do something
            }
        }
        class Spy {
            constructor() {
                this._partiesToNotify = [];
            }
            Subscribe(subscriber) {
                this._partiesToNotify.push(subscriber);
            }
            Unsubscribe(subscriber) {
                this._partiesToNotify.remove(subscriber);
            }
            SetPainKillers(painKillers) {
                this._painKillers = painKillers;
                for (var i = 0; i < this._partiesToNotify.length; i++) {
                    this._partiesToNotify[i](painKillers);
                }
            }
        }
        class Player {
            OnKingPainKillerChange(newPainKillerAmount) {
                //perform some action
            }
        }
    })(Court = Westeros.Court || (Westeros.Court = {}));
})(Westeros || (Westeros = {}));
