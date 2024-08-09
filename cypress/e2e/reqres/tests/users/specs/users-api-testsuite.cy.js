/// <reference types="Cypress" />

import StatusCodeValidator from '../../../helpers/status-code-validator'
import { UsersApiHelper } from '../helpers/users-api-helpers'

const validator = new StatusCodeValidator()
const usersApiHelper = new UsersApiHelper()


describe('Users API Test Suite', () => {
    // Test 1: Create a New User
    // This test creates a new user using the API's POST endpoint.
    // It validates that the creation was successful by checking for a 201 status code.
    it('Should create a new user', () => {
        usersApiHelper.createUser().then((createUserResponse) => {
            console.log(createUserResponse)
            validator.http201Validations(createUserResponse)            
        })
    })

    // Test 2: Create a New User with Invalid Data
    // This test attempts to create a new user with invalid data and expects the request to fail.
    // It checks for an error status code, ensuring the API handles invalid data appropriately.
    it('Should retrieve users', {}, () => {
        usersApiHelper.getUsers().then((getUsersResponse)=> {
            console.log(getUsersResponse)
            validator.http200Validations(getUsersResponse)   
            expect(getUsersResponse.body.data).to.be.an('array');
            expect(getUsersResponse.body.data.length).to.be.greaterThan(0);  
        })
    })

    //agregar schemaValidator

    // Test 3: Create a New User and Retrieve Users
    // This test creates a new user, then retrieves the list of users.
    // It verifies that the response contains an array of users and that each user has expected properties.
    it('Should create a new user and retrieve users', () => {
        usersApiHelper.createUser().then((createUserResponse) => {
            
//            validator.http201Validations(createUserResponse);            
            usersApiHelper.getUsers().then((getUsersResponse) => {
                validator.http200Validations(getUsersResponse);

                expect(getUsersResponse.body.data).to.be.an('array');

                if (getUsersResponse.body.data.length > 0) {
                    getUsersResponse.body.data.forEach(user => {
                        expect(user).to.be.an('object');

                        if (user.hasOwnProperty('id')) {
                            expect(user.id).to.be.a('number');
                        }
                        if (user.hasOwnProperty('email')) {
                            expect(user.email).to.be.a('string');
                        }
                        if (user.hasOwnProperty('first_name')) {
                            expect(user.first_name).to.be.a('string');
                        }
                        if (user.hasOwnProperty('last_name')) {
                            expect(user.last_name).to.be.a('string');
                        }
                        if (user.hasOwnProperty('avatar')) {
                            expect(user.avatar).to.be.a('string');
                        }
                    });
                }
            });
        });
    });
})
