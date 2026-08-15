const { Order } = require("../models");
const { calculateCartTotal } = require("../services/cartService");
const { getShippingPrice } = require("../services/shippingService");

async function createOrder(req, res) {
    try {
        const { customerName, countryCode, items } = req.body;

        if (!customerName || !countryCode || !items) {
            return res.status(400).json({
                error: "Hiányzó rendelési adatok",
            });
        }

        const cartTotal = calculateCartTotal(items);
        const shippingPrice = await getShippingPrice(countryCode);
        const total = cartTotal + shippingPrice;

        const order = await Order.create({
            customerName,
            total,
            shippingPrice,
        });

        res.status(201).json({
            id: order.id,
            customerName: order.customerName,
            total: order.total,
            shippingPrice: order.shippingPrice,
        });
    } catch (err) {
        res.status(400).json({
            error: err.message,
        });
    }
}

module.exports = {
    createOrder,
};