import { UsersEndpointsConstants } from "../constants/users-endpoints-constants";
import createUserRequestBody from '../../../../../fixtures/api/users/requestsBody/user-create-body.json'

export class UsersApiHelper {
    createUser(){
        const requestBody = createUserRequestBody        
        return cy.postRequest(UsersEndpointsConstants.POST_USER, requestBody).as('createUser')
    }

	getUsers() {
		return cy.getRequest('users').as('getBoardById')
	}

}
