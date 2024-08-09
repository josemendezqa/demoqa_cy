/// <reference types="Cypress" />

import StatusCodeValidator from '../../../helpers/status-code-validator'
import { UsersApiHelper } from '../helpers/users-api-helpers'
import { validateSchema } from '../../../helpers/schemaValidator'
import getUsersSchema from '../../../../../fixtures/api/users/schemaValidators/get_users_schema.json'
import createUserSchema from '../../../../../fixtures/api/users/schemaValidators/post_user_schema.json'


const validator = new StatusCodeValidator()
const usersApiHelper = new UsersApiHelper()


describe('Users API Test Suite', () => {
    
    it.only('Should create a new user', () => {
        usersApiHelper.createUser().then((createUserResponse) => {
            console.log(createUserResponse);
    
            validator.http201Validations(createUserResponse);
    
            const isValidSchema = validateSchema(createUserSchema, createUserResponse.body);
            expect(isValidSchema, "Schema validation failed").to.be.true;    

        });
    });
    
    it('Should retrieve users', () => {
        usersApiHelper.getUsers().then((getUsersResponse) => {
            console.log(getUsersResponse);
    
            validator.http200Validations(getUsersResponse);
    
            const isValidSchema = validateSchema(getUsersSchema, getUsersResponse.body);

            expect(isValidSchema, "Schema validation failed").to.be.true;
            expect(getUsersResponse.body.data).to.be.an('array');
            expect(getUsersResponse.body.data.length).to.be.greaterThan(0);
        });
    });

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
