//Requires
require('./models/Assossiations');

// Constantes
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const {
    Adress,
    User,
    EventDate,
    Order,
    LegalEntity,
    Address,
    PaymentMethod,
    Service,
    Store,
    People
} = require("./models/Assossiations");
const routes = require("./routes");

// Express
const app = express();

// Sequelize Sync Config
sequelize.sync({
    force: true,
    alter: true,
}).then(() => {
    console.log("Tabelas sincronizadas");
}).catch((error) => {
    console.error("Erro ao sincronizar tabelas:", error);
});

// App Use
app.use(cors());
app.use(express.json());

// Routes
app.use(routes);


app.get("/", (req, res) => {
    res.json({message: "Olá, mundo!"});
});

// Erro de rotas
app.use((req, res, next) => {
    res.status(404).json({message: "Rota não encontrada"});
});

// Middleware de erro geral
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({message: "Erro interno do servidor"});
});

module.exports = app;