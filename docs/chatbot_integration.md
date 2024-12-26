# Guía de Integración del ChatBot Básico

Esta guía explica cómo integrar el ChatBot básico en tu sitio web.

## 1. URL del ChatBot
La ruta base para el ChatBot es:
POST http://integrabot.net/api/chatbot

## 2. Cómo Usar
Envía una solicitud POST con el siguiente formato JSON dependiendo de tu consulta:

### Ejemplo de Cuerpo de Solicitud
```json
{
  "question": "plazas"
}
json
Copiar código
{
  "question": "precios"
}
json
Copiar código
{
  "question": "eventos"
}
json
Copiar código
{
  "question": "horarios"
}
json
Copiar código
{
  "question": "devoluciones"
}

Preguntas Comunes Admitidas
plazas: Consulta disponibilidad de plazas.
precios: Información sobre tarifas.
eventos: Consulta de próximos eventos.
horarios: Información sobre los horarios de atención.
devoluciones: Política de devoluciones.
3. Respuesta del Servidor
El servidor devolverá una respuesta JSON en el siguiente formato:

json
Copiar código
{
  "answer": "Respuesta específica a la consulta"
}
Ejemplo:
Solicitud
json
Copiar código
{
  "question": "plazas"
}
Respuesta
json
Copiar código
{
  "answer": "Actualmente hay 5 plazas disponibles."
}
