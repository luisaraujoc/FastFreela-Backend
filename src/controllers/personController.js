const personDTO = require("../dto/personDTO");
const personDAO = require("../dao/personDAO");

class PersonController {
  async getAllPersons(req, res) {
    try {
      const persons = await personDAO.getAllPersons();
      const personDTOs = persons.map(personDTO.fromModel);
      res.status(200).json(personDTOs);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar pessoas." });
    }
  }

  async getPersonById(req, res) {
    try {
      const { id } = req.params;
      const person = await personDAO.getPersonById(id);
      if (!person) {
        return res.status(404).json({ error: "Pessoa não encontrada." });
      }
      res.status(200).json(personDTO.fromModel(person));
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar a pessoa." });
    }
  }

  async createPerson(req, res) {
    try {
      const personData = {
        name: req.body.name,
        motherName: req.body.motherName,
        cpfCnpj: req.body.cpfCnpj,
        birthDate: req.body.birthDate,
        email: req.body.email,
      };
      const newPerson = await personDAO.createPerson(personData);
      res.status(201).json(personDTO.fromModel(newPerson));
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar pessoa." });
    }
  }

  async updatePerson(req, res) {
    try {
      const { id } = req.params;
      const updateData = req.body;
      const updatedPerson = await personDAO.updatePerson(id, updateData);
      if (!updatedPerson) {
        return res.status(404).json({ error: "Pessoa não encontrada." });
      }
      res.status(200).json(personDTO.fromModel(updatedPerson));
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar pessoa." });
    }
  }
}

module.exports = new PersonController();