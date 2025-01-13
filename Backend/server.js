const express = require("express");
const connectDB = require("./ConnecttoMongoDB");
const DATA = require("./models/testModel");
const cors = require("cors");
const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();
// Enable CORS for all routes
app.use(cors());

app.get("/", async (req, res) => {
  try {
    const newData = new DATA({
      name: "dfef",
      description: "defe",
      price: 15,
    });
    const saveData = await newData.save();
    res.status(200).json(saveData);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

app.get("/test", async (req, res) => {
  try {
    const newData =await DATA.find()
    return res.status(200).json(newData);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
}); 

module.exports = app;
