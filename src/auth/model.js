const Client = require('../clients/model');

module.exports = class Auth {
	static async login(credentials) {
		const user = await Client.findOne({ email: credentials.email });
	
		return user;
	}
};