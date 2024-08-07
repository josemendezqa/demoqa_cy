/// <reference types ="Cypress"/>

import { RegistrationPage } from "../pages/registration-page"
import { StorePage } from "../pages/store-page"
import { LoginPage } from "../pages/login-page"

const storePage = new StorePage()
const loginPage = new LoginPage()
const registrationPage = new RegistrationPage()

describe('Registration Test Suite', () => {
	beforeEach(() => {
		cy.clearAllCookies()
		cy.clearLocalStorage()
        cy.visit("https://demoqa.com/books")
	})

	it('should navigate to registration page', () => {
        storePage.navigateToLogin()
        loginPage.navigateToRegister()
        registrationPage.registerNewUser("first", "last", 'FL', "123Test!")	
	})	
})
