const express = require('express');
const router = express.Router();
const productsCtrl = require('../../controllers/api/products');
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', ensureLoggedIn, productsCtrl.createProduct);


module.exports = router;