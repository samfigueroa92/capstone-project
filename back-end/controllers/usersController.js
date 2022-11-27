// CONFIGURATIONS
const express = require("express");
const users = express.Router();

// IMPORTING ALL USER QUERIES
const {
  getAllUsers,
  getUser,
  deleteUser,
  editUser,
} = require("../queries/users.js");

// ROUTES
// INDEX / ALL USERS
users.get("/", async (req, res) => {
  const allUsers = await getAllUsers();
  if (allUsers[0]) {
    res.status(200).json(allUsers);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// SINGLE USER
// !--- The id being passed here is the uid of the user from Firebase ---!
users.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await getUser(id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "not Found" });
  }
});

// EDIT USER
// !--- The id being passed here is the uid of the user from Firebase ---!
users.put("/:id", async (req, res) => {
  const { id } = req.params;
  const editedUser = await editUser(req.body, id);
  if (editedUser) {
    res.status(200).json(editedUser);
  } else {
    res.status(400).json({ error: "User not updated" });
  }
});

// DELETE USER
// !--- The id being passed here is the uid of the user from Firebase ---!
users.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedUser = await deleteUser(id);
  if (deletedUser.id) {
    res.status(200).json(deletedUser);
  } else {
    res.status(400).json("User Not Found");
  }
});

module.exports = users;