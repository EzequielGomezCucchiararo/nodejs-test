const _ = require('lodash');
const Policy = require('./model');
const Client = require('../clients/model')

exports.browsePolicesByClientName = async (req, res) => {
	const { userName } = req.params;
	const promises = [
		Policy.fetchAll(),
		Client.getByName(userName)
	];
	const [policies, clients] = await Promise.all(promises);

	data = _.intersectionWith(policies, clients, (policy, client) => {
		return policy.clientId === client.id;
	});

	res.send(data);
}