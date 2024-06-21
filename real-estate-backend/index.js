const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const propertyRoutes = require('./routes/propertyRoutes');
const purchaseRoutes = require('./routes/purchaseRoutes');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware para permitir acesso a partir de diferentes origens (CORS)
app.use(cors({
  origin: 'http://localhost:4200', // Substitua pela URL do seu frontend Angular
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'] // Headers permitidos
}));

app.use(express.json());

// Rotas do backend
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/properties', propertyRoutes);
app.use('/api/purchases', purchaseRoutes);

// Conexão com o MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Conexão com o MongoDB estabelecida com sucesso!');
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
})
.catch(err => {
  console.error('Erro ao conectar ao MongoDB:', err);
});
