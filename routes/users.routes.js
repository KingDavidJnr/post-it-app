const express = require('express');
const usersController = require('../controllers/users.controller');

const router = express.Router();

// POST: To create a new user account
router.post('/users', usersController.addUser);

// GET: Fetch all users
router.get('/users', usersController.getUsers);

//GET: fetch a single user profile
router.get('/users/:id', usersController.getUser);

//PUT: Update a user account
router.put('users/:id', usersController.patchUser);

// DELETE: delete a user account
router.delete('/users/:id', usersController.deleteUser)

module.exports = router;