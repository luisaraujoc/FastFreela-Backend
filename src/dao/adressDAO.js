const { Model } = require("sequelize");
const Adress = require("../models/adressModel");

class AdressDAO {
  // getAllAdresses
  async getAllAdresses() {
    return Adress.findAll();
  }

  // getAdressById
  async getAdressById(id) {
    return Adress.findByPk(id);
  }

  // createAdress
  async createAdress(data) {
    return Adress.create(data);
  }

  // updateAdress
  async updateAdress(id, data) {
    const adress = await Adress.findByPk(id);
    if (!adress) {
      return null;
    }
    return adress.update(data);
  }
}

module.exports = new AdressDAO();