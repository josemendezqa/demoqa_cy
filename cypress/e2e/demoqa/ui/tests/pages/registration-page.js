import { ButtonComponent } from "../../components/button-component";
import { InputComponent } from "../../components/input-component";
import { LabelComponent } from "../../components/label-component";
import { RegistrationPageLocators } from "./locators/registration-page-locators";

export class RegistrationPage {
	constructor() {
		this.firstNameInput = new InputComponent(
			RegistrationPageLocators.FIRSTNAME_INPUT
		)
		this.lastNameInput = new InputComponent(
			RegistrationPageLocators.LASTNAME_INPUT
		)
		this.userNameInput = new InputComponent(
			RegistrationPageLocators.USERNAME_INPUT
		)
		this.passwordInput = new InputComponent(
			RegistrationPageLocators.PASSWORD_INPUT
		)
		this.registerButton = new ButtonComponent(
			RegistrationPageLocators.REGISTER_BUTTON
		)
		this.passwordErrorLabel = new LabelComponent(
			RegistrationPageLocators.ERROR_LABEL
		)	
	}

	registerNewUser({firstName, lastName, userName, password}){
		this.firstNameInput.type(firstName)
		this.lastNameInput.type(lastName)
		this.userNameInput.type(userName)
		this.passwordInput.type(password)
		cy.wait(10000)
		this.registerButton.click()
	}	

	validateIncorrectRegistrationData(expectedErrorMessage){
		this.passwordErrorLabel.containsText(
			expectedErrorMessage)		
	}

	validateRegistrationAlert(){
		cy.on('window:alert', (text) => {
			expect(text).to.contains('User Register Successfully.')
		});
	}
}
