import { ButtonComponent } from "../../components/button-component";
import { InputComponent } from "../../components/input-component";
import { StorePageLocators } from "./locators/store-page-locators";

export class StorePage {
	constructor() {
		this.searchBox = new InputComponent(
			StorePageLocators.SEARCHBOX_INPUT)
		this.loginButton = new ButtonComponent(
			StorePageLocators.LOGIN_BUTTON
		)	
	}

	runSearch(criteria){
		this.searchBox.type(criteria)
		cy.get('.rt-td').should('contain', criteria);
				//mover validacion a la prueba
	}

	runInexistingSearch(criteria){
		this.searchBox.type(criteria)		
		cy.get('.rt-noData').should('contain', 'No rows found');
		//mover validacion a la prueba
	}

	navigateToLogin(){
		this.loginButton.click()
	}
}
