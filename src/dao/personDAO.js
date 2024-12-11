const { Model } = require("sequelize");
const Person = require("../models/personModel");

class PersonDAO {
  // getAllPersons
  async getAllPersons() {
    return Person.findAll();
  }

  // getPersonById
  async getPersonById(id) {
    return Person.findByPk(id);
  }

  // createPerson
  async createPerson(data) {
    return Person.create(data);
  }

  // updatePerson
  async updatePerson(id, data) {
    const person = await Person.findByPk(id);
    if (!person) {
      return null;
    }
    return person.update(data);
  }
}

module.exports = new PersonDAO();
