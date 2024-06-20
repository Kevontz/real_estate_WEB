const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { register, login, getUser } = require('../controllers/authController');

router.post('/signup', register);
router.post('/login', login);
router.get('/user', auth, getUser);

module.exports = router;
