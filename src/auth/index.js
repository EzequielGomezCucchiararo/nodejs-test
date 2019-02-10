const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.get('/login', controller.goToLoginPage);
router.get('/signup', controller.goToSignupPage);
router.post('/login', controller.login);
router.post('/logout', controller.logout);

module.exports = router;