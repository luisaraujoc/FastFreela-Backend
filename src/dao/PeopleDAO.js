const { Model } = require('sequelize');
const People = require('../models/PeopleModel');

class PeopleDAO {
    async createPeople(people) {
        const newPeople = await People.create(people);
        return newPeople;
    }

    async getPeopleById(id) {
        const people = await People.findByPk(id);
        return people;
    }

    async updatePeople(people, id) {
        const updatedPeople = await People.update(people, {
            where: {
                id: id,
            }
        });
        return updatedPeople;
    }

    async deletePeople(id) {
        const deletedPeople = await People.destroy({
            where: {
                id: id,
            }
        });
        return deletedPeople;
    }
}