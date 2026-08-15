const { Product } = require("../models");

async function listProducts(req, res) {
    const products = await Product.findAll();

    res.json(products);
}

module.exports = {
    listProducts,
};