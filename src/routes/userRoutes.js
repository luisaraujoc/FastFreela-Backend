const express = require("express");
const UserController = require("../controllers/userController");

const router = express.Router();

// Rotas

// olá usuario
router.get("/ola", (req, res) => {
  res.send("Olá, usuário!");
});

router.get("/all", UserController.getAllUsers); // Retorna todos os usuários
router.get("/:id", UserController.getUserById); // Retorna usuário pelo ID
router.post("/", UserController.createUser); // Cria um novo usuário
router.put("/:id", UserController.updateUser); // Atualiza um usuário pelo ID
router.patch("/:id/unactivate", UserController.unactivateUser); // Desativa um usuário pelo ID

module.exports = router;
