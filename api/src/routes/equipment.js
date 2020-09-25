const equipment = require('express').Router();
const equipmentController = require('../controllers/equipment');
const { equipmentStoreValidator, equipmentPutValidator } = require('../middlewares/validators');

equipment.route('/equipment').post(equipmentStoreValidator, equipmentController.store);

equipment.route('equipment/:id').get(equipmentController.index).put(equipmentPutValidator, equipmentController.update).delete(equipmentController.delete);

module.exports = equipment;
