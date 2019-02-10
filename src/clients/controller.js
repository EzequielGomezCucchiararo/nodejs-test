const Client = require('./model');
const Policy = require('../policies/model');

exports.getClientById = async (req, res) => {
	const {	id } = req.params;
	const client = await Client.findOne({ id });

	res.send(client);
};

exports.getClientByPolicyId = async (req, res) => {
	const {	policyId } = req.params;
	const policy = await Policy.getById(policyId);
	const client = await Client.findOne({ id: policy.clientId});

	res.send(client);
}

exports.browseClientsByName = async (req, res) => {
	const {	query } = req.params;
	const clients = await Client.getByName(query);

	res.send(clients);
}
