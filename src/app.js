const express = require("express");


const { productRoutes } = require("./routes/productRoutes"); 
const { orderRoutes } = require("./routes/orderRoutes");

function createApp() {
  const app = express();

  app.use(express.json());


  app.get("/health", (req, res) => {
    res.json({
      status: "ok",
      version: process.env.APP_VERSION || "dev",
    });
  });

  app.use("/products", productRoutes);
  app.use("/orders", orderRoutes);

  return app;
}

module.exports = {
  createApp,
};