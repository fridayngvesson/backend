require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const contactRoutes = require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Anslut till databasen
connectDB();

// Routes
app.use("/products", productRoutes);
app.use("/contact", contactRoutes);

// Felhanterings-middleware
app.use(errorHandler);

// Starta servern
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
