const express = require("express");
const connectDB = require("./ConnecttoMongoDB");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const app = express();

// Connect to MongoDB
connectDB();
// Enable CORS for all routes
app.use(express.json());
app.use(cors());
// Use routes
app.use("/user", userRoutes);

module.exports = app;
