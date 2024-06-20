// userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota para criar um novo usuário
router.post('/signup', userController.createUser);

// Rota para obter todos os usuários
router.get('/', userController.getUsers);

module.exports = router;
