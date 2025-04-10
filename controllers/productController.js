const Product = require("../models/Product");

// Hämta alla produkter
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Fel vid hämtning av produkter" });
    }
};

// Hämta en enskild produkt
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: "Produkt hittades inte" });
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: "Fel vid hämtning av produkt" });
    }
};

// Lägg till en produkt
const createProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: "Fel vid skapande av produkt" });
    }
};

// Uppdatera en produkt
const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) return res.status(404).json({ message: "Produkt hittades inte" });
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: "Fel vid uppdatering av produkt" });
    }
};

// Ta bort en produkt
const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) return res.status(404).json({ message: "Produkt hittades inte" });
        res.json({ message: "Produkt borttagen" });
    } catch (error) {
        res.status(500).json({ message: "Fel vid borttagning av produkt" });
    }
};

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct };
