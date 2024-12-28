<<<<<<< HEAD
const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 3000;

import productsRouter from "./routes/products.routes.js"; // Importar rutas

const app = express();

app.use(express.json()); //para trabajar  con peticiones tipo JSON
app.use(express.urlencoded({ extended: true})); //Permite la extensión o recibir cadenas por URL con otras variaciones. (post, get etc..)
//Rutas base de nuestro servidor

app.use("/", productsRouter);

//arranca nuestra app.
app.listen(port, () => {
 console.log(`Example bot running  http://localhost:${port}`);
})
=======
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

>>>>>>> 68db2c0 (feat: Added server.js to main branch)
