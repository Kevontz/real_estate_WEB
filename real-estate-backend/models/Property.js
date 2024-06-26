const mongoose = require('mongoose');
const PropertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, default: 'available' }, // 'available' ou 'sold'
});
module.exports = mongoose.model('Property', PropertySchema);
