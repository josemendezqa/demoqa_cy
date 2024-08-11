import { LabelComponent } from "../../components/label-component"   
import { ProfilePageLocators } from "./locators/profile-page-locators"

export class ProfilePage {
	constructor() {
		this.userNameValueLabel = new LabelComponent(
			ProfilePageLocators.USER_NAME_VALUE_LABEL)		
	}

	isUserNameValueCorrect(username){
		this.userNameValueLabel.containsText(username)		
	}
}