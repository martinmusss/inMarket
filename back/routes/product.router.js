const router = require('express').Router();
const productController = require('../controllers/product-controller');

router.route('/:categoryName').get(productController.getCategory);

router.route('/:categoryName/subcategories/:subCategoryId').get(productController.getProducts);

module.exports = router;
