require("dotenv").config();

const { createApp } = require("./app");
const { sequelize } = require("./db/sequelize");

const { Product, Order } = require("./models"); 

async function main() {
    await sequelize.authenticate();

    await sequelize.sync({ alter: true });

    const productCount = await Product.count();
    if (productCount === 0) {
        await Product.bulkCreate([
            { name: "Prémium Gamer Laptop", price: 450000, stock: 5 },
            { name: "Mechanikus Billentyűzet", price: 35000, stock: 12 },
            { name: "Vezeték nélküli Egér", price: 15000, stock: 20 }
        ]);
        console.log("Teszt termékek sikeresen feltöltve az adatbázisba!");
    }


    const app = createApp();
    const port = Number(process.env.PORT || 8080); 

    app.listen(port, () => {
        console.log(`Webshop API listening on port ${port}`);
    });
}

main().catch((err) => {
    console.error("Application startup failed:", err);
    process.exit(1);
});