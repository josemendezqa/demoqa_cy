/// <reference types ="Cypress"/>
import { StorePage } from "../pages/store-page"
import { LoginPage } from "../pages/login-page"
import { ProfilePage } from "../pages/profile-page"
import userData from '../../../../fixtures/ui/users/userData.json'

const storePage = new StorePage()
const loginPage = new LoginPage()
const profilePage = new ProfilePage()

describe('Login Test Suite', () => {
	beforeEach(() => {
		cy.clearAllCookies()
		cy.clearLocalStorage()
        cy.visit("https://demoqa.com/books")

	})

	it.only('should successfully login when valid credentials are entered', () => {   
                storePage.navigateToLogin()
                loginPage.login(userData.userName, userData.password)
                //profilePage.isUserNameValueCorrect(userData.userName)

	})	

        it('should display error when invalid credentials are entered', () => {   
                storePage.navigateToLogin()
                loginPage.login(userData.userName, "wrongPassword!")
                loginPage.invalidCredentialsMessageIsDisplayed()
	})	
})
