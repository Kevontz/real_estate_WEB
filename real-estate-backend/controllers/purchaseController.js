const Purchase = require('../models/Purchase');

// Função para criar uma nova compra
exports.createPurchase = async (req, res) => {
    try {
        const { propertyId, userId, paymentMethod, totalPrice } = req.body;

        const newPurchase = new Purchase({
            propertyId,
            userId,
            paymentMethod,
            totalPrice
        });


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
        const purchases = await Purchase.find();

        res.status(200).json({ purchases });
    } catch (error) {
        console.error('Erro ao obter compras:', error);
        res.status(500).json({ message: 'Erro ao obter compras' });
    }
};
