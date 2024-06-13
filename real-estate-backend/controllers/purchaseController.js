// Importando o modelo Purchase
const Purchase = require('../models/Purchase');

// Função para criar uma nova compra
exports.createPurchase = async (req, res) => {
    try {
        const { propertyId, userId, paymentMethod, totalPrice } = req.body;

        // Criar uma nova instância de Purchase com os dados recebidos
        const newPurchase = new Purchase({
            propertyId,
            userId,
            paymentMethod,
            totalPrice
        });

        // Salvar a nova compra no banco de dados
        const purchase = await newPurchase.save();

        res.status(201).json({ message: 'Compra criada com sucesso', purchase });
    } catch (error) {
        console.error('Erro ao criar compra:', error);
        res.status(500).json({ message: 'Erro ao criar compra' });
    }
};

// Função para obter todas as compras
exports.getPurchases = async (req, res) => {
    try {
        // Buscar todas as compras no banco de dados
        const purchases = await Purchase.find();

        res.status(200).json({ purchases });
    } catch (error) {
        console.error('Erro ao obter compras:', error);
        res.status(500).json({ message: 'Erro ao obter compras' });
    }
};
