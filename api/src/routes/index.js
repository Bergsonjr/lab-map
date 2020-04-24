const router = require('express').Router();
const equipment = require('./equipment');
const register = require('./register');
const category = require('./category');
const session = require('./session');

router.use('/equipment', equipment);
router.use('/register', register);
router.use('/category', category);
router.use('/session', session);

module.exports = (server) => server.use('/', router);
