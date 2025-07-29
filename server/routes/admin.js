// server/routes/admin.js

const express = require('express');
const router = express.Router();
const {
  registerAdmin,
  loginAdmin,
  getAllUsers,
  deleteUser,
} = require('../controllers/adminController');

// Register Admin
router.post('/register', registerAdmin);

// Login Admin
router.post('/login', loginAdmin);

// Get All Users
router.get('/users', getAllUsers);

// Delete a User by ID
router.delete('/user/:id', deleteUser);

module.exports = router;
