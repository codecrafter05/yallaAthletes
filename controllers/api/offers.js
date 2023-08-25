const Offer = require('../../models/offer');

module.exports = {
  createOffer,
  getAllOffers,
  getAllUserOffers
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
    const offers = await Offer.find({ status: req.params.status }).populate('user').populate('athlete');
    res.json(offers);
  } catch (err) {
    res.status(400).json(err);
  }
}

// Get all offers that made by logged in user with status of offer
async function getAllUserOffers(req, res) {
  try {
    const offers = await Offer.find({ user: req.user._id, status: req.params.status }).populate('user').populate('athlete');
    res.json(offers);
  } catch (err) {
    res.status(400).json(err);
  }
}