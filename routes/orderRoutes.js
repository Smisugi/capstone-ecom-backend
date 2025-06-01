const express  = require('express');
const router = express.Router();
const { placeOrder, getOrder } = require('../controllers/orderController');

router.post('/', placeOrder);
router.get('/', getOrder); //later add orderID into route

module.exports = router;