const FoodItem = require('../models/FoodItem');

exports.getFoodItems = async (req, res) => {
  try {
    const foodItems = await FoodItem.find();
    res.status(200).json(foodItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
