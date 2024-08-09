/// <reference types ="Cypress"/>

import { StorePage } from "../pages/store-page"
import bookData from "../../../../../fixtures/ui/books/booksData.json"

const storePage = new StorePage()

describe('Search Test Suite', () => {
	beforeEach(() => {
		cy.clearAllCookies()
		cy.clearLocalStorage()
		cy.visit("https://demoqa.com/books")
	})

	it('should search by book title', () => {		
        storePage.runSearch(bookData.title)
	})

	it('should search by author name', () => {		
        storePage.runSearch(bookData.author)
	})

	it('should show no results message for a nonexistent search term', () => {
        storePage.runInexistingSearch("Inexistent")
    });	
}) 
