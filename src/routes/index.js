const express = require('express');
// const userRoutes = require('./userRoutes'); // Importa as rotas de usuários

const router = express.Router();

// Hello World
router.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});


module.exports = router;
