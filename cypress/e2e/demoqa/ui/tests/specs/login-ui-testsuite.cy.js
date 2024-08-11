/// <reference types ="Cypress"/>
import { StorePage } from "../pages/store-page"
import { LoginPage } from "../pages/login-page"
import { ProfilePage } from "../pages/profile-page"
import userData from '../../../../../fixtures/ui/users/userData.json'
import { UsersApiHelper } from "../../../api/helpers/users-api-helpers"

const environmentConfig = require('../../../../../../config/environment-handler').getEnv(Cypress.env('envSelected'))

const storePage = new StorePage()
const loginPage = new LoginPage()
const profilePage = new ProfilePage()
const usersApiHelper = new UsersApiHelper()

describe('Login Test Suite', () => {
	beforeEach(() => {
		cy.clearAllCookies()
		cy.clearLocalStorage()
        cy.visit(`${environmentConfig.url}/books`)
	})

    it('should login with an existing user', () => {
        usersApiHelper.createUserByAPI().then((response) => {            
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('userName')
            expect(response.body).to.have.property('password')    
            cy.wrap(response.body).as('userData')
        })    
        cy.get('@userData').then((userData) => {    
            storePage.navigateToLogin()   
            loginPage.login(userData.userName, userData.password)
            profilePage.isUserNameValueCorrect(userData.userName)
        })
    })

    it('should display error when invalid credentials are entered', () => {   
        storePage.navigateToLogin()
        loginPage.login(userData.userName, "wrongPassword!")
        loginPage.validateErrorMessageIsDisplayed("Invalid username or password!")
    })	

    it('should prevent login when username and password fields are empty', () => {   
        storePage.navigateToLogin()
        loginPage.loginButton.click()
        loginPage.validateErrorHighlightOnEmptyFields()
    })	

})
