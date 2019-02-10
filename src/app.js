
require('dotenv').config();

const express = require('express');
const uuid = require('uuid/v4');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const bodyParser = require('body-parser');

const {
	env: {
		SECRET,
		PORT
	}
} = process;

// Routes
const authRoutes = require('./auth');
const clientsRoutes = require('./clients');
const policiesRoutes = require('./policies');

// Middlewares
const isAuth = require('./auth/isAuth.middleware')
const isAdmin = require('./auth/isAdmin.middleware')

// Error handler
const errorController = require('./errors')

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
	res.send('Homepage!');
});

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(bodyParser.json());

app.use(session({
	genid: () => uuid(),
	secret: SECRET,
	resave: false,
	saveUninitialized: true,
	store: new FileStore(),
}));

app.use('/auth', authRoutes);
app.use('/clients', isAuth, clientsRoutes);
app.use('/policies', isAuth, isAdmin, policiesRoutes);
app.use(errorController.error404);

app.use(router);

app.listen(PORT, function () {
	console.log('Example app listening on port 3000!');
});
