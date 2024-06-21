const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.header('Authorization');
  
  // Verifica se o endpoint é o específico que deve ser público
  if (req.path === '/api/users') {
    return next(); // Permite acesso público sem autenticação
  }
  
  // Verifica se existe um token JWT no header de autorização
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Autenticação necessária.' });
  }

  const token = authHeader.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Token não encontrado.' });
  }

  try {
    const decoded = jwt.verify(token, SegredoAF); // Substitua 'SegredoAF' pela sua chave secreta real
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token inválido.' });
  }
};

module.exports = authMiddleware;
