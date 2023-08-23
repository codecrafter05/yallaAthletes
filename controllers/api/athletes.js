const Athlete = require('../../models/athlete');

module.exports = {
  create,
  getAthlete,
  getAllAthletesFiltered,
  deleteAthlete,
  showAthleteDetails,
  approveAthlete,
  rejectAthlete,
  removeAthlete
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

// Add approveAthlete function
// will update user.role to Athlete
// will update athlete.status to Approved
async function approveAthlete(req, res) {
  try {
    const athlete = await Athlete.findById(req.params.athleteId).populate('user');
    console.log('Fetched athlete details:', athlete);
    athlete.user.role = 'Athlete';
    athlete.status = 'Approved';
    athlete.save();
    res.json({ message: 'Athlete approved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error approving athlete' });
  }
}

// Add rejectAthlete function
// will update athlete.status to Rejected
async function rejectAthlete(req, res) {
  try {
    const athlete = await Athlete.findById(req.params.athleteId);
    console.log('Fetched athlete details:', athlete);
    athlete.status = 'Rejected';
    athlete.save();
    res.json({ message: 'Athlete rejected successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error rejecting athlete' });
  }
}

// add removeAthlete function with id
// will remove athlete from database
async function removeAthlete(req, res) {
  try {
    const athlete = await Athlete.findById(req.params.athleteId).populate('user');
    console.log('Fetched athlete details:', athlete);
    athlete.user.role = 'Customer';
    athlete.save();
    athlete.remove();
    res.json({ message: 'Athlete removed successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error removing athlete' });
  }
}