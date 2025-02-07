const { Model } = require('sequelize');
const OrderServices = require('../models/OrderServicesModel');

class OrderServicesDAO {
    async createOrderServices(orderServices) {
        const newOrderServices = await OrderServices.create(orderServices);
        return newOrderServices;
    }

    async getOrderServicesById(id) {
        const orderServices = await OrderServices.findByPk(id);
        return orderServices;
    }

    async updateOrderServices(orderServices, id) {
        const updatedOrderServices = await OrderServices.update(orderServices, {
            where: {
                id: id,
            }
        });
        return updatedOrderServices;
    }

    async deleteOrderServices(id) {
        const deletedOrderServices = await OrderServices.destroy({
            where: {
                id: id,
            }
        });
        return deletedOrderServices;
    }
}