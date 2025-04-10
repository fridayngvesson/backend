const mongoose = require("mongoose");

// Funktion för att ansluta till MongoDB
const connectDB = async () => {
    try {
         // Ansluter till MongoDB med URI från miljövariabler
        await mongoose.connect(process.env.MONGO_URI); 
        console.log("✅ MongoDB Connected");
    } catch (error) {
        // Loggar felmeddelande vid anslutningsfel och avslutar processen
        console.error("❌ MongoDB Connection Error:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
