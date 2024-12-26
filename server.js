// Importar dependencias
const express = require('express');
require('dotenv').config();

// Variables de configuración
const port = process.env.PORT || 3000;

// Importar rutas
import productsRouter from './routes/products.routes.js';
import chatbotRouter from './routes/chatbot.routes.js'; // Nueva ruta para ChatBot

// Inicializar la aplicación
const app = express();

// Middlewares
app.use(express.json()); // Para trabajar con peticiones tipo JSON
app.use(express.urlencoded({ extended: true })); // Permite recibir cadenas por URL con otras variaciones (POST, GET, etc.)

// Rutas base del servidor
app.use('/', productsRouter);
app.use('/api/chatbot', chatbotRouter); // Ruta base para el ChatBot

// Manejo de errores para rutas no encontradas
app.use((req, res, next) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Manejo centralizado de errores
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

