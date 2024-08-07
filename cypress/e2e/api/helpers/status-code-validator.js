export default class StatusCodeValidator {
	http200Validations(httpResponse) {
		expect(httpResponse.status).to.eq(200)
		expect(httpResponse.isOkStatusCode).to.eq(true)
		expect(httpResponse.statusText).to.eq('OK')
	}

	http201Validations(httpResponse) {
		expect(httpResponse.status).to.eq(201)
		expect(httpResponse.isOkStatusCode).to.eq(true)
		expect(httpResponse.statusText).to.eq('Created')
	}
}
