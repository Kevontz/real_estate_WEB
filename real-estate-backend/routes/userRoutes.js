const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// Rota para criar um novo usuário
router.post('/register', userController.createUser);

// Rota para login
router.post('/login', userController.loginUser);

// Rota para obter dados do cliente (protegida)
router.get('/me', authMiddleware, userController.getClientData);

// Rota para atualizar dados do cliente (protegida)
router.put('/me', authMiddleware, userController.updateClientData);

module.exports = router;
