const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const routes = require("./routes");
const userRoutes = require("./routes/userRoutes");

// Express
const app = express();

// App Use
app.use(cors());
app.use(express.json());

// Routes
app.use(routes);

// User Routes
app.use("/api/users", userRoutes);


// Erro de rotas
app.use((req, res, next) => {
  res.status(404).json({ message: "Rota não encontrada" });
});

// Middleware de erro geral
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Erro interno do servidor" });
});

module.exports = app;