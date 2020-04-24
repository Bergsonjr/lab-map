const equipment = require('express').Router();
const statusController = require('../controllers/status');
const { statusStoreValidator, statusPutValidator } = require('../middlewares/validators');

equipment.route('/status').post(statusStoreValidator, statusController.store);

equipment.route('status/:id').get(statusController.index).put(statusPutValidator, statusController.update).delete(statusController.delete);

module.exports = equipment;
