const axios = require("axios");
require("dotenv").config();

async function getShippingPrice(countryCode) {
    const baseUrl = process.env.SHIPPING_API_BASE_URL;

    const response = await axios.get(`${baseUrl}/price/${countryCode}`);

    return response.data.price;
}

module.exports = {
    getShippingPrice,
};