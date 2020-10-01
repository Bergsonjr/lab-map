const lend = require('express').Router();
const { ensureAuth } = require('../middlewares/auth');
const lendController = require('../controllers/lend');
const { lendStoreValidator, lendPutValidator } = require('../middlewares/validators');

lend.route('/lend').post(ensureAuth, lendStoreValidator, lendController.store).get(ensureAuth, lendController.show);

lend.route('lend/:id').get(ensureAuth, lendController.index).put(ensureAuth, lendPutValidator, lendController.update).delete(ensureAuth, lendController.delete);

module.exports = lend;
