const express = require('express');
const router = express.Router();
const offersCtrl = require('../../controllers/api/offers');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// add create offer route
router.post('/', ensureLoggedIn, offersCtrl.createOffer);
// add get all offers route
router.get('/:status', ensureLoggedIn, offersCtrl.getAllOffers);
// add get all manager offers route
router.get('/manager/:id/status/:status', ensureLoggedIn, offersCtrl.getAllManagerOffers);
// add get all user offers route
router.get('/athlete/:id/status/:status', ensureLoggedIn, offersCtrl.getAllAthleteOffers);
// add approve offer route
router.put('/approveOffer/:offerId', ensureLoggedIn, offersCtrl.approveOffer);
// add reject offer route
router.put('/rejectOffer/:offerId', ensureLoggedIn, offersCtrl.rejectOffer);
// add remove offer route
router.put('/removeOffer/:offerId', ensureLoggedIn, offersCtrl.removeOffer);


module.exports = router;