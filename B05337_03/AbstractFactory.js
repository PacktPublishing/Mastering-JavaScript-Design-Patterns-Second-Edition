var Westeros;
(function (Westeros) {
    (function (Ruling) {
        (function (Lannister) {
            var KingJoffery = (function () {
                function KingJoffery() {
                }
                KingJoffery.prototype.makeDecision = function () {
                    console.log("Decision made by King Joffery");
                };
                KingJoffery.prototype.marry = function () {
                };
                return KingJoffery;
            })();
            Lannister.KingJoffery = KingJoffery;

            var LordTywin = (function () {
                function LordTywin() {
                }
                LordTywin.prototype.makeDecision = function () {
                    console.log("Decision made by Lord Tywin");
                };
                return LordTywin;
            })();
            Lannister.LordTywin = LordTywin;

            var LannisterFactory = (function () {
                function LannisterFactory() {
                }
                LannisterFactory.prototype.getKing = function () {
                    return new KingJoffery();
                };
                LannisterFactory.prototype.getHandOfTheKing = function () {
                    return new LordTywin();
                };
                return LannisterFactory;
            })();
            Lannister.LannisterFactory = LannisterFactory;
        })(Ruling.Lannister || (Ruling.Lannister = {}));
        var Lannister = Ruling.Lannister;
    })(Westeros.Ruling || (Westeros.Ruling = {}));
    var Ruling = Westeros.Ruling;
})(Westeros || (Westeros = {}));

var Westeros;
(function (Westeros) {
    (function (Ruling) {
        (function (Targaryen) {
            var KingAerys = (function () {
                function KingAerys() {
                }
                KingAerys.prototype.makeDecision = function () {
                    console.log("Decision made by King Aerys");
                };
                KingAerys.prototype.marry = function () {
                };
                return KingAerys;
            })();
            Targaryen.KingAerys = KingAerys;

            var LordConnington = (function () {
                function LordConnington() {
                }
                LordConnington.prototype.makeDecision = function () {
                    console.log("Decision made by Lord Connington");
                };
                return LordConnington;
            })();
            Targaryen.LordConnington = LordConnington;

            var TargaryenFactory = (function () {
                function TargaryenFactory() {
                }
                TargaryenFactory.prototype.getKing = function () {
                    return new KingAerys();
                };
                TargaryenFactory.prototype.getHandOfTheKing = function () {
                    return new LordConnington();
                };
                return TargaryenFactory;
            })();
            Targaryen.TargaryenFactory = TargaryenFactory;
        })(Ruling.Targaryen || (Ruling.Targaryen = {}));
        var Targaryen = Ruling.Targaryen;
    })(Westeros.Ruling || (Westeros.Ruling = {}));
    var Ruling = Westeros.Ruling;
})(Westeros || (Westeros = {}));

var Westeros;
(function (Westeros) {
    (function (Ruling) {
        var CourtSession = (function () {
            function CourtSession(abstractFactory) {
                this.abstractFactory = abstractFactory;
                this.COMPLAINT_THRESHOLD = 10;
            }
            CourtSession.prototype.complaintPresented = function (complaint) {
                if (complaint.severity < this.COMPLAINT_THRESHOLD) {
                    this.abstractFactory.getHandOfTheKing().makeDecision();
                } else
                    this.abstractFactory.getKing().makeDecision();
            };
            return CourtSession;
        })();
        Ruling.CourtSession = CourtSession;
    })(Westeros.Ruling || (Westeros.Ruling = {}));
    var Ruling = Westeros.Ruling;
})(Westeros || (Westeros = {}));

var courtSession1 = new Westeros.Ruling.CourtSession(new Westeros.Ruling.Targaryen.TargaryenFactory());
courtSession1.complaintPresented({ severity: 8 });
courtSession1.complaintPresented({ severity: 12 });

var courtSession2 = new Westeros.Ruling.CourtSession(new Westeros.Ruling.Lannister.LannisterFactory());
courtSession2.complaintPresented({ severity: 8 });
courtSession2.complaintPresented({ severity: 12 });
