const express = require('express');
const router = express.Router();
const purchaseController = require('../controllers/purchaseController');

// Rota para criar uma nova compra
router.post('/', purchaseController.createPurchase);

// Rota para obter todas as compras
router.get('/', purchaseController.getPurchases);

module.exports = router;
