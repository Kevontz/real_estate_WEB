const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { jwtSecret } = require('../config/config');

const userController = {
  createUser: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(400).json({ message: 'Usuário já existe.' });
      }

      const newUser = new User({ name, email, password });
      await newUser.save();

      res.status(201).json({ message: 'Usuário criado com sucesso.', user: { name, email } });
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      res.status(500).json({ message: 'Erro ao criar usuário.' });
    }
  },

  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: 'Credenciais inválidas.' });
      }

      if (password !== user.password) {
        return res.status(400).json({ message: 'Credenciais inválidas.' });
      }

      const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '1h' });
      res.json({ token });
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      res.status(500).json({ message: 'Erro ao fazer login.' });
    }
  },

  getClientData: async (req, res) => {
    try {
      const userId = req.user.userId;
      const user = await User.findById(userId).select('-password');

      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
      }

      res.json({
        name: user.name,
        email: user.email
      });
    } catch (error) {
      console.error('Erro ao obter dados do cliente:', error);
      res.status(500).json({ message: 'Erro ao obter dados do cliente.' });
    }
  },

  updateClientData: async (req, res) => {
    try {
      const userId = req.user.userId;
      const updatedData = req.body;
      const user = await User.findByIdAndUpdate(userId, updatedData, { new: true }).select('-password'); 

      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
      }

      res.json({
        message: 'Dados do cliente atualizados com sucesso.',
        data: user
      });
    } catch (error) {
      console.error('Erro ao atualizar dados do cliente:', error);
      res.status(500).json({ message: 'Erro ao atualizar dados do cliente.' });
    }
  }
};

module.exports = userController;
