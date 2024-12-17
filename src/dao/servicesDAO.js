const { Model } = require("sequelize");
const Service = require("../models/servicesModel");

class ServiceDAO {
  // getAllServices
  async getAllServices() {
    return Service.findAll();
  }

  // getServiceById
  async getServiceById(id) {
    return Service.findByPk(id);
  }

  // createService
  async createService(data) {
    return Service.create(data);
  }

  // updateService
  async updateService(id, data) {
    const service = await Service.findByPk(id);
    if (!service) {
      return null;
    }
    return service.update(data);
  }
}


module.exports = new ServiceDAO();