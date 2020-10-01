const equipment = require('express').Router();
const { ensureAuth } = require('../middlewares/auth');
const equipmentController = require('../controllers/equipment');
const { equipmentStoreValidator, equipmentPutValidator } = require('../middlewares/validators');

equipment.route('/equipment').post(ensureAuth, equipmentStoreValidator, equipmentController.store);

equipment
    .route('equipment/:id')
    .get(ensureAuth, equipmentController.index)
    .put(ensureAuth, equipmentPutValidator, equipmentController.update)
    .delete(ensureAuth, equipmentController.delete);

module.exports = equipment;
