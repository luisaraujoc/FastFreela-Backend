const StoreDAO = require("../dao/storeDAO");
const StoreDTO = require("../dto/storeDTO");

class StoreController {
  async getAllStores(req, res) {
    try {
      const stores = await StoreDAO.getAllStores();
      const storeDTOs = stores.map(StoreDTO.fromModel);
      res.status(200).json(storeDTOs);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar lojas." });
    }
  }

  async getStoreById(req, res) {
    try {
      const { id } = req.params;
      const store = await StoreDAO.getStoreById(id);
      if (!store) {
        return res.status(404).json({ error: "Loja não encontrada." });
      }
      res.status(200).json(StoreDTO.fromModel(store));
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar a loja." });
    }
  }

  async createStore(req, res) {
    try {
      const storeData = req.body;
      const newStore = await StoreDAO.createStore(storeData);
      res.status(201).json(StoreDTO.fromModel(newStore));
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar loja." });
    }
  }

  async desactivateStore(req, res) {
    try {
      const { id } = req.params;
      const desactivatedStore = await StoreDAO.desactivateStore(id);
      if (!desactivatedStore) {
        return res.status(404).json({ error: "Loja não encontrada." });
      }
      res.status(200).json(StoreDTO.fromModel(desactivatedStore));
    } catch (error) {
      res.status(500).json({ error: "Erro ao desativar loja." });
    }
  }

  async updateStore(req, res) {
    try {
      const { id } = req.params;
      const updateData = req.body;
      const updatedStore = await StoreDAO.updateStore(id, updateData);
      if (!updatedStore) {
        return res.status(404).json({ error: "Loja não encontrada." });
      }
      res.status(200).json(StoreDTO.fromModel(updatedStore));
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar loja." });
    }
  }
}

module.exports = new StoreController();
