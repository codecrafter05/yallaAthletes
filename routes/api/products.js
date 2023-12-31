const express = require('express');
const router = express.Router();
const productsCtrl = require('../../controllers/api/products');
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', productsCtrl.getProduct);

router.post('/', ensureLoggedIn, productsCtrl.createProduct);

router.delete('/:productId', ensureLoggedIn, productsCtrl.deleteProduct);



module.exports = router;