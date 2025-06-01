const express  = require('express');
const router = express.Router();
const { getCart, addToCart, removeFromCart, clearCart } = require('../controllers/cartController');

router.get('/', getCart);
router.post('/', addToCart);
router.post('/', removeFromCart);
router.post('/', clearCart);

module.exports = router;