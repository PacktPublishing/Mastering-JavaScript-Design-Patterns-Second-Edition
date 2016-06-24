var Westeros;
(function (Westeros) {
    var Mathmatics;
    (function (Mathmatics) {
        class Fibonacci {
            constructor() {
                this.memorizedValues = [];
            }
            NaieveFib(n) {
                if (n == 0)
                    return 0;
                if (n <= 2)
                    return 1;
                return this.NaieveFib(n - 1) + this.NaieveFib(n - 2);
            }
            MemetoFib(n) {
                if (n == 0)
                    return 0;
                if (n <= 2)
                    return 1;
                if (!this.memorizedValues[n])
                    this.memorizedValues[n] = this.MemetoFib(n - 1) + this.MemetoFib(n - 2);
                return this.memorizedValues[n];
            }
        }
        Mathmatics.Fibonacci = Fibonacci;
    })(Mathmatics = Westeros.Mathmatics || (Westeros.Mathmatics = {}));
})(Westeros || (Westeros = {}));
var fib = new Westeros.Mathmatics.Fibonacci();
console.log(fib.MemetoFib(50));
