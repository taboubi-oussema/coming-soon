const mongoose = require("mongoose");

const url =
  "mongodb+srv://admin:784408@cluster0.p5brv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connectDB = async () => {
  try {
    await mongoose.connect(url).then(console.log('connect to MongoDB'));
  } catch (error) {
    console.error(error.message);
  }
};
module.exports = connectDB;
