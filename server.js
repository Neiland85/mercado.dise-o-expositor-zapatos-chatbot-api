const express = require("express");
const dotenv = require("dotenv");

// Importar rutas
const productsRouter = require("./routes/products.routes.js"); // Ruta para productos
const chatbotRouter = require("./routes/chatbot.routes.js");   // Ruta para el ChatBot

// Configurar variables de entorno
dotenv.config();

// Definir puerto
const PORT = process.env.PORT || 3004; // Usar el puerto definido en las variables de entorno o 3004 por defecto

// Inicializar app de Express
const app = express();

// Middleware para parsear JSON y formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta raíz para comprobar funcionamiento
app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente");
});

// Configurar rutas
app.use("/api/products", productsRouter); // Rutas para productos
app.use("/api/chatbot", chatbotRouter);   // Rutas para el ChatBot

// Arrancar el servidor
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

