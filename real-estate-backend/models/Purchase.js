const mongoose = require('mongoose');

// Definindo o esquema para o modelo Purchase
const purchaseSchema = new mongoose.Schema({
    propertyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Property',
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    }
}, { timestamps: true });

// Criando e exportando o modelo Purchase
module.exports = mongoose.model('Purchase', purchaseSchema);
