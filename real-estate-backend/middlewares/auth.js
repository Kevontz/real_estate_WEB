const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/config'); // Certifique-se de que a chave secreta está corretamente definida

const authMiddleware = (req, res, next) => {
  const authHeader = req.header('Authorization');

  // Verifica se o token JWT está no cabeçalho de autorização
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Autenticação necessária.' });
  }

  const token = authHeader.replace('Bearer ', '');

  try {
    // Verifica o token e decodifica os dados do usuário
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido.' });
  }
};

module.exports = authMiddleware;
