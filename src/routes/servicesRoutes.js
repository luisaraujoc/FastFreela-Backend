const express = require("express");
const ServicesController = require("../controllers/servicesControllers");

const servicesRouter = express.Router();

// Routes
servicesRouter.get("/all", ServicesController.getAllServices); // Returns all services
servicesRouter.get("/:id", ServicesController.getServiceById); // Returns service by ID
servicesRouter.post("/", ServicesController.createService); // Creates a new service
servicesRouter.put("/:id", ServicesController.updateService); // Updates a service by ID

module.exports = servicesRouter;