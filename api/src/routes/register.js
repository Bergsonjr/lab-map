const register = require('express').Router();
const registerController = require('../controllers/register');
const { incidentIndexValidator, incidentStoreValidator, registerPutValidator, registerDeleteValidator } = require('../middlewares/validators');

register
    .route('/')
    .get(registerIndexValidator, registerController.index)
    .post(registerStoreValidator, registerController.store)
    .put(registerPutValidator, registerController.update)
    .delete(registerDeleteValidator, registerController.delete);

module.exports = register;
