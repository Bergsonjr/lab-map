const category = require('express').Router();
const categoryController = require('../controllers/category');
const { categoryStoreValidator, categoryPutValidator } = require('../middlewares/validators');

category.route('/').post(categoryStoreValidator, categoryController.store);

category.route('/:id').get(categoryController.index).put(categoryPutValidator, categoryController.update).delete(categoryController.delete);

module.exports = category;
