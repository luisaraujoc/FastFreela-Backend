const AdressDAO = require("../dao/adressDAO");
const AdressDTO = require("../dto/adressDTO");

class AdressController {
  async getAllAdresses(req, res) {
    try {
      const adresses = await AdressDAO.getAllAdresses();
      const adressDTOs = adresses.map(AdressDTO.fromModel);
      res.status(200).json(adressDTOs);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar endereços." });
    }
  }

  async getAdressById(req, res) {
    try {
      const { id } = req.params;
      const adress = await AdressDAO.getAdressById(id);
      if (!adress) {
        return res.status(404).json({ error: "Endereço não encontrado." });
      }
      res.status(200).json(AdressDTO.fromModel(adress));
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar o endereço." });
    }
  }

  async getAdressbyZipCode(req, res) {
    try {
      const { zipCode } = req.params;
      const adress = await AdressDAO.getAdressByZipCode(zipCode);
      if (!adress) {
        return res.status(404).json({ error: "Endereço não encontrado." });
      }
      res.status(200).json(AdressDTO.fromModel(adress));
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar o endereço." });
    }
  }

  async createAdress(req, res) {
    try {
      const adressData = req.body;
      const newAdress = await AdressDAO.createAdress(adressData);
      res.status(201).json(AdressDTO.fromModel(newAdress));
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar endereço." });
    }
  }

  async updateAdress(req, res) {
    try {
      const { id } = req.params;
      const updateData = req.body;
      const updatedAdress = await AdressDAO.updateAdress(id, updateData);
      if (!updatedAdress) {
        return res.status(404).json({ error: "Endereço não encontrado." });
      }
      res.status(200).json(AdressDTO.fromModel(updatedAdress));
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar endereço." });
    }
  }
}

module.exports = new AdressController();
