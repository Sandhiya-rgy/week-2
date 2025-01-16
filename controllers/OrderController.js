const Order = require('.../models/Order');

exports.placeOrder = async (req, res) => {
  try {
    const { userId, items, total } = req.body;
    const order = await Order.create({ userId, items, total });
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
