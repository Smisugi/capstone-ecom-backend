const getCart = (req, res) => {
    res.json([{ productId: 1, name: "Product Name", quantity: 1}]); //placeholder value
}

const addToCart = (req, res) => {
    res.json({ message: 'Added to cart'});
}

const removeFromCart = (req, res) => {
    res.json({ message: 'Removed from cart'});
}

const clearCart = (req, res) => {
    res.json({ message: 'Cleared cart'});
}

module.exports = {
    getCart,
    addToCart,
    removeFromCart,
    clearCart
}