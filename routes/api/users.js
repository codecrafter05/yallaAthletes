const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// POST /api/users
router.post('/', usersCtrl.create);
// POST /api/users/login
router.post('/login', usersCtrl.login);
// GET /api/users/check-token
router.get('/check-token',ensureLoggedIn, usersCtrl.checkToken);
// GET /api/users/profile
router.get('/profile', ensureLoggedIn, usersCtrl.getUser);
// PUT /api/users/profile
router.put('/profile', ensureLoggedIn, usersCtrl.updateUser);
// DELETE /api/users/:userId
router.delete('/', usersCtrl.deleteUser);

module.exports = router;