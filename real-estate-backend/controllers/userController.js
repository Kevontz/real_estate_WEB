const User = require('../models/User');

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

      res.status(201).json({ message: 'Usuário criado com sucesso.', user: newUser });
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      res.status(500).json({ message: 'Erro ao criar usuário.' });
    }
  },

  getUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.error('Erro ao obter usuários:', error);
      res.status(500).json({ message: 'Erro ao obter usuários.' });
    }
  },
};

module.exports = userController;
