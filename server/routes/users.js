const express = require("express");

const router = express.Router();

const Users = require("../models/Users.js");

// Getting all
router.get("/", async (req, res) => {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {

  const user = new Users({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })
  console.log(user)
  try {
    const newUser = await user.save()
    res.status(201).json(newUser)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
});

module.exports = router;
