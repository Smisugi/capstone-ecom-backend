const getProducts = (req, res) => {
    res.json([{id: 1, name: "Product Name"}]); //placeholder value
}

const getProductId = (req, res) => {
    const { id } = req.params;
    res.json({id, name: "Product Name"}); //placeholder value
}

module.exports = {
    getProducts,
    getProductId
}