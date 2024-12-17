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
    // return Person.create(data);
    try {
      return await Person.create(data);
    } catch (error) {
      if (error.name === "SequelizeUniqueConstraintError") {
        return { error: "CPF ou email já cadastrado." };
      }
      console.log("Erro no DAO:", error);
      return { error: "Erro ao criar pessoa:", };
      throw error;
    }
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

/*
curl -X POST http://localhost:3000/api/persons \
-H "Content-Type: application/json" \
-d '{
  "name": "Luis",
  "motherName": "Elane",
  "cpfCnpj": "12345678911",
  "birthDate": "2002-09-19",
  "email": "luislk_@outlook.com"
}'


*/