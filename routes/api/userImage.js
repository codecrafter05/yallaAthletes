const express = require('express');
const router = express.Router();
const userImageCtrl = require('../../controllers/api/userImage');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', ensureLoggedIn, userImageCtrl.createImage);

router.get('/', ensureLoggedIn, userImageCtrl.getImageForLoggedInUser);

router.get('/all', ensureLoggedIn, userImageCtrl.getAllImages);

router.get('/:id', ensureLoggedIn, userImageCtrl.getImageForUser);

router.delete('/', ensureLoggedIn, userImageCtrl.deleteImageForLoggedInUser);

module.exports = router;