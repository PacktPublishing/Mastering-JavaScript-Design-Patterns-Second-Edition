var Westeros;
(function (Westeros) {
    var Succession;
    (function (Succession) {
        class KingSuccession {
            constructor(inLineForThrone) {
                this.inLineForThrone = inLineForThrone;
                this.pointer = 0;
            }
            next() {
                return this.inLineForThrone[this.pointer++];
            }
        }
        Succession.KingSuccession = KingSuccession;
        class FibonacciIterator {
            constructor() {
                this.previous = 1;
                this.beforePrevious = 1;
            }
            next() {
                var current = this.previous + this.beforePrevious;
                this.beforePrevious = this.previous;
                this.previous = current;
                return current;
            }
        }
        Succession.FibonacciIterator = FibonacciIterator;
    })(Succession = Westeros.Succession || (Westeros.Succession = {}));
})(Westeros || (Westeros = {}));
