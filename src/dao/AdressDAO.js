const { Model } = require('sequelize');
const Adress = require('../models/AdressModel');

class AdressDAO {
    async createAdress(adress) {
        const newAdress = await Adress.create(adress);
        return newAdress;
    }

    async getAdressById(id) {
        const adress = await Adress.findByPk(id);
        return adress;
    }

    async updateAdress(adress, id) {
        const updatedAdress = await Adress.update(adress, {
            where: {
                id: id,
            }
        });
        return updatedAdress;
    }

    async deleteAdress(id) {
        const deletedAdress = await Adress.destroy({
            where: {
                id: id,
            }
        });
        return deletedAdress;
    }
}