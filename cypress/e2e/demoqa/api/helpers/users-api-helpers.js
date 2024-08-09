export class UsersApiHelper {
    createUserByAPI(){
        const requestBody = 
            {
              "userName": "jmSwagger",
              "password": "String123!"
            }
        return cy.postRequest("Account/v1/User", requestBody).as('createUser')
    }
}
