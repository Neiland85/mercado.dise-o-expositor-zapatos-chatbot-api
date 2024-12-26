import express from 'express';
import dotenv from 'dotenv';
import productsRouter from "./routes/products.routes.js"; // Importar rutas
import chatbotRouter from "./routes/chatbot.routes.js"; // Nueva ruta para ChatBot

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

// Middlewares para manejar peticiones
app.use(express.json()); // Para trabajar con peticiones tipo JSON
app.use(express.urlencoded({ extended: true })); // Permite recibir cadenas por URL en varias formas (post, get, etc.)

// Rutas base de nuestro servidor
app.use("/", productsRouter);
app.use("/api/chatbot", chatbotRouter); // Nueva ruta para el ChatBot

// Arranca nuestra app
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

