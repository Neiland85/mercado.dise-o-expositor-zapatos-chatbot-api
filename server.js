// server.js
const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes/products.routes');
const app = express();

// Load environment variables
dotenv.config();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/products', routes);

// Root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the Mercado de Diseño API');
});

// Server configuration
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

