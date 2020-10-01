const session = require('express').Router();
const { auth } = require('../middlewares/auth');
const sessionController = require('../controllers/session');
const { sessionStoreValidator } = require('../middlewares/validators');

session.route('/').post(sessionStoreValidator, sessionController.store, auth);

module.exports = session;
