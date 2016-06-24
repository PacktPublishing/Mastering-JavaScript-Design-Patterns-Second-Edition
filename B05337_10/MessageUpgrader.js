var Login;
(function (Login) {
    class CreateUserv1Message {
    }
    Login.CreateUserv1Message = CreateUserv1Message;
    class CreateUserv2Message {
    }
    Login.CreateUserv2Message = CreateUserv2Message;
    class CreateUserv1tov2Upgrader {
        constructor(bus) {
            this.bus = bus;
        }
        processMessage(message) {
            message.__messageName = "CreateUserv1Message";
            delete message.UserTitle;
            this.bus.publish(message);
        }
    }
    Login.CreateUserv1tov2Upgrader = CreateUserv1tov2Upgrader;
})(Login || (Login = {}));
