const _ = require('lodash');
const axios = require('axios');

const {
	env: {
		CLIENTS_URL,
	}
} = process;

module.exports = class Client {
	static fetchAll() {
		return axios.get(CLIENTS_URL)
			.then(response => response.data.clients)
			.catch(err => {
				console.log(err);
			})
	}

	static findOne(params) {
		let field;

		if (params.hasOwnProperty('id')) {
			field = 'id';
		} else if (params.hasOwnProperty('email')) {
			field = 'email';
		}

		return this.fetchAll().then(clients => {
			let client = clients[0];

			if (field) {
				client = _.find(clients, c => c[field] === params[field]);
			}
			return client;
		});
	}

	static getByName(query) {
		return this.fetchAll().then(clients => {
			const matchedClients = _.filter(clients, client => client.name === query);
			return matchedClients;
		});
	}
}