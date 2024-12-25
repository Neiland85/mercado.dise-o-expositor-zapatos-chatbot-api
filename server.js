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
