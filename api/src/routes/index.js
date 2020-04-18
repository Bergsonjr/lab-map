const router = require('express').Router();
const register = require('./register');
const session = require('./session');

router.use('/register', register);
router.use('/session', session);

module.exports = (server) => server.use('/', router);
