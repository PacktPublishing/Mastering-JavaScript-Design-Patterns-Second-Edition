var Westeros;
(function (Westeros) {
    var Alliances;
    (function (Alliances) {
        class HouseStark {
            constructor() {
                this.karstark = new Karstark(this);
                this.bolton = new Bolton(this);
                this.frey = new Frey(this);
                this.umber = new Umber(this);
            }
            routeMessage(message) {
            }
        }
        Alliances.HouseStark = HouseStark;
        class Karstark {
            constructor(greatLord) {
                this.greatLord = greatLord;
            }
            receiveMessage(message) {
            }
            sendMessage(message) {
                this.greatLord.routeMessage(message);
            }
        }
        Alliances.Karstark = Karstark;
        class Bolton {
            constructor(greatLord) {
                this.greatLord = greatLord;
            }
            receiveMessage(message) {
            }
            sendMessage(message) {
                this.greatLord.routeMessage(message);
            }
        }
        Alliances.Bolton = Bolton;
        class Frey {
            constructor(greatLord) {
                this.greatLord = greatLord;
            }
            receiveMessage(message) {
            }
            sendMessage(message) {
                this.greatLord.routeMessage(message);
            }
        }
        Alliances.Frey = Frey;
        class Umber {
            constructor(greatLord) {
                this.greatLord = greatLord;
            }
            receiveMessage(message) {
            }
            sendMessage(message) {
                this.greatLord.routeMessage(message);
            }
        }
        Alliances.Umber = Umber;
    })(Alliances = Westeros.Alliances || (Westeros.Alliances = {}));
})(Westeros || (Westeros = {}));
