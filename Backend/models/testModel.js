const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  First_Name: { type: String, required: true },
  Last_Name: { type: String, required: true },
  Email: { type: String, required: true },
  State: { type: String, required: true },
  Password: { type: String, required: true },
});

module.exports = mongoose.model("Users", UsersSchema);
