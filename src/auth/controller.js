const Auth = require('./model');

exports.goToLoginPage = (req, res) => {
	res.send('You are now on the login page!\n');
};

exports.goToSignupPage = (req, res) => {
	res.send('You are now on the signup page!\n');
}

exports.login = async (req, res) => {
	const { email } = req.body;
	const user = await Auth.login({ email });

	if (user) {
		req.session.isLoggedIn = true;
		req.session.user = user;
		return req.session.save(err => {
			res.send('You are logged in!');
		});
	} else {
		res.redirect('/auth/signup');
	}
}

exports.logout = (req, res) => {
	req.session.destroy(err => {
		res.send('See you soon!');
	});
}