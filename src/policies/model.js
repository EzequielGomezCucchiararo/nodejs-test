const _ = require('lodash');
const axios = require('axios');

const {
	env: {
		POLICIES_URL
	}
} = process;

module.exports = class Policy {
	static fetchAll() {
		return axios.get(POLICIES_URL).then(response => response.data.policies);
	}

	static getById(id) {
		return this.fetchAll().then(policies => {
			const policy = _.find(policies, policy => policy.id === id);
			return policy;
		});
	}

	static getByClientId(id) {
		return this.fetchAll().then(policies => {
			const policy = _.find(policies, policy => policy.clientId === id);
			return policy;
		});
	}
}