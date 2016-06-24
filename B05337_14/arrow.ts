module Pages{
	export class LoginPage{
		constructor(container: JQuery) {
		    container.on("click", ".login-link", (item) => {
		    	this.login();
		    });
		    container.on("click", ".login-link", function(item)  {
				this.login();
		    });
		}

		login(){
			console.log("logged in");
		}
	}
}