var Westeros;
(function (Westeros) {
    var History;
    (function (History) {
        class Battle {
            constructor(battleGround, agressor, defender, victor) {
                this.battleGround = battleGround;
                this.agressor = agressor;
                this.defender = defender;
                this.victor = victor;
            }
        }
        History.Battle = Battle;
        class Parser {
            constructor(battleText) {
                this.battleText = battleText;
                this.currentIndex = 0;
                this.battleList = battleText.split("\n");
            }
            nextBattle() {
                if (!this.battleList[0])
                    return null;
                var segments = this.battleList[0].match(/\((.+?)\s?->\s?(.+?)\s?<-\s?(.+?)\s?->\s?(.+)/);
                return new Battle(segments[2], segments[1], segments[3], segments[4]);
            }
        }
        History.Parser = Parser;
    })(History = Westeros.History || (Westeros.History = {}));
})(Westeros || (Westeros = {}));
