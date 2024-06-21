// userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth'); // Importe o middleware de autenticação

// Rota para criar um novo usuário
router.post('/register', userController.createUser);

// Rota para login
router.post('/login', userController.loginUser);

// Rotas protegidas
router.use(auth); // Aplica o middleware de autenticação para as rotas abaixo

// Rota para obter dados do cliente (protegida)
router.get('/app/area-cliente', userController.getClientData);

// Rota para atualizar dados do cliente (protegida)
router.put('/app/area-cliente', userController.updateClientData);

module.exports = router;
