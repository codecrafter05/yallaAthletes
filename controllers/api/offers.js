const Offer = require('../../models/offer');

module.exports = {
  createProduct,
}

async function createProduct(req, res) {
  try {
    const offer = await Offer.create(req.body);
    res.json(offer);
    console.log("Product created:", offer);
  } catch (err) {
    console.error("Error creating product:", err);
    res.status(400).json(err);
  }
}