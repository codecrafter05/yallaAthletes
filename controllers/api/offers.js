const Offer = require('../../models/offer');

module.exports = {
  createOffer,
  getAllOffers,
  getAllManagerOffers,
  getAllAthleteOffers,
  approveOffer,
  rejectOffer,
  removeOffer
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

async function getAllManagerOffers(req, res) {
  try {
    const offers = await Offer.find({ user: req.user._id, status: req.params.status }).populate('user').populate('athlete');
    res.json(offers);
  } catch (err) {
    res.status(400).json(err);
  }
}

// Get all offers that made by logged in user with status of offer
async function getAllAthleteOffers(req, res) {
  try {
    const offers = await Offer.find({ athlete: req.user._id, status: req.params.status }).populate('user').populate('athlete');
    res.json(offers);
  } catch (err) {
    res.status(400).json(err);
  }
}

// Approve offer, take offer id from params
async function approveOffer(req, res) {
  try {
    const offer = await Offer.findById(req.params.offerId);
    offer.status = 'Accepted';
    await offer.save();
    res.json(offer);
  } catch (err) {
    res.status(400).json(err);
  }
}

// Reject offer, take offer id from params
async function rejectOffer(req, res) {
  try {
    const offer = await Offer.findById(req.params.offerId);
    offer.status = 'Rejected';
    await offer.save();
    res.json(offer);
  } catch (err) {
    res.status(400).json(err);
  }
}

// Remove offer, take offer id from params
async function removeOffer(req, res) {
  try {
    const offer = await Offer.findById(req.params.offerId);
    await offer.remove();
    res.json(offer);
  } catch (err) {
    res.status(400).json(err);
  }
}