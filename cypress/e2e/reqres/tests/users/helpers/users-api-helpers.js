import { UsersEndpointsConstants } from "../constants/users-endpoints-constants";
import createUserRequestBody from '../../../../../fixtures/api/users/requestsBody/user-create-body.json'

export class UsersApiHelper {
    createUser(requestBody = null) {
        if (!requestBody) {
            requestBody = createUserRequestBody;
        }
        return cy.postRequest(UsersEndpointsConstants.POST_USER, requestBody).as('createUser');
    }

	getUsers() {
		return cy.getRequest('users').as('getBoardById')
	}

    getUserById(userId){
        return cy.getRequest(`users/${userId}`)
    }

    deleteUser(userId) {
        return this.getUserById(userId).then((response) => {
            if (response.status === 200) {
                return cy.deleteRequest(`users/${userId}`).as('deleteUser')
            } else {
                cy.log(`User with ID ${userId} does not exist and cannot be deleted.`)
                return null
            }
        })
    }
}
