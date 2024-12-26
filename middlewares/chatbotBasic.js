const chatbotBasic = (req, res) => {
  const { question } = req.body;

  const faq = {
    stock: "Puedes verificar el stock en nuestra página web.",
    horarios: "Estamos abiertos de lunes a viernes de 9 AM a 6 PM.",
    devoluciones: "Tienes hasta 30 días para realizar devoluciones con ticket de compra.",
  };

  const answer = faq[question.toLowerCase()] || "Lo siento, no entiendo tu consulta.";
  res.json({ answer });
};

export default chatbotBasic;

