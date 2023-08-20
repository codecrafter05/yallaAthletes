const express = require('express');
const router = express.Router();
const athletesCtrl = require('../../controllers/api/athletes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// // GET /api/athletes
// router.get('/', athletesCtrl.index);


// GET /api/athletes
router.get('/', athletesCtrl.getAthlete);
// POST /api/athletes
router.post('/', ensureLoggedIn, athletesCtrl.create);
// DELETE /api/athletes/:athleteId
router.delete('/', athletesCtrl.deleteAthlete);


module.exports = router;