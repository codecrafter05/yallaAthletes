const Athlete = require('../../models/athlete');

module.exports = {
  create,
  getAthlete,
  getAllAthletesFiltered,
  deleteAthlete,
  showAthleteDetails
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

// Get all athletes, take status from params
async function getAllAthletesFiltered(req, res) {
  try {
    const athletes = await Athlete.find({ status: req.params.status }).populate('user');
    res.json(athletes);
  } catch (err) {
    res.status(400).json(err);
  }
}

// show athlete details page
async function showAthleteDetails(req, res) {
  try {
    const athlete = await Athlete.findById(req.params.athleteId).populate('user');
    console.log('Fetched athlete details:', athlete);

    res.json(athlete);
  } catch (err) {
    console.error('Error fetching athlete details:', err);
    res.status(400).json(err);
  }
}

async function deleteAthlete(req, res) {
  try {
    // Delete the athlete by user ID
    await Athlete.findOneAndDelete({ user: req.user._id });
    res.json({ message: 'Athlete deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting athlete' });
  }
}
