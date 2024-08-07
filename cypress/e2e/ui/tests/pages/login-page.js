import { ButtonComponent } from "../../components/button-component";
import { InputComponent } from "../../components/input-component";
import { LabelComponent } from "../../components/label-component";

export class LoginPage {
	constructor() {
		this.userNameInput = new InputComponent(
			'#userName')
		this.passwordInput = new InputComponent(
			'#password'
		)
		this.loginButton = new ButtonComponent(
			'#login'
		)
		this.newUserButton = new ButtonComponent(
			'#newUser'
		)
		this.invalidCredentialsLabel = new LabelComponent(
			'#name'
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

	invalidCredentialsMessageIsDisplayed(){
		this.invalidCredentialsLabel.isDisplayed()
	}
	
}
