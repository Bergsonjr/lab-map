const lend = require('express').Router();
const lendController = require('../controllers/lend');
const { lendStoreValidator, lendPutValidator } = require('../middlewares/validators');

lend.route('/lend').post(lendStoreValidator, lendController.store).get(lendController.show);

lend.route('lend/:id').get(lendController.index).put(lendPutValidator, lendController.update).delete(lendController.delete);

module.exports = lend;
