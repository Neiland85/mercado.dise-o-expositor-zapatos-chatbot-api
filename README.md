Mercado Diseño Expositor Zapatos Chatbot API

Descripción del Proyecto

El proyecto Mercado Diseño Expositor Zapatos Chatbot API está diseñado para automatizar la captación de expositores y la gestión de asistentes al evento Mercado de Diseño. Esta API ofrece funcionalidades como:

Respuesta automática a preguntas frecuentes mediante un chatbot.

Gestión de productos y expositores.

Generación y administración de formularios.

Escalabilidad y seguridad para manejar un alto volumen de usuarios.

El proyecto está desarrollado en Node.js y React, empleando las mejores prácticas de desarrollo de software.

Características Principales

Chatbot API:

Responde preguntas frecuentes como disponibilidad de productos, horarios y políticas de devolución.

Totalmente personalizable y escalable para nuevos temas.

Gestor de Productos:

CRUD (Crear, Leer, Actualizar, Eliminar) de productos.

Base de datos para almacenar y gestionar información relevante de expositores.

Seguridad:

Dependencias actualizadas para evitar vulnerabilidades conocidas.

Implementación de configuraciones seguras en nodemon.json y middleware de Express.

Arquitectura Modular:

Separación de responsabilidades entre frontend, rutas y middleware.

Diseño flexible para futuras integraciones.

Documentación y Escalabilidad:

Bien documentado para facilitar la colaboración.

Diseñado para crecer con las necesidades del evento.

Tecnologías Utilizadas

Backend: Node.js, Express.js

Frontend: React.js

Dependencias Clave:

nth-check y postcss para seguridad y compatibilidad.

nodemon para desarrollo eficiente.

Gestor de Paquetes: npm

Control de Versiones: Git y GitHub

Instalación

Clonar el repositorio:

git clone https://github.com/Neiland85/mercado.dise-o-expositor-zapatos-chatbot-api.git

Instalar dependencias:

npm install

Configurar variables de entorno:
Crear un archivo .env en la raíz del proyecto y agregar las siguientes variables:

PORT=3004

Iniciar el servidor:

Modo desarrollo:

npm run dev

Modo producción:

npm start

Estructura del Proyecto

mercado.dise-o-expositor-zapatos-chatbot-api/
├── frontend/               # Aplicación React (frontend)
├── middlewares/           # Middlewares para validaciones y lógica personalizada
├── routes/                # Rutas para API (chatbot, products, etc.)
├── .env                  # Variables de entorno
├── server.js             # Configuración del servidor principal
├── nodemon.json          # Configuración para nodemon (modo desarrollo)
├── package.json          # Información de dependencias y scripts

Rutas Principales

Chatbot

POST /api/chatbot

Entrada:

{
  "question": "stock"
}

Salida:

{
  "answer": "Puedes verificar el stock en nuestra página web."
}

Products

GET /products

Devuelve la lista de productos disponibles.

Buenas Prácticas Implementadas

Uso de ESLint y Prettier para estandarizar código.

Versionado semántico para dependencias.

Configuración modular para facilitar mantenibilidad y escalabilidad.

Revisión de dependencias con herramientas como npm audit y Dependabot.

Contribución

Hacer un fork del repositorio.

Crear una rama para tu funcionalidad o corrección:

git checkout -b feature/nueva-funcionalidad

Hacer commit de tus cambios:

git commit -m "Descripción clara de los cambios"

Hacer push a tu rama:

git push origin feature/nueva-funcionalidad

Crear un Pull Request en GitHub.

Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más información.

Contacto

Para cualquier consulta o sugerencia, por favor contactar a:

Autor: Neil Muñoz (Neiland85)

Contacto: theia3impact@gmail.com
