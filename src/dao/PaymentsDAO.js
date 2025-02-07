const { Model } = require('sequelize');
const Payments = require('../models/PaymentsModel');

class PaymentsDAO {
    async createPayments(payments) {
        const newPayments = await Payments.create(payments);
        return newPayments;
    }

    async getPaymentsById(id) {
        const payments = await Payments.findByPk(id);
        return payments;
    }

    async updatePayments(payments, id) {
        const updatedPayments = await Payments.update(payments, {
            where: {
                id: id,
            }
        });
        return updatedPayments;
    }

    async deletePayments(id) {
        const deletedPayments = await Payments.destroy({
            where: {
                id: id,
            }
        });
        return deletedPayments;
    }
}