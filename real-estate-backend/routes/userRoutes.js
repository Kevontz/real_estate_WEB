// userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/auth'); // Certifique-se de que o caminho está correto

// Rotas públicas
router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);

// Aplicar o middleware de autenticação para todas as rotas abaixo
router.use(authMiddleware);

// Rotas protegidas
router.get('/app/area-cliente', userController.getClientData);
router.put('/app/area-cliente', userController.updateClientData);

module.exports = router;
