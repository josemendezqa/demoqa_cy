export class BaseComponent {
	constructor(locator) {
		this.locator = locator
	}

	locator() {
		return this.locator
	}

	object() {
		return cy.get(this.locator)
	}

	hasText(text) {
		cy.get(this.locator)
			.should('exist')
			.invoke('show')
			.scrollIntoView()
			.should('be.visible')
			.should('have.text', text)
	}

	hasAttribute(attribute, value) {
		cy.get(this.locator)
			.should('exist')
			.invoke('show')
			.scrollIntoView()
			.should('be.visible')
			.should('have.' + attribute, value)
	}

	verifyRegexMatch(regexExpression) {
		cy.get(this.locator).contains(regexExpression)
	}

	doesNotHaveText(text) {
		cy.get(this.locator)
			.should('exist')
			.invoke('show')
			.scrollIntoView()
			.should('be.visible')
			.should('not.have.text', text)
	}

	containsText(text) {
		cy.get(this.locator)
			.should('exist')
			.invoke('show')
			.should('be.visible')
			.should('contain.text', text)
	}

	click() {
		cy.get(this.locator)
			.should('have.length', 1)
			.should('exist')
			.invoke('show')
			.should('be.visible')
			.click({ force: true }, { retries: 2 })
	}

	scroll() {
		cy.get(this.locator)
			.should('have.length', 1)
			.scrollIntoView({ force: true })
		return this
	}

	doubleClick() {
		cy.get(this.locator).dblclick()
	}

	isDisplayed() {
		cy.get(this.locator).scrollIntoView({ force: true }).should('be.visible')
	}

	clickIfContainsText(text) {
		cy.get(this.locator + `:contains(${text})`)
			.should('exist', "Element doesn't exist")
			.invoke('show')
			.click(
				{
					force: true,
				},
				{
					retries: 2,
				},
			)
	}

	isDisabled() {
		cy.get(this.locator).should('have.class', 'disabled')
	}

	isEnabled() {
		cy.get(this.locator).should('not.have.class', 'disabled')
	}
}
