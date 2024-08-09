/// <reference types ="Cypress"/>

import { StorePage } from "../pages/store-page"
import bookData from "../../../../../fixtures/ui/books/booksData.json"

// Cargar la configuración del entorno
const environmentConfig = require('../../../../../../config/environment-handler').getEnv(Cypress.env('envSelected'));

const storePage = new StorePage()

describe('Search Test Suite', () => {
	beforeEach(() => {
		cy.clearAllCookies()
		cy.clearLocalStorage()
		// Usa la URL desde el archivo de configuración
		cy.visit(`${environmentConfig.url}/books`)
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
