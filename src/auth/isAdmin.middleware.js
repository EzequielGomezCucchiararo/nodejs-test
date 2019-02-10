module.exports = (req, res, next) => {
	if (req.session.user && req.session.user.role === 'admin') {
		next();
	} else {
		return res.send('Only Admins can enter, get out!!');
	}
};