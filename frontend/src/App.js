import React, { useState } from "react"; // Importar React y useState
import "./App.css"; // Estilos CSS
import axios from "axios"; // Importar axios para solicitudes HTTP

const App = () => {
  // Estados para manejar la pregunta del usuario y la respuesta del chatbot
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evitar que la página se recargue al enviar el formulario
    try {
      const res = await axios.post("http://localhost:3000/api/chatbot", {
        question: question,
      });
      setResponse(res.data.message); // Actualizar la respuesta en el estado
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      setResponse("Hubo un error. Inténtalo nuevamente.");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Integrabot ChatBot</h1>
        <p>Haz una pregunta al chatbot y obtén una respuesta instantánea.</p>

        {/* Formulario */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Escribe tu pregunta..."
            className="input-field"
          />
          <button type="submit" className="submit-button">
            Enviar
          </button>
        </form>

        {/* Mostrar la respuesta */}
        {response && (
          <div className="response-box">
            <h2>Respuesta del ChatBot:</h2>
            <p>{response}</p>
          </div>
        )}
      </header>
    </div>
  );
};

export default App;

