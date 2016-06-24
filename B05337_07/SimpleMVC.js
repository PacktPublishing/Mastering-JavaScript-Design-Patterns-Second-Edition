var SimpleMVC;
(function (SimpleMVC) {
    class LoginModel {
    }
    class LoginController {
        constructor(model) {
            this.model = model;
        }
        Login(userName, password, rememberMe) {
            this.model.UserName = userName;
            this.model.Password = password;
            this.model.RememberMe = rememberMe;
            if (this.checkPassword(userName, password))
                this.model.LoginSuccessful;
            else {
                this.model.LoginSuccessful = false;
                this.model.LoginErrorMessage = "Incorrect username or password";
            }
        }
        checkPassword(UserName, Password) { return true; }
    }
})(SimpleMVC || (SimpleMVC = {}));
