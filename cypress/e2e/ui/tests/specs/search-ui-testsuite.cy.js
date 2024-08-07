/// <reference types ="Cypress"/>

import { StorePage } from "../pages/store-page"

const storePage = new StorePage()

describe('Search Test Suite', () => {
	beforeEach(() => {
		cy.clearAllCookies()
		cy.clearLocalStorage()
	})

	it('should navigate to registration page', () => {
        cy.visit("https://demoqa.com/books")
		
        storePage.runSearch('Git Pocket Guide')
	})

	
})
