const register = require('express').Router();
const { ensureAuth } = require('../middlewares/auth');
const registerController = require('../controllers/register');
const { registerStoreValidator, registerPutValidator } = require('../middlewares/validators');

register.route('/').post(registerStoreValidator, registerController.store);

register
    .route('/:id')
    .get(ensureAuth, registerController.index)
    .put(ensureAuth, registerPutValidator, registerController.update)
    .delete(ensureAuth, registerController.delete);

module.exports = register;
