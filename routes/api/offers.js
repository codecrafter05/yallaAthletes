const express = require('express');
const router = express.Router();
const offersCtrl = require('../../controllers/api/offers');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// add create offer route
router.post('/', ensureLoggedIn, offersCtrl.createOffer);

module.exports = router;