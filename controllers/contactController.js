// Funktion för att hantera inkommande meddelanden från kontaktformuläret
const sendMessage = (req, res) => {
     // Destrukturera namn, e-post och meddelande från förfrågans body
    const { name, email, message } = req.body;

    // Kontrollera att alla fält är ifyllda
    if (!name || !email || !message) {
        return res.status(400).json({ message: "Alla fält måste vara ifyllda!" });
    }
    // Om alla fält är ifyllda, skicka ett framgångsmeddelande
    res.status(200).json({ message: "Meddelande skickat!" });
};

module.exports = { sendMessage };
