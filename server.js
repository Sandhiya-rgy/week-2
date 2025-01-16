const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mock Database
let products = [
  { id: 1, name: "Pizza", price: 12.99, description: "Cheesy and delicious" },
  { id: 2, name: "Burger", price: 8.99, description: "Juicy beef patty" },
  { id: 3, name: "Pasta", price: 10.99, description: "Creamy Alfredo sauce" },
];
let users = [];
let orders = [];

// Routes

// Get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Add a new product
app.post('/api/products', (req, res) => {
  const product = req.body;
  product.id = products.length + 1;
  products.push(product);
  res.status(201).json(product);
});

// Register user
app.post('/api/register', (req, res) => {
  const user = req.body;
  const userExists = users.find((u) => u.email === user.email);
  if (userExists) {
    return res.status(400).json({ message: "User already exists." });
  }
  users.push(user);
  res.status(201).json({ message: "User registered successfully." });
});

// Login user
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return res.status(400).json({ message: "Invalid credentials." });
  }
  res.json({ message: "Login successful." });
});

// Place an order
app.post('/api/orders', (req, res) => {
  const order = req.body;
  order.id = orders.length + 1;
  orders.push(order);
  res.status(201).json(order);
});

// Get all orders
app.get('/api/orders', (req, res) => {
  res.json(orders);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
c