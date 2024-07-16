const express = require('express');
const router = express.Router();
const whatsappController = require("../controllers/whatsappControllers");

router
.get("/" , whatsappController.VerifiToken)
.post("/", whatsappController.receiptMessage)

module.exports = router