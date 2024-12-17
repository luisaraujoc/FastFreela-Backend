const express = require("express");
const PersonController = require("../controllers/personController");

const personRouter = express.Router();

// Routes
personRouter.get("/all", PersonController.getAllPersons); // Returns all persons
personRouter.get("/:id", PersonController.getPersonById); // Returns person by ID
personRouter.post("/", PersonController.createPerson); // Creates a new person
personRouter.put("/:id", PersonController.updatePerson); // Updates a person by ID

module.exports = personRouter;