const placeOrder = (req, res) => {
    res.json({ message: 'Placed order'});
}

const getOrder = (req, res) => {
    res.json([{ orderId: 1, items: []}]); //placeholder value
}

module.exports = {
    placeOrder,
    getOrder
}