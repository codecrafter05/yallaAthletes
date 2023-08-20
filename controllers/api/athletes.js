const Athlete = require('../../models/athlete');

module.exports = {
  create,
  getAthlete,
};

async function create(req, res) {
  try {
    const athlete = await Athlete.create(req.body);
    res.json(athlete);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getAthlete(req, res) {
  console.log('req.user:', req.user);
  try {
    const athlete = await Athlete.findOne({ user: req.user._id });
    console.log('Fetched athlete data:', athlete);
    res.json(athlete);
  } catch (err) {
    console.error('Error fetching athlete data:', err);
    res.status(400).json(err);
  }
}
