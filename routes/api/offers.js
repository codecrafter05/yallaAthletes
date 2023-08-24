const express = require('express');
const router = express.Router();
const athletesCtrl = require('../../controllers/api/athletes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');



module.exports = router;