/// <reference types="Cypress" />

import { RegistrationPage } from "../pages/registration-page"
import { StorePage } from "../pages/store-page"
import { LoginPage } from "../pages/login-page"
import userData from '../../../../../fixtures/ui/users/userData.json'
import errorMessage from '../../../../../fixtures/ui/users/userCreationErrorMessages.json'
import { UsersApiHelper } from "../../../api/helpers/users-api-helpers"

const environmentConfig = require('../../../../../../config/environment-handler').getEnv(Cypress.env('envSelected'))

const storePage = new StorePage()
const loginPage = new LoginPage()
const registrationPage = new RegistrationPage()
const usersApiHelper = new UsersApiHelper()


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
        registrationPage.validateRegistrationAlert()
    })

    it('should reject already existing user created via API', () => {
        usersApiHelper.createUserByAPI().then((response) => {
            const { userName, password } = response.body
    
            storePage.navigateToLogin()
            loginPage.navigateToRegister()
    
            registrationPage.registerNewUser({
                firstName: userData.firstName,
                lastName: userData.lastName,
                userName,
                password,
            })
    
            registrationPage.validateIncorrectRegistrationData(errorMessage.userAlreadyExistsMessage)
        })
    })
    

    it('should validate invalid registration password', () => {
        const invalidUser = { ...userData, password: '123 123' }
        registerUser(invalidUser)
        registrationPage.validateIncorrectRegistrationData(errorMessage.wrongPasswordMessage)
    })
})
