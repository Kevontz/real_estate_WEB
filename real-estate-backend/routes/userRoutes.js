const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/auth'); 

// Rotas públicas
router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);

router.use(authMiddleware);

// Rotas protegidas
router.get('/app/area-cliente', userController.getClientData);
router.put('/app/area-cliente', userController.updateClientData);

module.exports = router;
