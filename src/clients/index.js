const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.get('/:id', controller.getClientById);
router.get('/policy/:policyId', controller.getClientByPolicyId);
router.get('/browse/:query', controller.browseClientsByName);

module.exports = router;