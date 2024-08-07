const staging = require('./staging.json')
const dev = require('./dev.json')
const local = require('./local.json')

exports.getEnv = function (envSelected) {
	let environmentList = {
		staging: staging,
		dev: dev,
		local: local,
	}
	return environmentList[envSelected] || environmentList.staging
}
