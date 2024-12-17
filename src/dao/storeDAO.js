const { Model } = require("sequelize");
const Store = require("../models/storeModel");

class StoreDAO {
  // getAllStores
  async getAllStores() {
    return Store.findAll();
  }

  // getStoreById
  async getStoreById(id) {
    return Store.findByPk(id);
  }

  // createStore
  async createStore(data) {
    return Store.create(data);
  }

  async desactivateStore(id) {
    const store = await Store.findByPk(id);
    if (!store) {
      return null;
    }
    return store.update({ active: false });
  }

  // updateStore
  async updateStore(id, data) {
    const store = await Store.findByPk(id);
    if (!store) {
      return null;
    }
    return store.update(data);
  }
}


module.exports = new StoreDAO();