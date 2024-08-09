/// <reference types ="Cypress"/>
import { StorePage } from "../pages/store-page"
import { LoginPage } from "../pages/login-page"
import { ProfilePage } from "../pages/profile-page"
import userData from '../../../../../fixtures/ui/users/userData.json'
import { UsersApiHelper } from "../../../api/helpers/users-api-helpers"

const storePage = new StorePage()
const loginPage = new LoginPage()
const profilePage = new ProfilePage()
const usersApiHelper = new UsersApiHelper()

describe('Login Test Suite', () => {
	beforeEach(() => {
		cy.clearAllCookies()
		cy.clearLocalStorage()
        cy.visit("https://demoqa.com/books")

	})

        it.only('should create a new USER by API and login by UI', () => {   
                usersApiHelper.createUserByAPI().then((response) => {
                    // Imprime el status y el body de la respuesta para debugging
                    console.log("Status: " + response.status);
                    console.log("Response Body: ", response.body);
            
                    expect(response.status).to.eq(201);
                    expect(response.body).to.have.property('userName');
                    expect(response.body).to.have.property('password');
            
                    cy.wrap(response.body).as('userData');
                });
            
                cy.get('@userData').then((userData) => {
                    storePage.navigateToLogin();
                    loginPage.login(userData.userName, userData.password);                 
                });
            });
            


	it('should successfully login when valid credentials are entered', () => {   
 //             UsersApiHelper.createuser()=?{}
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
