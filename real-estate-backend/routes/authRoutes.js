// authRoutes.js
console.log('authRoutes loaded');

const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { register, login, getUser, getAllUsers } = require('../controllers/authController');
const userController = require('../controllers/userController');

console.log('authController:', { register, login, getUser, getAllUsers });
console.log('auth:', auth);

router.post('/signup', register);
router.post('/login', login);
router.get('/user', auth, getUser);
router.get('/users', auth, getAllUsers);

module.exports = router;
