const { Model } = require('sequelize');
const Store = require('../models/StoreModel');

class StoreDAO {
    async createStore(store) {
        const newStore = await Store.create(store);
        return newStore;
    }

    async getStoreById(id) {
        const store = await Store.findByPk(id);
        return store;
    }

    async updateStore(store, id) {
        const updatedStore = await Store.update(store, {
            where: {
                id: id,
            }
        });
        return updatedStore;
    }

    async deleteStore(id) {
        const deletedStore = await Store.destroy({
            where: {
                id: id,
            }
        });
        return deletedStore;
    }
}