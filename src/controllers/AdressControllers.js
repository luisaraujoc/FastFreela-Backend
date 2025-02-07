import AdressDTO from "../dto/AdressDTO";
import AdressDAO from "../dao/AdressDAO";

class AdressController {
  async createAdress(req, res) {
    const {
      street,
      number,
      District,
      city,
      state,
      country,
      zipcode,
      complement,
    } = req.body;
    try {
      const adress = new AdressDTO(
        street,
        number,
        District,
        city,
        state,
        country,
        zipcode,
        complement
      );
      const newAdress = await AdressDAO.createAdress(adress);

      return res.status(201).json(newAdress);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async updateAdress(req, res) {
    const {
      street,
      number,
      District,
      city,
      state,
      country,
      zipcode,
      complement,
    } = req.body;

    try {
      const adress = new AdressDTO(
        street,
        number,
        District,
        city,
        state,
        country,
        zipcode,
        complement
      );
      const updatedAdress = await AdressDAO.updateAdress(adress, req.params.id);

      return res.status(200).json(updatedAdress);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async deleteAdress(req, res) {
    try {
      const deletedAdress = await AdressDAO.deleteAdress(req.params.id);
      return res.status(200).json(deletedAdress);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async getAdressById(req, res) {
    try {
      const adress = await AdressDAO.getAdressById(req.params.id);
      return res.status(200).json(adress);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async getAdressByStreet(req, res) {
    try {
      const adress = await AdressDAO.getAdressByStreet(req.params.street);
      return res.status(200).json(adress);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async getAllAdress(req, res) {
    try {
      const adresses = await AdressDAO.getAllAdress();
      return res.status(200).json(adresses);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async getAdressByCity(req, res) {
    try {
      const adresses = await AdressDAO.getAdressByCity(req.params.city);
      return res.status(200).json(adresses);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

    async getAdressByState(req, res) {
        try {
        const adresses = await AdressDAO.getAdressByState(req.params.state);
        return res.status(200).json(adresses);
        } catch (err) {
        return res.status(400).json({ error: err.message });
        }
    }

    async getAdressByCountry(req, res) {
        try {
        const adresses = await AdressDAO.getAdressByCountry(req.params.country);
        return res.status(200).json(adresses);
        } catch (err) {
        return res.status(400).json({ error: err.message });
        }
    }

    // add collum sql alter table to add country collum after state
    // 

    async getAdressByZipcode(req, res) {
        try {
        const adresses = await AdressDAO.getAdressByZipcode(req.params.zipcode);
        return res.status(200).json(adresses);
        } catch (err) {
        return res.status(400).json({ error: err.message });
        }
    }

    async getAdressByDistrict(req, res) {
        try {
        const adresses = await AdressDAO.getAdressByDistrict(req.params.district);
        return res.status(200).json(adresses);
        } catch (err) {
        return res.status(400).json({ error: err.message });
        }
    }
}
