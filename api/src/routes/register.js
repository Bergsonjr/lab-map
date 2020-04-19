const register = require('express').Router();
const registerController = require('../controllers/register');
const { registerIndexValidator, registerStoreValidator, registerPutValidator, registerDeleteValidator } = require('../middlewares/validators');

register.route('/').post(registerStoreValidator, registerController.store);

register
    .route('/:id')
    .get(registerIndexValidator, registerController.index)
    .put(registerPutValidator, registerController.update)
    .delete(registerDeleteValidator, registerController.delete);

module.exports = register;
