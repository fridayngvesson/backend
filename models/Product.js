const mongoose = require("mongoose");

// Definierar ett schema för produkter i databasen
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    images: { type: [String], required: true }
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
