/// <reference types="Cypress" />

import StatusCodeValidator from '../../../helpers/status-code-validator'
import { UsersApiHelper } from '../helpers/users-api-helpers'
import { validateSchema } from '../../../helpers/schemaValidator'
import getUsersSchema from '../../../../../fixtures/api/users/schemaValidators/get_users_schema.json'
import createUserSchema from '../../../../../fixtures/api/users/schemaValidators/post_user_schema.json'
import getUserDetailsSchema from '../../../../../fixtures/api/users/schemaValidators/get_user_details_schema.json'

const validator = new StatusCodeValidator()
const usersApiHelper = new UsersApiHelper()

describe('Users API Test Suite', () => {

    it('Should create a new user', () => {
        usersApiHelper.createUser().then((createUserResponse) => {
            validator.http201Validations(createUserResponse)

            const isValidSchema = validateSchema(createUserSchema, createUserResponse.body)
            expect(isValidSchema, "Schema validation failed").to.be.true
        })
    })

    // This test fails due to endpoint allowing user creation with invalid data BUG B001
    it('Should reject user creation with invalid data', () => {
        const invalidRequestBody = {}
        usersApiHelper.createUser(invalidRequestBody).then((createUserResponse) => {
            validator.http400Validations(createUserResponse)
        })
    })

    it('Should retrieve all users', () => {
        usersApiHelper.createUser().then(() => {
            usersApiHelper.getUsers().then((getUsersResponse) => {
                validator.http200Validations(getUsersResponse)

                const isValidSchema = validateSchema(getUsersSchema, getUsersResponse.body)
                expect(isValidSchema, "Schema validation failed").to.be.true
            })
        })
    })

    // This test fails due to endpoint not allowing to retrieve data of user just created - BUG B002
    it('Should retrieve details of a specific user', () => {
        usersApiHelper.createUser().then((createResponse) => {
            const userId = createResponse.body.id
            usersApiHelper.getUserById(userId).then((getSpecificUserResponse) => {
                console.log(getSpecificUserResponse)
                validator.http200Validations(getSpecificUserResponse)
                const isValidSchema = validateSchema(getUserDetailsSchema, getSpecificUserResponse.body.data)
                expect(isValidSchema, "Schema validation failed").to.be.true
            })
        })
    })

    it('Should return 404 when trying to retrieve details of a non-existent user ID', () => {
        usersApiHelper.deleteUser(9999).then(() => {
            usersApiHelper.getUserById(9999).then((getResponse) => {
                validator.http404Validations(getResponse)
                expect(getResponse.status).to.eq(404)
            })
        })
    })
})
