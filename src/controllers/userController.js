const UserDAO = require("../dao/userDAO");
const UserDTO = require("../dto/userDTO");

class UserController {
  // Retorna todos os usuários
  async getAllUsers(req, res) {
    try {
      const users = await UserDAO.getAllUsers();
      const userDTOs = users.map(UserDTO.fromModel);
      res.status(200).json(userDTOs);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar usuários." });
    }
  }

  // Retorna um usuário pelo ID
  async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await UserDAO.getUserById(id);
      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado." });
      }
      res.status(200).json(UserDTO.fromModel(user));
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar o usuário." });
    }
  }

  // Cria um novo usuário
  async createUser(req, res) {
    try {
      const userData = req.body;
      const newUser = await UserDAO.createUser(userData);
      res.status(201).json(UserDTO.fromModel(newUser));
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar usuário." });
    }
  }

  // Atualiza os dados de um usuário
  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const updateData = req.body;
      const updatedUser = await UserDAO.updateUser(id, updateData);
      if (!updatedUser) {
        return res.status(404).json({ error: "Usuário não encontrado." });
      }
      res.status(200).json(UserDTO.fromModel(updatedUser));
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar usuário." });
    }
  }

  // Desativa um usuário
  async unactivateUser(req, res) {
    try {
      const { id } = req.params;
      const deactivatedUser = await UserDAO.unactivateUser(id);
      if (!deactivatedUser) {
        return res.status(404).json({ error: "Usuário não encontrado." });
      }
      res.status(200).json(UserDTO.fromModel(deactivatedUser));
    } catch (error) {
      res.status(500).json({ error: "Erro ao desativar usuário." });
    }
  }
}

module.exports = new UserController();
