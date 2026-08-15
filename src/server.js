require("dotenv").config();

const { createApp } = require("./app");
const { sequelize } = require("./db/sequelize");

async function main() {
    await sequelize.authenticate();

    const app = createApp();
    const port = Number(process.env.PORT || 3000);

    app.listen(port, () => {
        console.log(`Webshop API listening on port ${port}`);
    });
}

main().catch((err) => {
    console.error("Application startup failed:", err);
    process.exit(1);
});