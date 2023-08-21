const Athlete = require('../../models/athlete');

module.exports = {
  create,
  getAthlete,
  deleteAthlete,
  getAllApprovedAthletes,
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

// Get all athletes, that status is Approved 
async function getAllApprovedAthletes(req, res) {
  try {
    const athletes = await Athlete.find({ status: 'Approved' });
    res.json(athletes);
  } catch (err) {
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
