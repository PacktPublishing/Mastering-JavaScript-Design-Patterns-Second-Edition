var Westeros;
(function (Westeros) {
    var Banking;
    (function (Banking) {
        class NaiveBanking {
            constructor() {
                this.state = "";
                this.balance = 0;
            }
            NextState(action, amount) {
                if (this.state == "overdrawn" && action == "withdraw") {
                    this.state = "on hold";
                }
                if (this.state == "on hold" && action != "deposit") {
                    this.state = "on hold";
                }
                if (this.state == "good standing" && action == "withdraw" && amount <= this.balance) {
                    this.balance -= amount;
                }
                if (this.state == "good standing" && action == "withdraw" && amount > this.balance) {
                    this.balance -= amount;
                    this.state = "overdrawn";
                }
            }
        }
        class BankAccountManager {
            constructor() {
                this.currentState = new GoodStandingState(this);
            }
            Deposit(amount) {
                this.currentState.Deposit(amount);
            }
            Withdraw(amount) {
                this.currentState.Withdraw(amount);
            }
            addToBalance(amount) {
                this.balance += amount;
            }
            getBalance() {
                return this.balance;
            }
            moveToState(newState) {
                this.currentState = newState;
            }
        }
        Banking.BankAccountManager = BankAccountManager;
        class GoodStandingState {
            constructor(manager) {
                this.manager = manager;
            }
            Deposit(amount) {
                this.manager.addToBalance(amount);
            }
            Withdraw(amount) {
                if (this.manager.getBalance() < amount) {
                    this.manager.moveToState(new OverdrawnState(this.manager));
                }
                this.manager.addToBalance(-1 * amount);
            }
        }
        Banking.GoodStandingState = GoodStandingState;
        class OverdrawnState {
            constructor(manager) {
                this.manager = manager;
            }
            Deposit(amount) {
                this.manager.addToBalance(amount);
                if (this.manager.getBalance() > 0) {
                    this.manager.moveToState(new GoodStandingState(this.manager));
                }
            }
            Withdraw(amount) {
                this.manager.moveToState(new OnHold(this.manager));
                throw "Cannot withdraw money from an already overdrawn bank account";
            }
        }
        Banking.OverdrawnState = OverdrawnState;
        class OnHold {
            constructor(manager) {
                this.manager = manager;
            }
            Deposit(amount) {
                this.manager.addToBalance(amount);
                throw "Your account is on hold and you must attend the bank to resolve the issue";
            }
            Withdraw(amount) {
                throw "Your account is on hold and you must attend the bank to resolve the issue";
            }
        }
        Banking.OnHold = OnHold;
    })(Banking = Westeros.Banking || (Westeros.Banking = {}));
})(Westeros || (Westeros = {}));
