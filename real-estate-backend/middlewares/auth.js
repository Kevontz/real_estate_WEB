const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/config'); 

const authMiddleware = (req, res, next) => {
  const authHeader = req.header('Authorization');


  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Autenticação necessária.' });
  }

  const token = authHeader.replace('Bearer ', '');

  try {

    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido.' });
  }
};

module.exports = authMiddleware;
