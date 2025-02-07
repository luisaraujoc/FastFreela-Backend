const { Model } = require('sequelize');
const Services = require('../models/ServicesModel');

class ServicesDAO {
    async createServices(services) {
        const newServices = await Services.create(services);
        return newServices;
    }

    async getServicesById(id) {
        const services = await Services.findByPk(id);
        return services;
    }

    async updateServices(services, id) {
        const updatedServices = await Services.update(services, {
            where: {
                id: id,
            }
        });
        return updatedServices;
    }

    async deleteServices(id) {
        const deletedServices = await Services.destroy({
            where: {
                id: id,
            }
        });
        return deletedServices;
    }
}