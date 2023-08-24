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

// Get all ofers, for logged in user
async function getAllOffers(req, res) {
  try {
    const offers = await Offer.find({ user: req.user._id }).populate('athlete');
    res.json(offers);
  } catch (err) {
    res.status(400).json(err);
  }
}