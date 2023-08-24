const Offer = require('../../models/offer');

module.exports = {
  createOffer,
  getAllOffers
}

async function createOffer(req, res) {
  try {
    const offer = await Offer.create(req.body);
    res.json(offer);
    console.log("Offer created:", offer);
  } catch (err) {
    console.error("Error creating offer: ", err);
    res.status(400).json(err);
  }
}

// Get all ofers, take status of offer from params
async function getAllOffers(req, res) {
  try {
    const offers = await Offer.find({ status: req.params.status }).populate('user');
    res.json(offers);
  } catch (err) {
    res.status(400).json(err);
  }
}