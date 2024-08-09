/// <reference types ="Cypress"/>

import { RegistrationPage } from "../pages/registration-page"
import { StorePage } from "../pages/store-page"
import { LoginPage } from "../pages/login-page"
import userData from '../../../../../fixtures/ui/users/userData.json'

const environmentConfig = require('../../../../../../config/environment-handler').getEnv(Cypress.env('envSelected'));

const storePage = new StorePage()
const loginPage = new LoginPage()
const registrationPage = new RegistrationPage()

describe('Registration Test Suite', () => {
	beforeEach(() => {
		cy.clearAllCookies()
		cy.clearLocalStorage()
        cy.visit(`${environmentConfig.url}/books`)
	})

    const registerUser = (user) => {
		storePage.navigateToLogin()
        loginPage.navigateToRegister()
        registrationPage.registerNewUser(user)
	}

	it('should successfully register a new user', () => {        
        registerUser(userData)
	})	

	it('should validate invalid registration data', () => {
        const invalidUser = {...userData, password: '123 123'}
        registerUser(invalidUser)
        registrationPage.validateIncorrectRegistrationData()
	})	
})
