const express = require('express');
const router = express.Router();
const athletesCtrl = require('../../controllers/api/athletes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/athletes
router.get('/', athletesCtrl.getAthlete);
// display athlete details
router.get('/:athleteId', athletesCtrl.showAthleteDetails);
// GET ALL ATHLETES FILTERED using query string
router.get('/getAll/:status', athletesCtrl.getAllAthletesFiltered);
// POST /api/athletes
router.post('/', ensureLoggedIn, athletesCtrl.create);
// DELETE /api/athletes/:athleteId
router.delete('/', ensureLoggedIn, athletesCtrl.deleteAthlete);


module.exports = router;