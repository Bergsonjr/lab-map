const category = require('express').Router();
const { ensureAuth } = require('../middlewares/auth');
const categoryController = require('../controllers/category');
const { categoryStoreValidator, categoryPutValidator } = require('../middlewares/validators');

category.route('/').post(ensureAuth, categoryStoreValidator, categoryController.store);

category
    .route('/:id')
    .get(ensureAuth, categoryController.index)
    .put(ensureAuth, categoryPutValidator, categoryController.update)
    .delete(ensureAuth, categoryController.delete);

module.exports = category;
