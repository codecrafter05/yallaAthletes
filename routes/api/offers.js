const express = require('express');
const router = express.Router();
const offersCtrl = require('../../controllers/api/offers');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// add create offer route
router.post('/', ensureLoggedIn, offersCtrl.createOffer);
// add get all offers route
router.get('/:status', ensureLoggedIn, offersCtrl.getAllOffers);

module.exports = router;