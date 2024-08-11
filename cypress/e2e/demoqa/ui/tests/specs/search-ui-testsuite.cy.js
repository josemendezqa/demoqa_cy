/// <reference types ="Cypress"/>

import { StorePage } from "../pages/store-page"
import bookData from "../../../../../fixtures/ui/books/booksData.json"

const environmentConfig = require('../../../../../../config/environment-handler').getEnv(Cypress.env('envSelected'));

const storePage = new StorePage()

describe('Search Test Suite', () => {
	beforeEach(() => {
		cy.clearAllCookies()
		cy.clearLocalStorage()
		cy.visit(`${environmentConfig.url}/books`)
	})

	const searchCriteria = [
		{ type: 'Title', value: bookData.title },
		{ type: 'Author', value: bookData.author },
		{ type: 'Publisher', value: bookData.publisher }
	]

	searchCriteria.forEach((criteria)=>{
		it(`should search by ${criteria.type}`, () => {		
			storePage.runSearch(criteria.value)
			storePage.validateSearchResult(criteria.value)
		})
	})
	
	it('should show no results message for a nonexistent search term', () => {
        storePage.runSearch("Inexistent")
		storePage.validateSearchResult("No rows found")
    })
})
