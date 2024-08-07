/// <reference types ="Cypress"/>

describe('Login Test Suite', () => {
	beforeEach(() => {
		cy.clearAllCookies()
		cy.clearLocalStorage()
	})

	it('should navigate to registration page', () => {
        cy.visit("https://demoqa.com/register")
		cy.url().should('eq','https://demoqa.com/register')
   

        cy.get('#firstname').type('TestName')
        cy.get('#lastname').type('TestLastName')
        cy.get('#userName').type('TestUser')
        cy.get('#password').type('TestPassword')
        cy.wait(20000)
        cy.get('#register').click()
	})	
})
