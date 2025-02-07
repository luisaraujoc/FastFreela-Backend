const { Model } = require('sequelize');
const CancelattionReasons = require('../models/CancelattionReasonsModel');

class CancelattionReasonsDAO {
    async createCancelattionReasons(cancelattionReasons) {
        const newCancelattionReasons = await CancelattionReasons.create(cancelattionReasons);
        return newCancelattionReasons;
    }

    async getCancelattionReasonsById(id) {
        const cancelattionReasons = await CancelattionReasons.findByPk(id);
        return cancelattionReasons;
    }

    async updateCancelattionReasons(cancelattionReasons, id) {
        const updatedCancelattionReasons = await CancelattionReasons.update(cancelattionReasons, {
            where: {
                id: id,
            }
        });
        return updatedCancelattionReasons;
    }

    async deleteCancelattionReasons(id) {
        const deletedCancelattionReasons = await CancelattionReasons.destroy({
            where: {
                id: id,
            }
        });
        return deletedCancelattionReasons;
    }
}