const { Model } = require('sequelize');
const Orders = require('../models/OrdersModel');

class OrdersDAO {
    async createOrders(orders) {
        const newOrders = await Orders.create(orders);
        return newOrders;
    }

    async getOrdersById(id) {
        const orders = await Orders.findByPk(id);
        return orders;
    }

    async updateOrders(orders, id) {
        const updatedOrders = await Orders.update(orders, {
            where: {
                id: id,
            }
        });
        return updatedOrders;
    }

    async deleteOrders(id) {
        const deletedOrders = await Orders.destroy({
            where: {
                id: id,
            }
        });
        return deletedOrders;
    }
}