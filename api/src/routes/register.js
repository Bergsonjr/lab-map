const register = require('express').Router();
const registerController = require('../controllers/register');
const { registerStoreValidator, registerPutValidator } = require('../middlewares/validators');

register.route('/').post(registerStoreValidator, registerController.store);

register.route('/:id').get(registerController.index).put(registerPutValidator, registerController.update).delete(registerController.delete);

module.exports = register;
