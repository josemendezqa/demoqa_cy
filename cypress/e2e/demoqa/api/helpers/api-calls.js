/// <reference types="Cypress" />
const baseUrl = 'https://demoqa.com'

export default class ApiCalls {
	#sendRequest(requestData) {
        const url = `${baseUrl}/${requestData.endpoint}`

		return cy
			.request({
				method: requestData.apiRequestType,
				url: url,
				failOnStatusCode: false,
				body: requestData.body,
				headers: {},
			})
			.as(requestData.alias)
	}

	get(endpoint) {
		return this.#sendRequest({
			apiRequestType: 'GET',
			endpoint: endpoint,
			body: null,
			alias: 'getReponse',
		})
	}

	post(endpoint, body) {
		return this.#sendRequest({
			apiRequestType: 'POST',
			endpoint: endpoint,
			body: body,
			alias: 'postReponse',
		})
	}

	put(endpoint, body) {
		return this.#sendRequest({
			apiRequestType: 'PUT',
			endpoint: endpoint,
			body: body,
			alias: 'putReponse',
		})
	}

	delete(endpoint) {
		return this.#sendRequest({
			apiRequestType: 'DELETE',
			endpoint: endpoint,
			body: null,
			alias: 'deleteReponse',
		})
	}
}
