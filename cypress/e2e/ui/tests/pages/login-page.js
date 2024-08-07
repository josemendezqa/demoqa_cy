import { ButtonComponent } from "../../components/button-component";
import { InputComponent } from "../../components/input-component";

export class LoginPage {
	constructor() {
		this.firstNameInput = new InputComponent(
			'#firstname'
		)
		this.lastNameInput = new InputComponent(
			'#lastname'
		)
		this.userNameInput = new InputComponent(
			'#userName'
		)
		this.passwordInput = new InputComponent(
			'#password'
		)
		this.registerButton = new ButtonComponent(
			'#register'
		)
	
	}

	registerUser(firstName, lastName, userName, password){
		this.firstNameInput.type(firstName)
		this.lastNameInput.type(lastName)
		this.userNameInput.type(userName)
		this.passwordInput.type(password)
		this.registerButton.click()
	}	
}
