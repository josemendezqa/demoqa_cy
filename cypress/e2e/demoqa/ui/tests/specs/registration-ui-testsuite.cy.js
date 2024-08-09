/// <reference types ="Cypress"/>

import { RegistrationPage } from "../pages/registration-page"
import { StorePage } from "../pages/store-page"
import { LoginPage } from "../pages/login-page"
import userData from '../../../../../fixtures/ui/users/userData.json'

// Cargar la configuración del entorno
const environmentConfig = require('../../../../../../config/environment-handler').getEnv(Cypress.env('envSelected'));

const storePage = new StorePage()
const loginPage = new LoginPage()
const registrationPage = new RegistrationPage()

describe('Registration Test Suite', () => {
	beforeEach(() => {
		cy.clearAllCookies()
		cy.clearLocalStorage()
		// Usa la URL desde el archivo de configuración
        cy.visit(`${environmentConfig.url}/books`)
	})

	it('should successfully register a new user', () => {
        storePage.navigateToLogin()
        loginPage.navigateToRegister()
        registrationPage.registerNewUser(
            userData.firstName, 
            userData.lastName, 
            userData.userName, 
            userData.password
        )	
	})	

	it('should validate invalid registration data', () => {
        storePage.navigateToLogin()
        loginPage.navigateToRegister()
        registrationPage.registerNewUser(
            userData.firstName, 
            userData.lastName, 
            userData.userName, 
            '123 123'
        )
		registrationPage.validateIncorrectRegistrationData()
	})	
})
