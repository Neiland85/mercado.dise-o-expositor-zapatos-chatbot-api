import express from "express";

const router = express.Router();

// Simulación de datos de productos
const products = [
  { id: 1, name: "Zapato Deportivo", price: 50 },
  { id: 2, name: "Zapato Formal", price: 80 },
];

// Ruta para obtener todos los productos
router.get("/", (req, res) => {
  res.json(products);
});

export default router;

