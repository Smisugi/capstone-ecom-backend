const express  = require('express');
const router = express.Router();
const { getProducts, getProductId } = require('../controllers/productController');

router.get('/', getProducts);
router.get('/:id', getProductId);
module.exports = router;