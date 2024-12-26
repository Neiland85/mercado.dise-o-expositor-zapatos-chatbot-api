import express from "express";
import dotenv from "dotenv";
import productsRouter from "./routes/products.routes.js";
import chatbotRouter from "./routes/chatbot.routes.js"; // Ruta para el ChatBot

dotenv.config();

const port = process.env.PORT || 3004;

const app = express();

// Middlewares para manejar peticiones
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta base para validar funcionamiento
app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente");
});

// Rutas específicas
app.use("/products", productsRouter);
app.use("/api/chatbot", chatbotRouter);

// Arrancar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

