const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { register, login, getUser, getAllUsers } = require('../controllers/authController');
const userController = require('../controllers/userController');

router.post('/signup', register);
router.post('/login', login);
router.get('/user', auth, getUser); // Rota para obter informações do usuário autenticado
router.get('/users', auth, getAllUsers); // Rota para obter informações de todos os usuários

module.exports = router;
