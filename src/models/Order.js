const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/sequelize");

const Order = sequelize.define(
    "Order",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        customerName: {
            type: DataTypes.STRING(100),
            allowNull: false,
            field: "customer_name",
        },
        total: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        shippingPrice: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "shipping_price",
        },
    },
    {
        tableName: "orders",
        timestamps: false,
    }
);

module.exports = {
    Order,
};