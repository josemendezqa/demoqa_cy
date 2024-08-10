import { ButtonComponent } from "../../components/button-component";
import { InputComponent } from "../../components/input-component";
import { LabelComponent } from "../../components/label-component";
import { StorePageLocators } from "./locators/store-page-locators";


export class StorePage {
	constructor() {
		this.searchBox = new InputComponent(
			StorePageLocators.SEARCHBOX_INPUT)
		this.loginButton = new ButtonComponent(
			StorePageLocators.LOGIN_BUTTON
		)	
		this.resultsTable = new LabelComponent(
			StorePageLocators.RESULTS_TABLE
		)
		this.noRowsFoundLabel = new LabelComponent(
			StorePageLocators.NO_ROWS_FOUND_LABEL
		)
	}

	validateSearchResult(expectedResult){
		if (expectedResult === 'No rows found') {
			this.noRowsFoundLabel.containsText(expectedResult);
		} else {
			this.resultsTable.containsText(expectedResult);
		}
	}

	runSearch(criteria){
		this.searchBox.type(criteria)
	}

	navigateToLogin(){
		this.loginButton.click()
	}
}
