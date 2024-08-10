import { ButtonComponent } from "../../components/button-component";
import { InputComponent } from "../../components/input-component";
import { LabelComponent } from "../../components/label-component";
import { LoginPageLocators } from "./locators/login-page-locators";

export class LoginPage {
	constructor() {
		this.userNameInput = new InputComponent(
			LoginPageLocators.USERNAME_INPUT)
		this.passwordInput = new InputComponent(
			LoginPageLocators.PASSWORD_INPUT
		)
		this.loginButton = new ButtonComponent(
			LoginPageLocators.LOGIN_BUTTON
		)
		this.newUserButton = new ButtonComponent(
			LoginPageLocators.NEW_USER_BUTTON
		)
		this.invalidCredentialsLabel = new LabelComponent(
			LoginPageLocators.INVALID_CREDENTIALS_LABEL
		)	
	}

	login(username, password){
		this.userNameInput.type(username)
		this.passwordInput.type(password)
		this.loginButton.click()
	}

	navigateToRegister(){
		this.newUserButton.click()
	}

	validateErrorMessageIsDisplayed(expectedErrorMessage){
		this.invalidCredentialsLabel.isDisplayed()
	}
	
}
