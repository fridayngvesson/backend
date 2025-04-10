const express = require("express");
const router = express.Router();
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require("../controllers/productController");

// Route för att hämta alla produkter
router.get("/", getProducts);

// Route för att hämta en specifik produkt baserat på ID
router.get("/:id", getProductById);

// Route för att skapa en ny produkt
router.post("/", createProduct);

// Route för att uppdatera en befintlig produkt baserat på ID
router.put("/:id", updateProduct);

// Route för att ta bort en produkt baserat på ID
router.delete("/:id", deleteProduct);

module.exports = router;
