/// <reference types ="Cypress"/>
import { StorePage } from "../pages/store-page"
import { LoginPage } from "../pages/login-page"

const storePage = new StorePage()
const loginPage = new LoginPage()

describe('Login Test Suite', () => {
	beforeEach(() => {
		cy.clearAllCookies()
		cy.clearLocalStorage()
        cy.visit("https://demoqa.com/books")

	})

	it('should successfully login when valid credentials are entered', () => {   
        storePage.navigateToLogin()
        loginPage.login("joseqa", "123Test!")

	})	

    it('should display error when invalid credentials are entered', () => {   
        storePage.navigateToLogin()
        loginPage.login("joseqa", "wrongPassword!")
        loginPage.invalidCredentialsMessageIsDisplayed()
	})	
})
