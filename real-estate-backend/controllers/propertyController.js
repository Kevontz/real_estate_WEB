const Property = require('../models/Property');
const User = require('../models/User');

exports.createProperty = async (req, res) => {
  const { title, description, price } = req.body;
  try {
    const newProperty = new Property({
      title,
      description,
      price,
      owner: req.user.id,
    });
    const property = await newProperty.save();
    res.json(property);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getProperties = async (req, res) => {
  try {
    const properties = await Property.find().populate('owner', 'name email');
    res.json(properties);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id).populate('owner', 'name email');
    if (!property) return res.status(404).json({ msg: 'Property not found' });
    res.json(property);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updateProperty = async (req, res) => {
  const { title, description, price, status } = req.body;
  try {
    let property = await Property.findById(req.params.id);
    if (!property) return res.status(404).json({ msg: 'Property not found' });

    property = await Property.findByIdAndUpdate(
      req.params.id,
      { $set: { title, description, price, status } },
      { new: true }
    );

    res.json(property);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.deleteProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) return res.status(404).json({ msg: 'Property not found' });

    await Property.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Property removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
