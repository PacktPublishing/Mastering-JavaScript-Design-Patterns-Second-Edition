var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function spy(target, key, descriptor) {
    if (descriptor === undefined) {
        descriptor = Object.getOwnPropertyDescriptor(target, key);
    }
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var arguments = args.map(function (a) { return JSON.stringify(a); }).join();
        var result = originalMethod.apply(this, args);
        console.log("Message sent was: " + arguments);
        return result;
    };
    return descriptor;
}
var CrowMessenger = (function () {
    function CrowMessenger() {
    }
    CrowMessenger.prototype.SendMessage = function (message) {
        console.log("Send message is " + message);
    };
    __decorate([
        spy
    ], CrowMessenger.prototype, "SendMessage", null);
    return CrowMessenger;
})();
var c = new CrowMessenger();
var r = c.SendMessage("Attack at dawn");
