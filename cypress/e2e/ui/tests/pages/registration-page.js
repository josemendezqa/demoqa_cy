import { ButtonComponent } from "../../components/button-component";
import { InputComponent } from "../../components/input-component";

export class RegistrationPage {
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

	registerNewUser(firstName, lastName, userName, password){
		this.firstNameInput.type(firstName)
		this.lastNameInput.type(lastName)
		this.userNameInput.type(userName)
		this.passwordInput.type(password)
		cy.wait(30000)
		this.registerButton.click()
	}	
}
