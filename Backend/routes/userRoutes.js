const express = require("express");
const router = express.Router();
const Users = require("../models/testModel");
//Add new user
router.post("/", async (req, res) => {
  try {
    const newuser = new Users(req.body);
    const saveUser = await newuser.save();
    res.status(200).json(saveUser);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/", async (req, res) => {
  //get user by id
  if (req.query.id) {
    const getUser = await Users.findById(req.query.id);
    res.status(200).json(getUser);
  } else {
    //get all users
    try {
      const newuser = await Users.find();
      res.status(200).json(newuser);
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  }
});

// update user
router.put("/", async (req, res) => {
  try {
    const newuser = await Users.findByIdAndUpdate(req.query.id, req.body);
    res.status(200).json({ message: "updata success" });
    if (!newuser) {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});
// delet user
router.delete("/", async (req, res) => {
  try {
    const newuser = await Users.deleteOne(req.params.id);

    res.status(200).json(newuser);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
