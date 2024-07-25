const express = require("express");
const router = express.Router();
const productController = require('./product.controller');
const prefix = '/products';

router.get(prefix, productController.getAllProducts);
router.get(`${prefix}/create`, productController.createProduct);
router.get(`${prefix}/detail/:id`, productController.getProductById);
router.post(prefix, productController.createProduct);
router.put(prefix, productController.updateProduct);
router.delete(prefix, productController.deleteProduct);

module.exports = router;