const express = require("express");
const AdressController = require("../controllers/adressController");

const adressRouter = express.Router();

// Routes
adressRouter.get("/all", AdressController.getAllAdresses); // Returns all adresses
adressRouter.get("/:id", AdressController.getAdressById); // Returns adress by ID
adressRouter.get("/zipCode/:zipCode", AdressController.getAdressbyZipCode); // Returns adress by zip code
adressRouter.post("/", AdressController.createAdress); // Creates a new adress
adressRouter.put("/:id", AdressController.updateAdress); // Updates an adress by ID

module.exports = adressRouter;