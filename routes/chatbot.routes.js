const express = require('express');
const router = express.Router();
const chatbotBasic = require('../middlewares/chatbotBasic');

router.post('/chatbot', chatbotBasic);

module.exports = router;

