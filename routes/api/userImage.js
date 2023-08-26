const express = require('express');
const router = express.Router();
const userImageCtrl = require('../../controllers/api/userImage');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', ensureLoggedIn, userImageCtrl.createImage);

module.exports = router;