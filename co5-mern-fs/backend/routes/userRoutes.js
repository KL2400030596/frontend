const express = require("express");
const router = express.Router();

let users = [
  { name: "Asmitha", email: "asmitha@example.com" },
  { name: "John", email: "john@example.com" },
];

// ✅ GET all users
router.get("/", (req, res) => {
  res.json(users);
});

// ✅ POST add new user
router.post("/", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email required" });
  }

  const newUser = { name, email };
  users.push(newUser);

  res.status(201).json({ message: "User created", user: newUser });
});

module.exports = router;
