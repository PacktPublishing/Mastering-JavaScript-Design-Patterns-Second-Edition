var Westeros;
(function (Westeros) {
    var Ruler = (function () {
        function Ruler() {
            this.house = new Westeros.Houses.Targaryen();
        }
        return Ruler;
    })();
    Westeros.Ruler = Ruler;
})(Westeros || (Westeros = {}));

var Westeros;
(function (Westeros) {
    (function (Houses) {
        var Targaryen = (function () {
            function Targaryen() {
            }
            return Targaryen;
        })();
        Houses.Targaryen = Targaryen;
    })(Westeros.Houses || (Westeros.Houses = {}));
    var Houses = Westeros.Houses;
})(Westeros || (Westeros = {}));
