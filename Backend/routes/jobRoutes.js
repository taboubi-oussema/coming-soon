const express = require("express");
const data = require("../models/jobModel");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newJob = new data(req.body);
    const saveJob = await newJob.save();
    res.status(200).json(saveJob);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});
router.get("/", async (req, res) => {
  try {
    res.status(200).json(await data.find());
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.delete("/", async (req, res) => {
  try {
    const id = req.query.id;
    const deletJob = await data.findByIdAndDelete(id);
    res.status(200).json(deletJob);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
