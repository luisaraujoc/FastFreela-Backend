const express = require("express");
const StoreController = require("../controllers/storeController");

const storeRouter = express.Router();

storeRouter.get("/all", StoreController.getAllStores);
storeRouter.get("/:id", StoreController.getStoreById);
storeRouter.post("/", StoreController.createStore);
storeRouter.delete("/:id", StoreController.desactivateStore);
storeRouter.put("/:id", StoreController.updateStore);

module.exports = storeRouter;