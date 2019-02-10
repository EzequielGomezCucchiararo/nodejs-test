exports.error404 = (req, res) => {
	res.status(404).send('<h2>Page not found</h2>');
}