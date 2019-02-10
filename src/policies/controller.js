const _ = require('lodash');
const Policy = require('./model');
const Client = require('../clients/model')

exports.browsePolicesByClientName = async (req, res) => {
	const { userName } = req.params;
	const promises = [
		Client.getByName(userName),
		Policy.fetchAll()
	];
	const data = await Promise.all(promises);
	const clients = data[0];
	const policies = data[1];

	responseData = _.intersectionWith(policies, clients, (policy, client) => {
		return policy.clientId === client.id;
	});

	res.send(responseData);
}