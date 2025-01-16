const express = require('express');
const { getFoodItems } = require('.../controllers/foodController');
const router = express.Router();

router.get('/', getFoodItems);

module.exports = router;
