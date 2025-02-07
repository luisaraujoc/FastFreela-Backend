const { Model } = require('sequelize');
const LegalEntities = require('../models/LegalEntitiesModel');

class LegalEntitiesDAO {
    async createLegalEntities(legalEntities) {
        const newLegalEntities = await LegalEntities.create(legalEntities);
        return newLegalEntities;
    }

    async getLegalEntitiesById(id) {
        const legalEntities = await LegalEntities.findByPk(id);
        return legalEntities;
    }

    async updateLegalEntities(legalEntities, id) {
        const updatedLegalEntities = await LegalEntities.update(legalEntities, {
            where: {
                id: id,
            }
        });
        return updatedLegalEntities;
    }

    async deleteLegalEntities(id) {
        const deletedLegalEntities = await LegalEntities.destroy({
            where: {
                id: id,
            }
        });
        return deletedLegalEntities;
    }
}