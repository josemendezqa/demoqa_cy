/// <reference types="Cypress" />

import StatusCodeValidator from '../../../helpers/status-code-validator'
import { UsersApiHelper } from '../helpers/users-api-helpers'

const validator = new StatusCodeValidator()
const usersApiHelper = new UsersApiHelper()


describe('Users API Test Suite', () => {

    it('Should create a new user', () => {
        usersApiHelper.createUser().then((createUserResponse) => {
            console.log(createUserResponse)
            validator.http201Validations(createUserResponse)            
        })
    })

    
    it('Should retrieve users', {}, () => {
        usersApiHelper.getUsers().then((getUsersResponse)=> {
            console.log(getUsersResponse)
            validator.http200Validations(getUsersResponse)     
    })
    })
})
