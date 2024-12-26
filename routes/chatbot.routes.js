
import express from "express";
import chatbotBasic from "../middlewares/chatbotBasic.js";

const router = express.Router();

// Ruta para manejar solicitudes de chatbot
router.post("/", chatbotBasic);

export default router;

