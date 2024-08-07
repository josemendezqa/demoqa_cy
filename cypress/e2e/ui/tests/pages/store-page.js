import { ButtonComponent } from "../../components/button-component";
import { InputComponent } from "../../components/input-component";

export class StorePage {
	constructor() {
		this.searchBox = new InputComponent(
			"#searchBox")
		this.loginButton = new ButtonComponent(
			"#login"
		)
	
	}

	runSearch(criteria){
		this.searchBox.type(criteria)
	}

	navigateToLogin(){
		this.loginButton.click()
	}
	
}
