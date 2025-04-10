const express = require("express");
const router = express.Router();
const { sendMessage } = require("../controllers/contactController");

// Route för att skicka ett meddelande via kontaktformulär
// POST / - Tar emot ett meddelande från klienten och skickar det vidare
router.post("/", sendMessage);

module.exports = router;
