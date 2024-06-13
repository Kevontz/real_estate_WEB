const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const {
  createProperty,
  getProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
} = require('../controllers/propertyController');

router.post('/', auth, createProperty);
router.get('/', getProperties);
router.get('/:id', getPropertyById);
router.put('/:id', auth, updateProperty);
router.delete('/:id', auth, deleteProperty);

module.exports = router;
